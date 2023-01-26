import { defineCollection, z } from "astro:content";

export const collections = {
  blog: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string().optional(),
      author: z.string().optional(),
      date: z.date().transform((str) => new Date(str)),
      draft: z.boolean().default(false),
      tags: z.array(z.string().optional()).optional(),
    }),
  }),
};
