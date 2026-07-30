import { AssetCache } from "@11ty/eleventy-fetch";
// import * as app from "@lexicons/app";
// import { Client } from "@atproto/lex";
// import { PasswordSession } from "@atproto/lex-password-session";
import {
	ATPROTO_APP_PASSWORD,
	ATPROTO_SERVICE,
	ATPROTO_IDENTIFIER,
} from "astro:env/server";

import { Agent, CredentialSession, type AtpAgentLoginOpts } from "@atproto/api";

// Configure connection to the server with authentification
const account: AtpAgentLoginOpts = {
	identifier: ATPROTO_IDENTIFIER,
	password: ATPROTO_APP_PASSWORD,
};

async function authenticate(account: AtpAgentLoginOpts): Promise<Agent> {
	const session = new CredentialSession(new URL(ATPROTO_SERVICE));
	await session.login(account);
	const agent = new Agent(session);
	return agent;
}

const padStartNumber = (number: number) => {
	return `0${number}`.slice(-2);
};

const formatDate = (dateTime: Temporal.ZonedDateTime) => {
	return `${dateTime.day}/${dateTime.month}/${dateTime.year}`;
};
const formatTime = (dateTime: Temporal.ZonedDateTime) => {
	return `${padStartNumber(dateTime.hour)}:${padStartNumber(dateTime.minute)}`;
};

export interface BskyRecord {
	text: string;
	createdAt: {
		date: string;
		time: string;
	};
	url: string;
	author: {
		href: string;
		handle: string;
		imgSrc: string | undefined;
	};
}

export const getFeedFromBsky = async () => {
	const cacheKey = "atPosts";
	const asset = new AssetCache(cacheKey);

	// check if the cache is fresh within the last hour
	if (asset.isCacheValid("1h")) {
		console.log("CACHE IS VALID!!!");
		// if so, return the cached value
		return asset.getCachedValue();
	} else {
		console.log("cache not valid");
	}

	try {
		const agent = await authenticate(account);

		const allPosts: Array<BskyRecord> = [];

		let cursor;

		while (true) {
			// Fetch this cursor from the feed of items
			const response = await agent.getAuthorFeed({
				actor: ATPROTO_IDENTIFIER, // i.e. me!
				cursor,
				limit: 100, // Max limit per cursor

				// For now, I'm just doing root level posts. Maybe as this   evolves I'll bring in replies too.
				filter: "posts_no_replies",
			});

			const newRecords = response.data.feed
				// filter out unwanted replies
				// AHTODO: add back nested replies.
				// .filter((record) => {
				// 	return !record.value.reply;
				// })
				// // Get rid of embeds, for now.
				// // AHTODO: add back embeds.
				// .filter((record) => {
				// 	return !record.value.embed;
				// })
				// Loop each item but filter out reposts and quote posts
				// borrowed from : https://piccalil.li/projects/personal-site/6/
				.filter(
					(x) =>
						!(
							x?.reason?.$type === "app.bsky.feed.defs#reasonRepost" ||
							x.post.embed?.$type === "app.bsky.embed.record#view" ||
							x.post.embed?.$type === "app.bsky.embed.recordWithMedia#view"
						),
				)
				.map((record) => {
					const createdAt = Temporal.Instant.from(
						record.post.record.createdAt,
					).toZonedDateTimeISO("UTC");

					const url = `https://bsky.app/profile/${record.post.uri.replace("app.bsky.feed.post", "post").replace("at://", "")}`;

					return {
						text: record.post.record.text as unknown as string,
						createdAt: {
							date: formatDate(createdAt),
							time: formatTime(createdAt),
						},
						url,
						author: {
							href: `https://bsky.app/profile/${record.post.author.did}`,
							imgSrc: record.post.author.avatar,
							handle: record.post.author.handle,
						},
					};
				});

			allPosts.push(...newRecords);

			// Set the next cursor and break the loop if we're at the end
			cursor = response.data.cursor;
			console.log("CURSOR", cursor);
			if (!cursor) {
				break;
			}
		}

		// Cache so it doesn't take forever to work on this locally
		await asset.save(allPosts, "json");

		return allPosts;
	} catch (error) {
		console.error("Error fetching feed:", error);
	}
};
