import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import path from 'path';

export default defineConfig({
  root: './src',
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(process.cwd(), 'src'),
      },
    ],
  },
  plugins: [
    eslint({
      cache: false,
      fix: true,
    }),
  ],
});
