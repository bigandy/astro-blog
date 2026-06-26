/** @type {import('astro').AstroUserConfig} */

import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import { defineConfig, envField } from "astro/config";
import lit from "@awesome.me/astro-lit";
import expressiveCode from "astro-expressive-code";
import { satteri } from "@astrojs/markdown-satteri";

// https://astro.build/config
export default defineConfig({
	trailingSlash: "always",
	env: {
		schema: {
			NOTION_DB: envField.string({
				context: "server",
				access: "secret",
				optional: false,
			}),
			NOTION_KEY: envField.string({
				context: "server",
				access: "secret",
				optional: false,
				startsWith: "secret_",
			}),
		},
	},
	i18n: {
		locales: ["en", "fr"],
		defaultLocale: "en",
	},
	integrations: [expressiveCode(), svelte(), mdx(), react(), lit()],
	scopedStyleStrategy: "class",
	server: {
		port: 8888,
	},
	site: "https://andrewhudson.dev",
	devToolbar: {
		enabled: false,
	},
	build: {
		inlineStylesheets: "always",
	},
	markdown: {
		processor: satteri({
			features: { directive: true },
		}),
	},
});
