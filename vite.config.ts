import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'path';

export default defineConfig({
  build: {
    emptyOutDir: true,
    outDir: 'dist',
    rollupOptions: {
      input: {
        'app-carousel': resolve(`${__dirname}/src/contexts`, 'app-carousel.ts'),
        'app-search-results': resolve(`${__dirname}/src/contexts`, 'app-search-results.ts'),
        'app-single': resolve(`${__dirname}/src/contexts`, 'app-single.ts'),
      },
      output: {
        assetFileNames: 'assets/[name].css',
        chunkFileNames: 'chunks/[name].js',
        dir: 'dist',
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
  server: {
    port: 5174,
    proxy: {
      '/api': {
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        secure: true,
        target: 'https://www.rvtrader.com/',
        ws: true,
      },
    },
  },
});
