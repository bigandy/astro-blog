import { declarationTransformer } from "./lib/transformer.mjs";

const plugin = (opts) => {
	opts = opts || {};
	const functions = opts.functions || [
		{
			functionName: "--spacing",
			function: `calc(var(--column-gap-size) * $1)`,
		},
	];

	return {
		postcssPlugin: "postcss-rows",

		Declaration(node) {
			return declarationTransformer(node, functions);
		},
	};
};

plugin.postcss = true;
export default plugin;
