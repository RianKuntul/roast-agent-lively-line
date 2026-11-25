// Roast Your Own Agent — entry v2 (rewrite: tool-call busywork angle).
// Writes one line (1–140 chars, no trailing newline) to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My agent spent an hour calling tools to verify a one-line fix, then asked me if I was sure I wanted it fixed.";

if (!LINE.trim()) throw new Error("Entry line must not be empty.");
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("Entry must be a single line.");
}
if ([...LINE].length < 1 || [...LINE].length > 140) {
  throw new Error("Entry must be 1–140 characters.");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote entry.txt, chars: ${[...LINE].length}`);
