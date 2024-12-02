import { type CollectionEntry, getCollection } from "astro:content";
import { generateOgImageForPost } from "@utils/generateOgImages";
import type { APIRoute } from "astro";

export async function getStaticPaths() {
  const posts = await getCollection("weeknotes").then((p: any) =>
    p.filter(({ data }: { data: any }) => !data.draft && !data.ogImage)
  );

  return posts.map((post: any) => ({
    params: { slug: post.id },
    props: post,
  }));
}

export const GET: APIRoute = async ({ props }) =>
  new Response(
    await generateOgImageForPost(props as CollectionEntry<"weeknotes">),
    {
      headers: { "Content-Type": "image/png" },
    }
  );
