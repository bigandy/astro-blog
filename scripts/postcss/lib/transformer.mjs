import { parse, registerWalkers } from "postcss-values-parser";
import { Container } from "postcss";

registerWalkers(Container);

export const transform = (codeString, functions) => {
	try {
		const root = parse(codeString);

		let outputString = codeString;

		const functionObj = {};
		functions.forEach((func) => {
			functionObj[func.name] = func;
		});

		const coords = [];

		root.walkFuncs((func) => {
			if (functionObj[func.name]) {
				outputString = functionObj[func.name].code;

				const start = func.source.start.offset;
				const end = func.source.end.offset;

				const values = func?.nodes.filter(v => v.type !== 'operator').map(v => {
					if (v.type === 'quoted') {
						v.value = v.contents;
					}

					return v;
				});

				const fun = functionObj[func.name].code;

				coords.push({start, end, values, fun});
			}
		});

		outputString = coords
			.sort((a, b) => b.start - a.start)
			.reduce((text, r) => {
				const codeValue = r.values.reduce((text, r, index) => {
					return text.replace(`$${index + 1}`, r);
				}, r.fun);

				return text.slice(0, r.start) +
					codeValue +
					text.slice(r.end);
			}, codeString);


		return outputString;

	} catch (e) {
		console.error("Transform ERROR::", e);
		return codeString;
	}
};

export const declarationTransformer = (decl, functionsToTransform) => {
	decl.value = transform(decl.value, functionsToTransform);
};