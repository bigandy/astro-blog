// @ts-check
import lit from "@astrojs/lit";

/** @type {import('astro').AstroUserConfig} */
import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [lit(), svelte()],
  scopedStyleStrategy: "class",
  vite: {
    plugins: []
  },
  server: {
    port: 8888
  },
  site: "https://andrewhudson.dev"
});