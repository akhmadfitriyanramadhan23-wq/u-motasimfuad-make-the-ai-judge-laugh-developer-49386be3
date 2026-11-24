// Make the AI Judge Laugh: Developer Excuses — one funny single-line excuse
// a developer gives when code breaks in production (at most 200 characters).
// Writes the line to /output/entry.txt. Node 22, standard library only.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text =
  "It worked on my machine — which, in its defense, is the only machine anyone ever asked to run it. Production was just being dramatic.";

const limit = 200;

function main(): void {
  const length = Array.from(text).length;
  if (length < 1 || length > limit) {
    throw new Error(`entry must be 1-${limit} characters, got ${length}`);
  }
  const targetDir = "/output";
  const targetFile = join(targetDir, "entry.txt");
  mkdirSync(targetDir, { recursive: true });
  writeFileSync(targetFile, text, "utf8");
  const written = readFileSync(targetFile, "utf8");
  if (written !== text) {
    throw new Error("read-back mismatch: entry.txt does not match the entry text");
  }
  console.log(`wrote ${length} characters to ${targetFile}`);
  console.log(text);
}

main();
