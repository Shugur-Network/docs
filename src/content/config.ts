import { defineCollection, z } from 'astro:content';

const docs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    head: z.array(z.any()).optional(),
    template: z.string().optional(),
    hero: z.object({
      title: z.string(),
      tagline: z.string(),
      actions: z.array(z.object({
        text: z.string(),
        link: z.string(),
        variant: z.string().optional(),
        icon: z.string().optional()
      }))
    }).optional()
  }).optional()
});

export const collections = {
  docs
};
