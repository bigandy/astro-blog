import { defineCollection } from "astro:content";
import { Temporal } from "@js-temporal/polyfill";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// See https://github.com/colinhacks/zod/discussions/2125#discussioncomment-5202525
function getValues<T extends Record<string, any>>(obj: T) {
	return Object.values(obj) as [(typeof obj)[keyof T]];
}

const Template = {
	FullPage: "full-page",
} as const;

const postDate = z.date().transform((postDate: Date) => {
	const date = Temporal.Instant.from(postDate.toISOString()).toZonedDateTimeISO('Europe/Paris').toPlainDate().toString();

	return date;
});

const blog = defineCollection({
	loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		title: z.string(),
		author: z.string().optional(),
		date: postDate,
		draft: z.boolean().default(false),
		tags: z.array(z.string().optional()).optional(),
		template: z.enum(getValues(Template)).optional(),
	}),
});
const weeknotes = defineCollection({
	loader: glob({ base: "./src/content/weeknotes", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		title: z.string(),
		author: z.string().optional(),
		date: postDate,
		draft: z.boolean().default(false),
		tags: z.array(z.string().optional()).optional(),
		template: z.enum(getValues(Template)).optional(),
	}),
});

export const collections = {
	blog,
	weeknotes,
};
