import { getCollection } from "astro:content";

export type Collection = "blog" | "weeknotes";

import { isProduction } from "@utils/isProduction";

export const getAllPosts = async (
    collection: Collection = "blog",
) => {
    const showFuturePosts = false;
    // Data Fetching: List all Markdown posts in the repo.
    let allPosts = [];
    const now = new Date();
    // Get all the posts from the posts directory
    allPosts = await getCollection(collection);

    if (isProduction) {
        allPosts = allPosts.filter((post) => {
            // Get rid of draft posts first
            if (post.data.draft && post.data.draft === true) {
                return false;
            }
            return post;
        });
    }

    if (isProduction || showFuturePosts === false) {
        allPosts = allPosts.filter((post) => {
            // get rid of future posts
            return (
                new Date(post.data.date).getTime() <=
                now.getTime()
            );
        });
    }

    return allPosts.sort(
        (a, b) =>
            new Date(b.data.date).valueOf() -
            new Date(a.data.date).valueOf(),
    );
};

export const getSomePosts = async (
    collection: Collection = "blog",
    numberToReturn?: number,
) => {
    return (await getAllPosts(collection)).slice(
        0,
        numberToReturn ? numberToReturn : -1,
    );
};

export const getGroupedPosts = async (collection: Collection = "blog", numberToReturn?: number) => {
    const posts = await getSomePosts(collection, numberToReturn);
    return Object.entries(Object.groupBy(posts, ({ data }) => new Date(data.date).getFullYear())).toReversed();
}



