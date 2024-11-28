/** @type {import('astro').AstroUserConfig} */
import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import robotsTxt from "astro-robots-txt";
import mdx from "@astrojs/mdx";

import { robotsTxtConfig } from "./robots";

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
    routing: "manual",
  },
  integrations: [lit(), svelte(), robotsTxt(robotsTxtConfig), mdx()],
  scopedStyleStrategy: "class",
  vite: {
    plugins: [],
  },
  server: {
    port: 8888,
  },
  site: "https://andrewhudson.dev",
});
