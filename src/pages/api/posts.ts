
import { getSomePosts } from "@components/Blog/utils/getAllPosts";
import { isProduction } from "@utils/isProduction";
import type { APIRoute } from "astro";

export const GET = (async () => {
  if (isProduction) {
    return new Response(
      null
    );
  }
  const posts = (await getSomePosts("blog", -1))
    .filter(post => !post.data.draft)
    .map(post => {
      // console.log(post)
      // TODO: get the url!
      return { id: post.id, title: post.data.title }
    });

  return new Response(
    JSON.stringify({
      posts
    }),
  );
}) satisfies APIRoute;
