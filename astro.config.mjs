// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // TODO: set `site` to the real domain once Vercel assigns it.
  // Canonical <link> tags in BaseLayout stay off until this is filled in.
  // site: 'https://zifulu.com',
  output: 'static',
  // MDX is only needed where a case study lays text and images out side by
  // side. Plain .md studies keep working unchanged.
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
