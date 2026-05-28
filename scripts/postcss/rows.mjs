export default (opts) => {
	opts = opts || {};
	const units = opts.units || [
		{
			functionName: "--unit",
			function: `calc(var(--column-gap-size) * $1)`
		},
        {
          functionName: "--getAlpha",
          function: "$1(from $2 $3 / $4)"
        }
	];

	return {
		postcssPlugin: "postcss-rows",
		Declaration(decl) {
			// check if the declaration has units within it.

			units.forEach(unit => {
				if (decl.value.includes(unit.functionName)) {

					// Get values inside the (), split into an array on the comma.
					//AHTODO: handle e.g. --getAlpha(rgb(128, 0 ,0), 0.24);
					const [_, value] = decl.value.match(/\(([^()]*)\)/);
					if (value.includes(',')) {
						let outputString = unit.function;
						value.split(',').forEach((s, index) => {
							const textToReplace = s.trim();
							outputString = outputString.replace(`$${index + 1}`, textToReplace);
						});

						decl.value = outputString;
					} else {
						decl.value = unit.function.replace('$1', +value);
					}

				}
			})
		},
	};
};
