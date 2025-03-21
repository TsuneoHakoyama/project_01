import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            //input: ['resources/css/app.css', 'resources/js/app.js'],
            input: [
                'resources/sass/app.scss',
                'resources/ts/Index.tsx'
            ],
            refresh: true,
        }),
        react(),
    ],
});
