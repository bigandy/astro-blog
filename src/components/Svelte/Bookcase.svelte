<script module lang="ts">
</script>

<script lang="ts">
  type Option = "month" | "year";
  import type { Book } from "src/utils/getBooksFromNotion";
  import dayjs from "dayjs";
  import customParseFormat from "dayjs/plugin/customParseFormat";
  import "dayjs/locale/fr";
  dayjs.extend(customParseFormat);

  import groupBy from "lodash.groupby";
  import Toggle from "./Toggle.svelte";
  import Warning from "./Warning.svelte";

  interface Text {
    fallback: string;
    completed: string;
    book: string;
    year: string;
    month: string;
    by: string;
  }

  interface Props {
    books: Book[];
    locale: string;
    text: Text;
  }

  let {
    books,
    text = {
      fallback: "No books to display",
      completed: "completed",
      book: "book",
      year: "year",
      month: "month",
      by: "by",
    },
    locale = "en",
  }: Props = $props();

  const groupedBooks = (books: Book[], format: Option) => {
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
    const group = groupBy(books, (book) => {
      return dayjs(book.finishedDate).format(formatString);
    });

    const groups = Object.entries(group);

    const sortedGroups = groups
      .sort(([a], [b]) => {
        return format === "month"
          ? dayjs(b, "MM-YYYY").diff(dayjs(a, "MM-YYYY"))
          : Number(b) - Number(a);
      })
      .map(([key, value]) => {
        return [
          key,
          value.sort((a, b) => dayjs(b.finishedDate).diff(a.finishedDate)),
        ] as [string, Book[]];
      });

    return sortedGroups;
  };

  let monthsActive = $state(true);

  let filterStart = $derived(monthsActive ? "MM-YYYY" : "YYYY");
  let filterEnd = $derived(monthsActive ? "MMMM YYYY" : "YYYY");

  let groups = $derived(
    monthsActive ? groupedBooks(books, "month") : groupedBooks(books, "year")
  );

  function toggle(option: Option) {
    monthsActive = option === text.month;
  }
</script>

<div class="bookcase">
  {#if Boolean(groups?.length > 0)}
    <Toggle
      handleClick={toggle}
      options={[text.month, text.year]}
      active={monthsActive ? text.month : text.year}
    />
    {#each groups as [group, books]}
      {@const title = dayjs(group, filterStart)
        .locale(locale)
        .format(filterEnd)}
      <h2>
        {title}
        <span
          >{books.length}
          {text.book}{books.length > 1 ? "s" : ""}
          {text.completed}</span
        >
      </h2>
      <ol reversed>
        {#each books as { bookTitle, bookAuthor }}
          <li>
            &ldquo;{bookTitle}&rdquo; {text.by}
            {bookAuthor}
          </li>
        {/each}
      </ol>
    {/each}
  {:else}
    <Warning classname="warning">{text.fallback}</Warning>
  {/if}
</div>

<style>
  .bookcase :global(.warning) {
    margin-block: 1rem;
  }

  h2 span {
    vertical-align: middle;
    font-size: 1rem;
    color: var(--color-gray-500);
  }
</style>
