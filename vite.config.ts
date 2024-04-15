import vue from '@vitejs/plugin-vue';
import { configDefaults, defineConfig } from 'vitest/config';
import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'path';

// TODO: Replace references to "RV" with dynamic vehicle type.

const dist = 'dist/';

export default defineConfig({
  base: '',
  build: {
    emptyOutDir: true,
    outDir: dist,
    rollupOptions: {
      input: {
        spa: resolve(`${__dirname}/`, 'index.html'),
      },
      output: {
        assetFileNames: 'assets/[name].[ext]',
        chunkFileNames: 'chunks/[name].js',
        dir: dist,
        entryFileNames: '[name].js',
      },
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    environment: 'jsdom',
    exclude: [...configDefaults.exclude, 'e2e/*'],
    globals: true,
    root: fileURLToPath(new URL('./', import.meta.url)),
  },
});
