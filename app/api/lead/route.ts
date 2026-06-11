import { NextRequest, NextResponse } from 'next/server'
import { leadConfig } from '@/lib/lead-config'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { firstName, lastName, email, phone, concern, message } = body

    const fullName = `${firstName || ''} ${lastName || ''}`.trim()

    if (!firstName || !email || !phone) {
      return NextResponse.json(
        { success: false, error: 'firstName, email, and phone are required' },
        { status: 400 }
      )
    }

    const payload: Record<string, string> = {
      // Standard fields
      firstName,
      lastName: lastName || '',
      name: fullName,
      fullName,
      full_name: fullName,
      first_name: firstName,
      last_name: lastName || '',
      email,
      phone,
      phone_number: phone,
      reason: concern || message || '',
      message: concern || message || '',
      source: leadConfig.source,
      workflowId: leadConfig.workflowId,
      funnelId: leadConfig.funnelId,
      // Legacy JotForm aliases for backward compatibility
      q5_name: fullName,
      q6_whatsYour: email,
      q7_bestCell: phone,
      q3_whereIs: concern || message || 'New Patient',
      q23_haveYou23: '',
      // Source identification
      offerType: 'Chiro',
      offer_type: 'Chiro',
    }

    // Organic-channel identification: the CRM intake persists event_source_url
    // (raw_data) — it is the field reporting uses to separate website/organic
    // leads from ad leads. Use the actual submitting page when available.
    const referer = req.headers.get('referer') || ''
    payload.event_source_url = referer.startsWith('https://backandbodydoc.com')
      ? referer
      : 'https://backandbodydoc.com/'

    // Split-test conversion stamping. The intake normalizes unknown fields away
    // but has native split_test_id / variant_id columns — flatten the primary
    // variant into those, and keep the full map for GA cross-checking.
    const splVariants: Record<string, string> = {}
    req.cookies.getAll().forEach((c) => {
      if (c.name.startsWith('spl-var-')) splVariants[c.name.slice('spl-var-'.length)] = c.value
    })
    const splKeys = Object.keys(splVariants).sort()
    if (splKeys.length) {
      payload.spl_variants = JSON.stringify(splVariants)
      payload.split_test_id = splKeys[0]
      payload.variant_id = splVariants[splKeys[0]]
    }

    // Add client IP and user agent
    const clientIp = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || ''
    const userAgent = req.headers.get('user-agent') || ''
    if (clientIp) {
      payload.client_ip = clientIp
      payload.clientIpAddress = clientIp
    }
    if (userAgent) {
      payload.user_agent = userAgent
      payload.clientUserAgent = userAgent
    }

    const res = await fetch(leadConfig.webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      const text = await res.text()
      console.error('[/api/lead] Webhook error:', res.status, text)
      return NextResponse.json({ success: false, error: 'Webhook failed' }, { status: 502 })
    }

    console.log('[/api/lead] Lead forwarded', { source: 'Website', funnelId: leadConfig.funnelId })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[/api/lead] Lead API error:', err)
    return NextResponse.json({ success: false, error: 'Internal error' }, { status: 500 })
  }
}
