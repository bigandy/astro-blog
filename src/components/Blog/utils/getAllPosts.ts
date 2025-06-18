import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

export type Collection = "blog" | "weeknotes" | "blog-fr";

import { isProduction } from "@utils/isProduction";
import { mungePosts } from "./mungePosts";

export type Item = CollectionEntry<Collection> & {
    postIndex: number;
    hasTranslation?: boolean;
};

export const getAllPosts = async (
    collection: Collection = "blog",
    locale: "en" | "fr",
): Promise<Array<Item>> => {
    const showFuturePosts = false;

    // Data Fetching: List all Markdown posts in the repo.
    let allPosts = [];

    if (collection === "weeknotes") {
        // Get all the posts from the posts directory
        allPosts = await getCollection(collection);
    } else {
        allPosts = await mungePosts(locale);
    }

    const now = new Date();

    if (isProduction) {
        // Get rid of draft posts first
        allPosts = allPosts.filter((post) => {
            if (post.data.draft && post.data.draft === true) {
                return false;
            }
            return post;
        });
    }

    if (isProduction || showFuturePosts === false) {
        // get rid of future posts
        allPosts = allPosts.filter((post) => {
            return new Date(post.data.date).getTime() <= now.getTime();
        });
    }

    const allPostCount = allPosts.length;

    allPosts = allPosts.sort(
        (a, b) =>
            new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf(),
    );

    return allPosts.map((post, postIndex) => ({
        ...post,
        postIndex: allPostCount - postIndex,
    }));
};

export const getSomePosts = async (
    locale: "en" | "fr",
    collection: Collection = "blog",
    numberToReturn?: number,
) => {
    return (await getAllPosts(collection, locale)).slice(
        0,
        numberToReturn ? numberToReturn : -1,
    );
};
