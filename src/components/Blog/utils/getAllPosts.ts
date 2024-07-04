import { getCollection } from "astro:content";

export type Collection = "blog" | "weeknotes";

export const getAllPosts = async (collection: Collection = "blog") => {
  const showFuturePosts = false;
  // Data Fetching: List all Markdown posts in the repo.
  let allPosts = [];
  const now = new Date();
  // Get all the posts from the posts directory
  allPosts = await getCollection(collection);
  if (import.meta.env.MODE === "production") {
    allPosts = allPosts.filter((post) => {
      // Get rid of draft posts first
      if (post.data.draft && post.data.draft === true) {
        return false;
      }
      return post;
    });
  }

  if (import.meta.env.MODE === "production" || showFuturePosts === false) {
    allPosts = allPosts.filter((post) => {
      // get rid of future posts
      return new Date(post.data.date).getTime() <= now.getTime();
    });
  }

  allPosts = allPosts.sort(
    (a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf()
  );

  return allPosts;
};
