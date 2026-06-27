import functionTransformer from "./scripts/postcss/function-transformer.mjs";

const plugins = [
	functionTransformer({
		functions: [
			{
				name: "--spacing",
				code: `calc(var(--column-gap-size) * $1)`,
			},
			// {
			// 	name: "--test",
			// 	code: "`calc(var(--column-gap-size) * $1)`",
			// },
			// {
			// 	name: "--getAlphaRgb",
			// 	code: "rgb(from $1 r g b / $2)",
			// },
			// {
			// 	name: "--getAlphaOklab",
			// 	code: "oklab(from $1 l a b / $2)",
			// },
		],
	}),
];

export default {
	plugins,
};
