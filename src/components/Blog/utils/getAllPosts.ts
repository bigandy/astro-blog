import type { CollectionEntry } from "astro:content";
import { getCollection } from "astro:content";

export type Collection = "blog" | "weeknotes" | "blog-fr" | "weeknotes-fr";

import { isProduction } from "@utils/isProduction";
import { Temporal } from "temporal-polyfill-lite";

export type Item = CollectionEntry<Collection> & {
	postIndex: number;
	hasTranslation?: boolean;
};

const removeDrafts = (post: Item) => {
	if (post.data.draft && post.data.draft === true) {
		return false;
	}
	return post;
}

const today = Temporal.Now.plainDateISO();

const removeFuturePosts = (post: Item) => {
	const compare = Temporal.PlainDate.compare(
		today,
		Temporal.PlainDate.from(post.data.date),
	);

	return compare > -1;
}



const sortByLatest = (a: Item, b: Item) =>
	Temporal.PlainDate.compare(
		Temporal.PlainDate.from(b.data.date),
		Temporal.PlainDate.from(a.data.date),
	);


export const getAllPosts = async (collection: Collection) => {
	const showFuturePosts = false;

	// Data Fetching: List all Markdown posts in the repo.
	let allPosts = [];


	// Get all the posts from the posts directory
	allPosts = await getCollection(collection);

	if (isProduction) {
		// Get rid of draft posts first
		allPosts = allPosts.filter(removeDrafts);
	}

	if (isProduction || showFuturePosts === false) {
		allPosts = allPosts.filter(removeFuturePosts);
	}

	const allPostCount = allPosts.length;

	allPosts = allPosts.sort(sortByLatest);

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

	return [
		...(await getAllPosts(collection)).values().take(numberToReturn || 1),
	];
};

export const getRSSPosts = async () => {
	return [
		...(await getAllPosts('blog')).values()
			.filter(removeDrafts)
			.filter(removeFuturePosts)
			.take(Infinity),
	];
};
