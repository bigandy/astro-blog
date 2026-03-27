import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

export type Collection = "blog" | "weeknotes" | "blog-fr" | "weeknotes-fr";

import { Temporal } from "@js-temporal/polyfill";
import { isProduction } from "@utils/isProduction";

export type Item = CollectionEntry<Collection> & {
    postIndex: number;
    hasTranslation?: boolean;
};

export const getAllPosts = async (
    collection: Collection = "blog",
) => {
    const showFuturePosts = false;

    // Data Fetching: List all Markdown posts in the repo.
    let allPosts = [];
    const today = Temporal.Now.plainDateISO();

    // Get all the posts from the posts directory
    console.log({ collection })
    allPosts = await getCollection(collection);

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
        allPosts = allPosts.filter((post) => {
            const compare = Temporal.PlainDate.compare(
                today,
                Temporal.PlainDate.from(post.data.date),
            );

            return compare > -1;
        });
    }

    const allPostCount = allPosts.length;

    allPosts = allPosts.sort((a, b) =>
        Temporal.PlainDate.compare(
            Temporal.PlainDate.from(b.data.date),
            Temporal.PlainDate.from(a.data.date),
        ),
    );

    return allPosts.map((post, postIndex) => ({
        ...post,
        postIndex: allPostCount - postIndex,
    }));
};

export const getSomePosts = async (
    collection: Collection = "blog",
    numberToReturn?: number,
) => {
    // https://allthingssmitty.com/2026/01/12/stop-turning-everything-into-arrays-and-do-less-work-instead/

    if (numberToReturn && numberToReturn < 1) {
        return await getAllPosts(collection);
    }

    return [...(await getAllPosts(collection))
        .values()
        .take(numberToReturn || 1)];
};
