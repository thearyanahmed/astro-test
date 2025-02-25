import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

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
    }
});
