// @ts-check
import lit from "@astrojs/lit";

/** @type {import('astro').AstroUserConfig} */
import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [lit(), svelte(), vue({ jsx: true })],
  scopedStyleStrategy: "class",
  vite: {
    plugins: [],
  },
  server: {
    port: 8888,
  },
  site: "https://andrewhudson.dev",
});
