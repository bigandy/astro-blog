type Pick = {
	link: string;
	title: string;
	description: string;
	why: string;
};

export const picks: Array<Pick> = [
	{
		link: "https://github.com/web-platform-tests/interop/issues/1343",
		title: "CSS if() function",
		description:
			"An inline conditional value that returns a value based on a set of conditions.",
		why: "this enables so much cool stuff but especially: the ability to evaluate a style query against an indivual item (therefor not requiring a container). Also it allows to do an if/elseif/else logic and eliminate a swathe of media or container query code. Alas, it is not perfect and so far you can test against `supports()`, `style()` and `media()` queries.",
	},
	{
		link: "https://github.com/web-platform-tests/interop/issues/1357",
		title: "CSS @function",
		description:
			"Defines custom functions that take arguments and return a CSS value.",
		why: "the ability to write a (complicated) bunch of code and be able to call that code is a",
	},

	{
		link: "https://github.com/web-platform-tests/interop/issues/1452",
		title: "CSS ident() function",
		description:
			'Builds an identifier from strings, integers, and other identifiers, such as view-⁠transition-⁠name: ident("item-⁠" sibling-⁠index()).',
		why: "",
	},

	{
		link: "https://github.com/web-platform-tests/interop/issues/1371",
		title: "CSS border-⁠shape property",
		description:
			"Sets the geometry of the border box to a fully custom shape, changing the shape of borders, outlines, and shadows.",
		why: "",
	},

	{
		link: "https://github.com/web-platform-tests/interop/issues/1393",
		title: "Customizable/stylable &lt;select&gt;",
		description:
			"Customize the button, selected option, picker, and options with CSS.",
		why: "",
	},

	{
		link: "https://github.com/web-platform-tests/interop/issues/1363",
		title: "CSS anchored container queries",
		description:
			"@container anchored(fallback: …) applies styles based on which position fallback an anchor-positioned element is using.",
		why: "",
	},

	{
		link: "https://github.com/web-platform-tests/interop/issues/1344",
		title: "CSS var() in size container queries",
		description: "Such as @container (width >= var(-⁠-⁠min-⁠width)).",
		why: "",
	},

	{
		link: "https://github.com/web-platform-tests/interop/issues/1354",
		title: "CSS random() function",
		description: "Chooses a random numeric value within a specified range.",
		why: "",
	},

	{
		link: "https://github.com/web-platform-tests/interop/issues/1403",
		title: "CSS random-item() function",
		description: "Picks a random item from a list of values.",
		why: "Like the random() but for any value. E.g. want a random font? Want a random border value with each of the style, width, color being random? Now possible.",
	},

	{
		link: "https://github.com/web-platform-tests/interop/issues/1444",
		title: "CSS margin-⁠trim",
		description:
			"Removes the margins of child elements when they meet the edges of the container.",
		why: "For lists that use margin to add space between items it can be annoying to have to remember to remove the margin from the final, or first, item of the list. Now with margin-trim you don't have to do this as you it will remove automatically (in the block direction). Magic!",
	},

	{
		link: "https://github.com/web-platform-tests/interop/issues/1453",
		title: "CSS inherit() function",
		description:
			"Like var(), but uses the parent element's value of the custom property.",
		why: "",
	},

	{
		link: "https://github.com/web-platform-tests/interop/issues/1364",
		title: "CSS container scroll-state queries",
		description:
			"The @container scroll-⁠state(...) at-rule applies styles based on the sticky positioning, snapped, and scrollable state of the container.",
		why: "",
	},
];
