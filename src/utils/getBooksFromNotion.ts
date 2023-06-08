import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
import { Client } from "@notionhq/client";
import groupBy from "lodash.groupby";

const notion = new Client({
  auth: import.meta.env.NOTION_KEY,
});
const NOTION_DB_ID = import.meta.env.NOTION_DB;

type Book = {
  bookTitle: string;
  bookAuthor: string;
  createdDate: string;
  finishedDate: string;
  thumbnail: string;
  rating: number;
};

type Grouping = Record<string, Book[]>;

type GroupedBooks = Grouping[];

const googleBookSearch = async (title, author) => {
  try {
    const results = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${encodeURI(
        title + author
      )}`
    );
    const json = await results.json();

    // take the first, assume that it is the correct one.
    const thumbnail = json?.items[0].volumeInfo?.imageLinks?.thumbnail ?? null;
    return thumbnail;
  } catch (error) {
    console.error(error);
    return "";
  }
};

const query = await notion.databases.query({
  database_id: NOTION_DB_ID,
});

const queryResults = query?.results || null;

// Go through the list and get the thumbnail for each image;
const list = queryResults.map(async (book: any) => {
  const bookTitle =
    book.properties.Name.title[0]?.plain_text ?? "unknown title";
  const bookAuthor =
    book.properties?.Author.rich_text[0]?.plain_text ?? "unknown author";

  console.log();

  const createdDate = book.created_time;
  const finishedDate = book.properties["Date Finished"]?.date?.start || "";
  const rating = book.properties["Rating (out of 10)"]?.select?.name;
  let thumbnail = book.properties?.Image?.url ?? null;

  // if we don't have the thumbnail, call googleBookSearch to get from API
  if (!thumbnail) {
    thumbnail = await googleBookSearch(bookTitle, bookAuthor);
  }

  return {
    bookTitle,
    bookAuthor,
    createdDate,
    finishedDate,
    thumbnail: thumbnail?.replaceAll("http:", "https:"),
    rating,
  };
});

const books = await Promise.all([...list]);

export const groupedBooks = (format: "month" | "year"): GroupedBooks => {
  let formatString = "";

  switch (format) {
    case "month":
      formatString = "MM-YYYY";
      break;
    case "year":
      formatString = "YYYY";
      break;
    default:
      formatString = "MM-YYYY";
      break;
  }
  const { unfinished, ...group } = groupBy(books, (book) => {
    const finishedDate = dayjs(book.finishedDate);
    return finishedDate.isValid()
      ? finishedDate.format(formatString)
      : "unfinished";
  });

  const groups = Object.entries(group);

  return groups.sort((a, b) => {
    return Number(b[0]) - Number(a[0]);
  });
};
