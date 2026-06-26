import type { Config } from "stylelint";

export default {
	plugins: ["stylelint-plugin-logical-css"],
	extends: [
		"stylelint-plugin-logical-css/configs/recommended",
		"stylelint-config-html",
	],
	rules: {
		"block-no-empty": true,
	},
} satisfies Config;
