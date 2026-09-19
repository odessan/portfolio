import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    year: z.number(),
    role: z.string(),
    stack: z.array(z.string()),
    link: z.string().url().nullish(),
    repo: z.string().url().nullish(),
    // empty or null falls back to a placeholder image derived from the slug
    // (nullish: Keystatic saves empty optional fields as null)
    cover: z.string().nullish(),
    // lower numbers sort first
    order: z.number().default(0),
    // shown on the homepage Mission Select (max 5); everything is on /missions
    featured: z.boolean().default(false),
  }),
});

export const collections = { projects };
