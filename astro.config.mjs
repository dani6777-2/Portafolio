import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    react(),
    tailwind(),
  ],
  build: {
    assets: 'assets',
  },
  vite: {
    build: {
      sourcemap: true,
    },
  },
});
