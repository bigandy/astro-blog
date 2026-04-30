import { defineEcConfig } from "astro-expressive-code";
// import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
// import { pluginCollapsibleSections } from "@expressive-code/plugin-collapsible-sections";

export default defineEcConfig({
    // Example: Change the themes
    themes: [
        // "material-theme-ocean",
        // "light-plus",
        "github-dark-dimmed",
    ],
    themeCssSelector: (theme) => `[data-theme='${theme.name}']`,
    plugins: [
        // pluginLineNumbers(),
        // pluginCollapsibleSections()
    ],
});
