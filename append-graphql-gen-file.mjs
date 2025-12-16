import fs from "fs";
import path from "path";

const indexPath = path.resolve("src/types/index.ts");
const exportLine = `export * from './graphql';`;

if (!fs.existsSync(indexPath)) {
  console.error("index.ts not found:", indexPath);
  process.exit(1);
}

let content = fs.readFileSync(indexPath, "utf8");

// Normalize line endings just in case
const normalized = content.replace(/\r\n/g, "\n");

if (normalized.includes(exportLine)) {
  console.log("✔ graphql export already present");
  process.exit(0);
}

// Ensure file ends with newline
if (!normalized.endsWith("\n")) {
  content += "\n";
}

// Append safely
content += exportLine + "\n";

fs.writeFileSync(indexPath, content, "utf8");
console.log("✔ graphql export appended");
