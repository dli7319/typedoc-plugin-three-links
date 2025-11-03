
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const docsDir = path.join(__dirname, '../three.js/docs/pages');
const pagesFile = path.join(__dirname, './three-pages.ts');

function getFiles(dir: string): string[] {
  const dirents = fs.readdirSync(dir, { withFileTypes: true });
  const files = dirents.map((dirent: fs.Dirent) => {
    const res = path.resolve(dir, dirent.name);
    return dirent.isDirectory() ? getFiles(res) : res;
  });
  return Array.prototype.concat(...files);
}

const files = getFiles(docsDir);
const pages = files.map(file => path.relative(docsDir, file));

const content = `export const threePages = ${JSON.stringify(pages, null, 2)};`;

fs.writeFileSync(pagesFile, content);
