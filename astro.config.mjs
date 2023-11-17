import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://sunset-system.com',
  integrations: [mdx(), sitemap(), react()],
  vite: {
    define: {
      'process.env.NODE_ENV': `'${process.env.NODE_ENV}'`
    }
  }
});