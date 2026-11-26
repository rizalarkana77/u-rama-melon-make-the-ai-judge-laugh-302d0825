import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "My desk plant died in week one, so I moved it to the meeting room — it now has perfect attendance and says nothing, just like the rest of us.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, joke, "utf8");

const readBack = readFileSync(outPath, "utf8");
if (readBack !== joke) {
  throw new Error("Read-back verification failed");
}
if (readBack.includes("\n")) {
  throw new Error("Entry must be a single line with no trailing newline");
}
if ([...readBack].length >= 200) {
  throw new Error("Entry must be under 200 characters");
}

const sha256 = createHash("sha256").update(readBack, "utf8").digest("hex");
console.log(`Wrote ${outPath} (${[...readBack].length} chars)`);
console.log(`SHA256: ${sha256}`);
console.log(readBack);
