/** @type {import('astro').AstroUserConfig} */
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
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
  integrations: [svelte(), robotsTxt(robotsTxtConfig), mdx(), react()],
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
