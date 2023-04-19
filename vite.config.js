import { defineConfig } from 'vite';
import path from 'path';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            ssr: 'resources/js/ssr.jsx',
            refresh: true,
        }),
        react(),
    ],
    ssr: {
        noExternal: [
            'laravel-vite-plugin',
            '@inertiajs/server',
        ],
    },
    resolve: {
        alias: [
            {
                find: "@",
                replacement: path.resolve(__dirname, './resources/js'),
            }
        ],
    }
});
