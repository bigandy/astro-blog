import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// See https://github.com/colinhacks/zod/discussions/2125#discussioncomment-5202525
function getValues<T extends Record<string, any>>(obj: T) {
	return Object.values(obj) as [(typeof obj)[keyof T]];
}

const Template = {
	FullPage: "full-page",
} as const;

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		author: z.string().optional(),
		date: z.coerce.date(),
		draft: z.boolean().default(false),
		tags: z.array(z.string().optional()).optional(),
		template: z.enum(getValues(Template)).optional(),
	}),
});
const weeknotes = defineCollection({
	loader: glob({ base: './src/content/weeknotes', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		author: z.string().optional(),
		date: z.date().transform((str: string) => new Date(str)),
		draft: z.boolean().default(false),
		tags: z.array(z.string().optional()).optional(),
		template: z.enum(getValues(Template)).optional(),
	}),
});

export const collections = {
	blog,
	weeknotes
};
