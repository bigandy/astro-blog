/** @type {import('astro').AstroUserConfig} */

import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import { defineConfig, envField } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
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
	integrations: [
		svelte(),
		mdx(),
		react(),
		icon(),
	],
	markdown: {
	   syntaxHighlight: 'prism',
	},
	scopedStyleStrategy: "class",
	server: {
		port: 8888,
	},
	site: "https://andrewhudson.dev",
	devToolbar: {
		enabled: false,
	},
	build: {
		// inlineStylesheets: "always",
	},
});
