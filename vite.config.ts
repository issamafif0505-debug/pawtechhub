import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                article: resolve(__dirname, 'articles/best-gps-trackers.html'),
                cameras: resolve(__dirname, 'articles/best-pet-cameras.html'),
                feeders: resolve(__dirname, 'articles/best-smart-feeders.html'),
                ebook: resolve(__dirname, 'ebook/index.html'),
                about: resolve(__dirname, 'about.html'),
            },
        },
    },
});
