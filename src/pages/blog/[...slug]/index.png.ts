import type { APIRoute } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";
import { generateOgImageForPost } from "@utils/generateOgImages";

export async function getStaticPaths() {
  const posts = await getCollection("blog").then((p: any) =>
    p.filter(({ data }: { data: any }) => !data.draft && !data.ogImage),
  );

  return posts.map((post: any) => ({
    params: { slug: post.slug },
    props: post,
  }));
}

export const GET: APIRoute = async ({ props }) =>
  new Response(await generateOgImageForPost(props as CollectionEntry<"blog">), {
    headers: { "Content-Type": "image/png" },
  });
