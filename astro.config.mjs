// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // TODO: set `site` to the real domain once Vercel assigns it.
  // Canonical <link> tags in BaseLayout stay off until this is filled in.
  // site: 'https://zifulu.com',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
