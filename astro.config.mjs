/** @type {import('astro').AstroUserConfig} */
import { defineConfig, envField } from "astro/config";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import robotsTxt from "astro-robots-txt";
import mdx from "@astrojs/mdx";

import { robotsTxtConfig } from "./robots";

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
  integrations: [svelte(), robotsTxt(robotsTxtConfig), mdx(), react(), icon()],
  scopedStyleStrategy: "class",
  vite: {
    plugins: [],
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  server: {
    port: 8888,
  },
  site: "https://andrewhudson.dev",
});
