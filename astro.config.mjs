// @ts-check
import lit from "@astrojs/lit";

/** @type {import('astro').AstroUserConfig} */
export default {
  integrations: [lit()],
  scopedStyleStrategy: "class",
  vite: {
    plugins: [],
  },
  server: {
    port: 8888,
  },
  site: "https://andrewhudson.dev",
};
