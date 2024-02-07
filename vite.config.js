import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import { scanInputs } from './tools/scan-inputs';
import path from 'path';

export default defineConfig({
  publicDir: 'public',
  root: './src/pages',
  build: {
    outDir: '../../dist',
    rollupOptions: {
      input: scanInputs('src/pages'),
    },
  },
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
