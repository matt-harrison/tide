import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vitest/config';
import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'path';

const dist = 'dist/';

export default defineConfig({
  base: '',
  build: {
    emptyOutDir: true,
    outDir: dist,
    rollupOptions: {
      external: ['vue'],
      input: {
        index: resolve(`${__dirname}/`, 'index.js'),
      },
      output: {
        assetFileNames: 'assets/[name].[ext]',
        chunkFileNames: 'chunks/[name].js',
        dir: dist,
        entryFileNames: '[name].js',
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
