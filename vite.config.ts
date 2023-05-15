import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'path';

const dist = '../sites/rv/public/vue3';

export default defineConfig({
  base: '',
  build: {
    emptyOutDir: true,
    outDir: dist,
    rollupOptions: {
      input: {
        'app-carousel': resolve(`${__dirname}/src/contexts`, 'app-carousel.ts'),
        'app-search-results': resolve(`${__dirname}/src/contexts`, 'app-search-results.ts'),
        'app-single': resolve(`${__dirname}/src/contexts`, 'app-single.ts'),
        'app-style-guide': resolve(`${__dirname}/src/contexts`, 'app-style-guide.ts'),
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
  server: {
    port: 5173,
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
