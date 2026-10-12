import { copyFileSync, mkdirSync, readdirSync } from "node:fs";
import { join } from "node:path";

const cssDirectory = join(process.cwd(), ".next", "static", "css");
const cssFiles = readdirSync(cssDirectory).filter((file) => file.endsWith(".css"));

if (cssFiles.length !== 1) {
  throw new Error(`Expected one compiled stylesheet, found ${cssFiles.length}.`);
}

const exportDirectory = join(process.cwd(), "out");
mkdirSync(exportDirectory, { recursive: true });
copyFileSync(join(cssDirectory, cssFiles[0]), join(exportDirectory, "styles.css"));
