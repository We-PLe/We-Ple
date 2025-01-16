import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@googlemaps/extended-component-library': 'https://ajax.googleapis.com/ajax/libs/@googlemaps/extended-component-library/0.6.11/index.min.js',
    },
  },

  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // Spring Boot 서버 URL
        changeOrigin: true,
      },
    },
    headers: {
        "Content-Security-Policy": "default-src 'self'; style-src 'self' 'unsafe-inline' https://*.googleapis.com https://cdn.jsdelivr.net; script-src 'self' https://*.googleapis.com; connect-src 'self' https://*.googleapis.com; font-src 'self' https://fonts.gstatic.com https://cdn.jsdelivr.net;",

      },
  },
  build: {
    outDir: '../backend/src/main/resources/static',
  },
})
