import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
import { Client } from "@notionhq/client";

import { AssetCache } from "@11ty/eleventy-fetch";

import { NOTION_KEY, NOTION_DB } from "astro:env/server";

const notion = new Client({
    auth: NOTION_KEY,
});

export type Book = {
    bookTitle: string;
    bookAuthor: string;
    createdDate: string;
    finishedDate: string;
    thumbnail: string;
    rating: number;
};

type Grouping = Record<string, Book[]>;

export type GroupedBooks = Grouping[];

export const getBooks = async () => {
    try {
        // check if in cache here.
        // Pass in your unique custom cache key
        const asset = new AssetCache("notion_book_list");

        // check if the cache is fresh within the last day
        if (asset.isCacheValid("1d")) {
            // if so, return the cached value
            return asset.getCachedValue();
        }

        const query = await notion.databases.query({
            database_id: NOTION_DB,
        });

        const queryResults = query?.results || null;

        // Go through the list and get the thumbnail for each image;
        const list = queryResults.map(async (book: any) => {
            const bookTitle =
                book.properties.Name.title[0]?.plain_text ?? "unknown title";
            const bookAuthor =
                book.properties?.Author.rich_text[0]?.plain_text ??
                "unknown author";

            const createdDate = book.created_time;
            const finishedDate =
                book.properties["Date Finished"]?.date?.start || "";
            const rating = book.properties["Rating (out of 10)"]?.select?.name;
            let thumbnail = book.properties?.Image?.url ?? null;

            // if we don't have the thumbnail, call googleBookSearch to get from API
            if (!thumbnail) {
                thumbnail = await googleBookSearch(bookTitle, bookAuthor);
            }

            return {
                bookTitle,
                bookAuthor,
                // createdDate,
                finishedDate,
                thumbnail: thumbnail?.replaceAll("http:", "https:"),
                rating: Number(rating),
            };
        });

        const books = await Promise.all([...list]);

        await asset.save(books, "json");

        return books;
    } catch (error) {
        console.error("error in getting books", error);

        return [];
    }
};

const googleBookSearch = async (title: string, author: string) => {
    try {
        const results = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${encodeURI(
                title + author,
            )}`,
        );
        const json = await results.json();

        // take the first, assume that it is the correct one.
        const thumbnail =
            json?.items[0].volumeInfo?.imageLinks?.thumbnail ?? null;
        return thumbnail;
    } catch (error) {
        console.error(error);
        return "";
    }
};
