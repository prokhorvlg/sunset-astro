import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";
import image from "@astrojs/image";
import markdownConfig from './markdown.config'
import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  site: 'https://sunset-system.com',
  integrations: [mdx({
  }), sitemap(), react(), image()],
  vite: {
    define: {
      'process.env.NODE_ENV': `'${process.env.NODE_ENV}'`
    }
  },
  //output: "hybrid",
  //adapter: vercel()
});