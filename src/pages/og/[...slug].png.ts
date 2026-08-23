import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { createElement as h } from "react";
import { renderOGImage } from "@utils/og";

export async function getStaticPaths() {
	const posts = await getCollection("blog");
	return posts.map((post) => ({
		params: { slug: post.id },
		props: { title: post.data.title },
	}));
}

export const GET: APIRoute = async ({ props }) => {
	const { title } = props;

	const blobDimension = 64;
	const orange = "#ff4500";
	const blobColor = "#ffc500";
	const anotherBlobColor = "#ff003b";
	const titleColor = "#1f2937";

	const markup = h(
		"div",
		{
			style: {
				display: "flex",
				flexDirection: "column",
				justifyContent: "flex-end",
				width: "100%",
				height: "100%",
				padding: "60px",
				background: "#fff",
			},
		},
		// h(
		// 	"div",
		// 	{
		// 		style: {
		// 			display: "flex",
		// 			marginBottom: "24px",
		// 			gap: 12,
		// 			alignItems: "flex-end",
		// 		},
		// 	},
		// 	h("div", {
		// 		style: {
		// 			width: blobDimension * (1 / 3),
		// 			height: blobDimension * (1 / 3),
		// 			borderRadius: `${100 * (1 / 3)}%`,
		// 			background: anotherBlobColor,
		// 		},
		// 	}),
		// 	h("div", {
		// 		style: {
		// 			width: blobDimension * (2 / 3),
		// 			height: blobDimension * (2 / 3),
		// 			borderRadius: `${100 * (1 / 3)}%`,
		// 			background: blobColor,
		// 		},
		// 	}),
		// 	h("div", {
		// 		style: {
		// 			width: blobDimension * (1 / 3),
		// 			height: blobDimension * (1 / 3),
		// 			borderRadius: `${100 * (1 / 3)}%`,
		// 			background: anotherBlobColor,
		// 		},
		// 	}),
		// ),
		h(
			"div",
			{
				style: {
					display: "flex",
					fontSize: "64px",
					fontWeight: 800,
					color: titleColor,
					lineHeight: 1,
					padding: 0,
					maxWidth: "1000px",
					borderBottom: `5px solid ${orange}`,
				},
			},
			title,
		),
		h(
			"div",
			{
				style: {
					display: "flex",
					marginTop: "32px",
					fontSize: "24px",
					color: "#737373",
					gap: "1rem",
				},
			},
			h("img", {
				src: "https://andrewhudson.dev/images/me.png",
				height: 30,
				width: 30,
				style: {
					borderRadius: "100%",
				},
			}),
			"Andrew JD Hudson",
		),
	);

	return renderOGImage(markup);
};
