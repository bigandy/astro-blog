import { defineEcConfig } from "astro-expressive-code";

export default defineEcConfig({
    themes: ["github-dark", "github-light"],
    themeCssSelector: (theme) => `[data-color-mode='${theme.type}']`,
    styleOverrides: {
        uiFontFamily: "var(--font-atkinson)",
        uiFontSize: "var(--font-sizes-xs)",
        codeFontSize: "var(--font-sizes-xs)",
        // codeFontFamily: 'var(--font-monaspace-neon)',
        codePaddingBlock: "var(--spacing-3, 1rem)",
        codePaddingInline: "var(--spacing-8, 3rem)",
        borderRadius: "calc(1rem / 2)",
        borderWidth: "1px",
        borderColor: ({ theme }) =>
            theme.type === "dark"
                ? "var(--colors-neutral-775, red)"
                : "var(--colors-neutral-275, green)",
        // codeBackground: ({ theme }) =>
        //     theme.type === "dark"
        //         ? "var(--colors-neutral-875, red)"
        //         : "var(--colors-neutral-50, green)",

        frames: {
            // tooltipSuccessBackground: "var(--colors-neutral-925)",
            frameBoxShadowCssValue: "none",
            // editorTabBarBackground: ({ theme }) =>
            //     theme.type === "dark"
            //         ? "var(--colors-neutral-850, white)"
            //         : "var(--colors-neutral-75, white)",
            // editorActiveTabIndicatorTopColor: "none",
            // editorActiveTabIndicatorBottomColor: "none",
            // editorActiveTabBackground: ({ theme }) =>
            //     theme.type === "dark"
            //         ? "var(--colors-neutral-875, grey)"
            //         : "var(--colors-neutral-25, grey)",
            // terminalBackground: ({ theme }) =>
            //     theme.type === "dark"
            //         ? "var(--colors-neutral-875)"
            //         : "var(--colors-neutral-25)",
            // terminalTitlebarBackground: ({ theme }) =>
            //     theme.type === "dark"
            //         ? "var(--colors-neutral-850)"
            //         : "var(--colors-neutral-75)",
            // terminalTitlebarBorderBottomColor: ({ theme }) =>
            //     theme.type === "dark"
            //         ? "var(--colors-neutral-775)"
            //         : "var(--colors-neutral-75)",
            // terminalTitlebarDotsForeground: ({ theme }) =>
            //     theme.type === "dark"
            //         ? "var(--colors-neutral-775)"
            //         : "var(--colors-neutral-75)",
            // terminalTitlebarDotsOpacity: 1,
        },
    },
    plugins: [
        //   {
        //       name: "Custom Base Styles",
        //       baseStyles: `
        //   grid-column: breakout !important;
        //   font-variant-ligatures: discretionary-ligatures;
        // `,
        //   },
    ],
});
