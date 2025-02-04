import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
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
            "Content-Security-Policy":
                "default-src 'self'; " +
                "script-src 'self' https://*.googleapis.com https://accounts.google.com https://t1.kakaocdn.net https://static.nid.naver.com http://code.jquery.com; " +
                "style-src 'self' 'unsafe-inline' https://*.googleapis.com https://cdn.jsdelivr.net https://accounts.google.com; " +
                "connect-src 'self' https://*.googleapis.com; " +
                "font-src 'self' https://fonts.gstatic.com https://cdn.jsdelivr.net; " +
                "img-src 'self' https://maps.gstatic.com https://maps.googleapis.com https://k.kakaocdn.net http://k.kakaocdn.net; " +
                "frame-src 'self' https://accounts.google.com; ",
        },
    },


    build: {
        outDir: '../backend/src/main/resources/static',
    },
})
