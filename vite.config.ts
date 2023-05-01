import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'path';

export default defineConfig({
  base: '',
  build: {
    emptyOutDir: true,
    outDir: 'dist',
    rollupOptions: {
      input: {
        'app-carousel': resolve(__dirname, 'app-carousel.html'),
        'app-search-results': resolve(__dirname, 'app-search-results.html'),
        'app-style-guide': resolve(__dirname, 'app-style-guide.html'),
        'index': resolve(__dirname, 'index.html'),
      },
      output: {
        assetFileNames: 'assets/[name].[ext]',
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
      '^/search-results-data/.*': {
        changeOrigin: true,
        secure: true,
        target: 'https://www.rvtrader.com/',
        ws: true,
      },
    },
  },
});
