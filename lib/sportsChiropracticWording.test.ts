// Run: npm test  (node --experimental-strip-types --test lib/*.test.ts)
// Client ask 2026-11-09 (cmm 968922511): "change from sport medicine to sports chiropractic for both".
// No visible copy, tag list or schema entry on the site may say "Sports Medicine" / "Sport Medicine".
// The internal icon component name (SportsMedicineIcon) is not visible text and is allowed.
import assert from "node:assert/strict";
import test from "node:test";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOTS = ["app", "components", "lib", "public"];
const EXT = /\.(tsx?|jsx?|md|txt|json|xml)$/;

function walk(dir: string, out: string[]) {
  let names: string[];
  try { names = readdirSync(dir); } catch { return; }
  for (const n of names) {
    const p = join(dir, n);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (EXT.test(n) && !n.endsWith(".test.ts")) out.push(p);
  }
}

test("no page says Sports Medicine (client wants Sports Chiropractic)", () => {
  const files: string[] = [];
  for (const r of ROOTS) walk(r, files);
  assert.ok(files.length > 0, "found no site files to scan");
  const hits: string[] = [];
  for (const f of files) {
    const lines = readFileSync(f, "utf8").split("\n");
    lines.forEach((line, i) => {
      const visible = line.replace(/SportsMedicineIcon/g, "");
      if (/sports?[ -]medicine/i.test(visible)) hits.push(`${f}:${i + 1}`);
    });
  }
  assert.deepEqual(hits, []);
});

test("both doctors' tag lists carry Sports Chiropractic", () => {
  for (const f of ["app/doctors/page.tsx", "app/dr-brad/page.tsx", "app/page.tsx"]) {
    assert.match(readFileSync(f, "utf8"), /'Sports Chiropractic'/, f);
  }
});
