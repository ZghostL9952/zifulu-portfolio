import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Case studies. One markdown file per study in src/content/work/.
 * The filename becomes the URL slug: advisrlab.md -> /work/advisrlab
 */
const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  // The schema is a function so it receives `image()`, which resolves a path in
  // frontmatter into a real image Astro can optimize -- and fails the build if
  // the file is missing, rather than shipping a broken <img>.
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      role: z.string(),
      team: z.string().optional(),
      timeline: z.string(),
      tools: z.array(z.string()).default([]),
      // Project mark, shown beside the title in the homepage list.
      logo: image().optional(),
      // Maps to a hit-shape id in the shelf SVG. Unset until the shelf exists.
      slot: z.string().optional(),
      // Lower sorts first on the homepage.
      order: z.number().default(99),
      // Drafts are excluded from getStaticPaths, so they never build a page.
      draft: z.boolean().default(false),
    }),
});

export const collections = { work };
