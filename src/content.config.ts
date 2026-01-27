//@ts-check
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
    loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        type: z.enum(['release', 'announcement']),
        timestamp: z.date(),
        draft: z.boolean().default(false),
        tags: z.array(z.string()),
        releaseDate: z.date().optional(),
    }),
});

export const collections = { blog };
