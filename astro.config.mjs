// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  // Comment out "renderers: []" to enable Astro's default component support.
  renderers: [],

  devOptions: {
    port: 8888,
    // /**
    //  * Configure The trailing slash behavior of URL route matching:
    //  *   'always' - Only match URLs that include a trailing slash (ex: "/foo/")
    //  *   'never' - Never match URLs that include a trailing slash (ex: "/foo")
    //  *   'ignore' - Match URLs regardless of whether a trailing "/" exists
    //  * Default: 'always'
    //  */
    // trailingSlash?: 'always' | 'never' | 'ignore';
  },
});
