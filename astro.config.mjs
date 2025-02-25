import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import { onRequest } from './src/middleware/health'; // Import the middleware
export default defineConfig({
    output: 'server',
    adapter: node({
        mode: 'standalone'
    }),
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    vite: {
        ssr: {
            noExternal: ['@astrojs-ssr-virtual-entry'],
            mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
        }
    },
    middleware: [onRequest] // Add the middleware to the configuration
});
