/** @type {import('astro').AstroUserConfig} */
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import robotsTxt from "astro-robots-txt";
import mdx from "@astrojs/mdx";

import { robotsTxtConfig } from "./robots";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false,
      // fallbackType: "rewrite",
    },
    // fallback: {
    //   fr: "en",
    // },
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
