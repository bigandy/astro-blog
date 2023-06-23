<script context="module" lang="ts">
  export type Option = "month" | "year";
</script>

<script lang="ts">
  import type { Book } from "src/utils/getBooksFromNotion";
  import dayjs from "dayjs";
  import customParseFormat from "dayjs/plugin/customParseFormat";
  dayjs.extend(customParseFormat);

  import groupBy from "lodash.groupby";
  import Toggle from "./Toggle.svelte";
  import Warning from "./Warning.svelte";

  export let books: Book[] = [];

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

  const months = groupedBooks(books, "month");
  const years = groupedBooks(books, "year");
  $: monthsActive = true;

  $: filterStart = monthsActive ? "MM-YYYY" : "YYYY";
  $: filterEnd = monthsActive ? "MMMM YYYY" : "YYYY";

  $: groups = monthsActive ? months : years;

  function toggle(option: Option) {
    if (option === "month") {
      monthsActive = true;
    } else {
      monthsActive = false;
    }
  }
</script>

<div class="bookcase">
  {#if Boolean(groups?.length > 0)}
    <Toggle
      handleClick={toggle}
      options={["month", "year"]}
      active={monthsActive ? "month" : "year"}
    />
    {#each groups as [group, books]}
      {@const title = dayjs(group, filterStart).format(filterEnd)}
      <h2>
        {title}
        <span>{books.length} book{books.length > 1 ? "s" : ""} completed</span>
      </h2>
      <ol reversed>
        {#each books as { bookTitle, bookAuthor }}
          <li>&ldquo;{bookTitle}&rdquo; by {bookAuthor}</li>
        {/each}
      </ol>
    {/each}
  {:else}
    <Warning class="warning">No books returned from the API.</Warning>
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
