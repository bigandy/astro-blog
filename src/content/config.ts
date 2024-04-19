import { defineCollection, z } from "astro:content";

// See https://github.com/colinhacks/zod/discussions/2125#discussioncomment-5202525
function getValues<T extends Record<string, any>>(obj: T) {
  return Object.values(obj) as [(typeof obj)[keyof T]];
}

const Template = {
  FullPage: "full-page",
} as const;
type Template = (typeof Template)[keyof typeof Template];

const Language = {
  english: "en",
  french: "fr",
} as const;
type Language = (typeof Language)[keyof typeof Language];

export const collections = {
  blog: defineCollection({
    schema: z.object({
      title: z.string(),
      author: z.string().optional(),
      date: z.date().transform((str) => new Date(str)),
      draft: z.boolean().default(false),
      tags: z.array(z.string().optional()).optional(),
      template: z.enum(getValues(Template)).optional(),
      language: z.enum(getValues(Language)).optional(),
    }),
  }),
};
