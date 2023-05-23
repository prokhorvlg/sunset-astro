import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";
import image from "@astrojs/image";
import markdownConfig from './markdown.config'

// https://astro.build/config
export default defineConfig({
  site: 'https://sunset-system.com',
  integrations: [mdx({
    //...markdownConfig,
    //extendPlugins: false,
  }), sitemap(), react(), image()],
  vite: {
    define: {
      'process.env.NODE_ENV': `'${process.env.NODE_ENV}'`
    }
  },
  //markdown: markdownConfig
});