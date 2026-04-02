/** @type {import('astro').AstroUserConfig} */

import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import { defineConfig, envField } from "astro/config";

// https://astro.build/config
export default defineConfig({
	trailingSlash: 'always',
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
	integrations: [svelte(), mdx(), react()],
	markdown: {
		syntaxHighlight: "prism",
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
		inlineStylesheets: "always",
	},
	experimental: {
		rustCompiler: true,
		queuedRendering: {
			enabled: true,
			contentCache: true,
		},
	},
	vite: {
		css: {
			transformer: "lightningcss",
			lightningcss: {
                drafts: {
                    customMedia: true,
                },
                // targets: browserslistToTargets(browsersList),
            },
		},
	},
});
