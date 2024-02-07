import { glob } from 'glob';
import path from 'path';

export function scanInputs(baseDir) {
  const files = glob.sync(path.resolve(baseDir, '**/*.html'));

  const entries = {};

  files.forEach((file) => {
    const name = path
      .relative(path.resolve(process.cwd(), baseDir), file)
      .replace('.html', '');
    const relativePath = path.relative(process.cwd(), file);
    entries[name] = relativePath;
  });

  return entries;
}
