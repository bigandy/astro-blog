/** @type {import('astro').AstroUserConfig} */
import { defineConfig, envField } from "astro/config";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";

import icon from "astro-icon";

import expressiveCode from "astro-expressive-code";

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
    i18n: {
        locales: ["en", "fr"],
        defaultLocale: "en",
        // routing: "manual",
    },
    integrations: [
        svelte(),
        expressiveCode({
            emitExternalStylesheet: false,
        }),
        mdx(),
        react(),
        icon(),
    ],
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
});
