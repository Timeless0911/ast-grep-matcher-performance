import fs from 'node:fs';
import path from 'node:path';

export interface Fixture {
  name: string;
  content: string;
}

const dir = path.join(import.meta.dirname, '../file');

export function loadFixtures(): Fixture[] {
  return fs
    .readdirSync(dir)
    .filter((name) => name.endsWith('.d.ts'))
    .sort()
    .map((name) => ({
      name,
      content: fs.readFileSync(path.join(dir, name), 'utf-8'),
    }));
}
