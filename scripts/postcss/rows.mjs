function extractParentheses(str) {
	const results = [];
	const stack = [];

	for (let i = 0; i < str.length; i++) {
		if (str[i] === "(") {
			stack.push(i);
		} else if (str[i] === ")" && stack.length) {
			const start = stack.pop();

			// only capture outermost pairs
			if (stack.length === 0) {
				results.push(str.slice(start + 1, i));
			}
		}
	}

	return results;
}

export default (opts) => {
	opts = opts || {};
	const units = opts.units || [
		{
			functionName: "--unit",
			function: `calc(var(--column-gap-size) * $1)`,
		},
		{
			functionName: "--getAlpha",
			function: "$1(from $2 $3 / $4)",
		},
	];

	return {
		postcssPlugin: "postcss-rows",
		Declaration(decl) {
			// check if the declaration has units within it.

			units.forEach((unit) => {
				if (decl.value.includes(unit.functionName)) {
					// Get values inside the (), split into an array on the comma.
					// AHTODO: handle e.g. --getAlpha(rgb(128, 0 ,0), 0.24);
					const [value] = extractParentheses(decl.value);

					if (value.includes(",")) {
						let outputString = unit.function;

						const lastComma = value.lastIndexOf(",");

						const items = [
							value.slice(0, lastComma).trim(),
							Number(value.slice(lastComma + 1).trim()),
						];

						items.forEach((s, index) => {
							const textToReplace = s;
							outputString = outputString.replace(`$${index + 1}`, textToReplace);
						});
						decl.value = outputString;
					} else {
						decl.value = unit.function.replace("$1", +value);
					}
				}
			});
		},
	};
};
