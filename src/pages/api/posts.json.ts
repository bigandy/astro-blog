import { getAllPosts } from "@components/Blog/utils/getAllPosts";
import { render } from "astro:content";
import type { APIRoute } from "astro";

import { experimental_AstroContainer } from "astro/container";
import { getContainerRenderer as mdxContainerRenderer } from "@astrojs/mdx/container-renderer";
import { loadRenderers } from "astro:container";

export const GET = (async () => {
	const allPosts = await getAllPosts("blog", true);

	const renderers = await loadRenderers([mdxContainerRenderer()]);

	const container = await experimental_AstroContainer.create({
		renderers,
	});

	const posts = await Promise.all(
		allPosts.map(async (post) => {
			const { Content } = await render(post);

			const isMdx = post.filePath?.includes("mdx");
			let content = post?.rendered?.html;
			if (isMdx) {
				content = await container.renderToString(Content);
			}

			return {
				title: post.data.title,
				pubDate: post.data.date as unknown as Date,
				description: post.data.description || undefined,
				link: `/blog/${post.id}/`,
				content,
				isMdx,
			};
		}),
	);

	return new Response(
		JSON.stringify({
			posts,
		}),
		{
			status: 200,
			headers: {
				"Content-Type": "application/json",
			},
		},
	);
}) satisfies APIRoute;
