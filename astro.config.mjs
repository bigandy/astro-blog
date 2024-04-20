// @ts-check
import lit from "@astrojs/lit";

/** @type {import('astro').AstroUserConfig} */
import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import vue from "@astrojs/vue";
import robotsTxt from "astro-robots-txt";
import mdx from "@astrojs/mdx";
import { robotsTxtConfig } from "./src/robots-config";

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
    routing: "manual",
  },
  integrations: [
    lit(),
    svelte(),
    vue({
      jsx: true,
    }),
    robotsTxt(robotsTxtConfig),
    mdx(),
  ],
  scopedStyleStrategy: "class",
  vite: {
    plugins: [],
  },
  server: {
    port: 8888,
  },
  site: "https://andrewhudson.dev",
});
