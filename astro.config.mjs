/** @type {import('astro').AstroUserConfig} */

import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import { defineConfig, envField } from "astro/config";
import lit from "@awesome.me/astro-lit";
import { satteri } from "@astrojs/markdown-satteri";

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
			ATPROTO_APP_PASSWORD: envField.string({
				context: "server",
				access: "secret",
				optional: false,
			}),
			ATPROTO_DID: envField.string({
				context: "server",
				access: "secret",
				optional: false,
			}),
			ATPROTO_PUBLICATION_RKEY: envField.string({
				context: "server",
				access: "secret",
				optional: false,
			}),
			ATPROTO_SERVICE: envField.string({
				context: "server",
				access: "secret",
				optional: false,
			}),
			ATPROTO_IDENTIFIER: envField.string({
				context: "server",
				access: "secret",
				optional: false,
			}),
		},
	},
	// i18n: {
	// 	locales: ["en", "fr"],
	// 	defaultLocale: "en",
	// },
	integrations: [svelte(), mdx(), react({ compiler: true }), lit()],
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
		syntaxHighlight: false, // using microlighter to do this now!
	},
	// This prevents lightning css manage the css build process.
	vite: {
		build: {
			cssMinify: "esbuild",
		},
	},
	experimental: {
		incrementalBuild: true,
	},
	session: false,
});
