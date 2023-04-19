import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";
import path from 'path';

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), react(), image()],
  vite: {
    define: {
      'process.env.NODE_ENV': `'${process.env.NODE_ENV}'`,
    },
  },
});