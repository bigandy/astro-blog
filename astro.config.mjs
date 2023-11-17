// @ts-check
import lit from "@astrojs/lit";

/** @type {import('astro').AstroUserConfig} */
import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import vue from "@astrojs/vue";
import robotsTxt from "astro-robots-txt";
import mdx from "@astrojs/mdx";
const robotsTxtConfig = {
  policy: [
    // Ignore GPTBot
    {
      userAgent: "GPTBot",
      disallow: "/",
    },
  ],
  sitemap: false,
};

// https://astro.build/config
export default defineConfig({
  prefetch: true,
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
  experimental: {
    contentCollectionCache: true,
  },
});
