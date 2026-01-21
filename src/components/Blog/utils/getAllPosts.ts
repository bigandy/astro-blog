import { getCollection } from "astro:content";

export type Collection = "blog" | "weeknotes";

import { Temporal } from "@js-temporal/polyfill";
import { isProduction } from "@utils/isProduction";

export const getAllPosts = async (collection: Collection = "blog") => {
	const showFuturePosts = false;
	// Data Fetching: List all Markdown posts in the repo.
	let allPosts = [];
	// const now = new Date();
	const today = Temporal.Now.plainDateISO();

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
			const compare = Temporal.PlainDate.compare(today, Temporal.PlainDate.from(post.data.date))

			return compare > 0;
		});
	}

	const allPostCount = allPosts.length;

	allPosts = allPosts.sort(
		(a, b) => {
			return Temporal.PlainDate.compare(Temporal.PlainDate.from(b.data.date), Temporal.PlainDate.from(a.data.date))
		}
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
	return (await getAllPosts(collection)).slice(
		0,
		numberToReturn ? numberToReturn : -1,
	);
};
