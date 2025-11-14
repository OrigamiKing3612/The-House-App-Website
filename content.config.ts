import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        blog: defineCollection({
            type: 'page',
            source: 'blog/*',
            schema: z.object({
                type: z.enum(['release', 'announcement']),
                timestamp: z.string().date(),
                draft: z.boolean().default(false),
                tags: z.array(z.string())
            })
        }),
        docs: defineCollection({
            type: 'page',
            source: 'docs/*',
            schema: z.object({
                draft: z.boolean().default(false),
            })
        })
    }
})
