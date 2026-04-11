import rss from '@astrojs/rss';
import { getRSSPosts } from '@components/Blog/utils/getAllPosts';
import type { APIRoute } from "astro";

import MarkdownIt from 'markdown-it';
import sanitizeHtml from 'sanitize-html';

const parser = new MarkdownIt();

export const GET = (async (context) => {
  const posts = await getRSSPosts();

  return rss({
    title: "Andrew JD Hudson's Blog",
    description: "Recent content in Articles & Experiments by Andrew JD Hudson",
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#site
    site: context.site || '',
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date as unknown as Date,
      description: post.data.description,
      link: `/blog/${post.id}/`,
      content: post.body ? sanitizeHtml(parser.render(post.body), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
      }) : undefined,
    })),
    // (optional) inject custom xml
    customData: `<language>en-gb</language><generator>Astro</generator>`,
  });
}) satisfies APIRoute;