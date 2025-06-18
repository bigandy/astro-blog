import { defineCollection, z } from "astro:content";

// See https://github.com/colinhacks/zod/discussions/2125#discussioncomment-5202525
function getValues<T extends Record<string, any>>(obj: T) {
    return Object.values(obj) as [(typeof obj)[keyof T]];
}

const Template = {
    FullPage: "full-page",
} as const;
type Template = (typeof Template)[keyof typeof Template];

export const collections = {
    blog: defineCollection({
        schema: z.object({
            title: z.string(),
            author: z.string().optional(),
            date: z.date(),
            draft: z.boolean().default(false),
            tags: z.array(z.string().optional()).optional(),
            template: z.enum(getValues(Template)).optional(),
        }),
    }),
    weeknotes: defineCollection({
        schema: z.object({
            title: z.string(),
            author: z.string().optional(),
            date: z.date().transform((str) => new Date(str)),
            draft: z.boolean().default(false),
            tags: z.array(z.string().optional()).optional(),
            template: z.enum(getValues(Template)).optional(),
        }),
    }),
    "blog-fr": defineCollection({
        schema: z.object({
            title: z.string(),
            author: z.string().optional(),
            date: z.date().transform((str) => new Date(str)),
            draft: z.boolean().default(false),
            tags: z.array(z.string().optional()).optional(),
            template: z.enum(getValues(Template)).optional(),
            hasTranslation: z.boolean().default(false),
        }),
    }),
};
