// @ts-check
import lit from "@astrojs/lit";

/** @type {import('astro').AstroUserConfig} */
import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import vue from "@astrojs/vue";
import robotsTxt from "astro-robots-txt";
import mdx from "@astrojs/mdx";
import addsToHead from "astro-adds-to-head";

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
  integrations: [
    lit(),
    svelte(),
    vue({
      jsx: true,
    }),
    robotsTxt(robotsTxtConfig),
    mdx(),
    addsToHead(), // This is to allow component css in .astro components imported into in .mdx files
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
