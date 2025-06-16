/** @type {import('astro').AstroUserConfig} */
import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import robotsTxt from "astro-robots-txt";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import react from "@astrojs/react";

import { robotsTxtConfig } from "./robots";

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
    routing: "manual",
  },
  vite: {
    plugins: [],
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  integrations: [svelte(), robotsTxt(robotsTxtConfig), mdx(), react(), icon()],
  scopedStyleStrategy: "class",
  server: {
    port: 8888,
  },
  site: "https://andrewhudson.dev",
});
