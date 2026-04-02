<script lang="ts">
    type Option = "month" | "year";

    import { Temporal } from "temporal-polyfill-lite";
    import { getPlainDateFromString, padStartNumber } from "@utils/dates";
    import type { Book } from "@utils/getBooksFromNotion";
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
            year: "Year",
            month: "Month",
            by: "by",
        },
        locale = "en",
    }: Props = $props();

    const groupedBooks = (books: Book[], format: Option) => {
        const group = Object.groupBy(books, ({ finishedDate }: Book) => {
            const date = Temporal.PlainDate.from(finishedDate);

            if (format === "month") {
                return `${padStartNumber(date.month)}-${date.year}`;
            } else {
                return date.year;
            }
        });

        const groups = Object.entries(group);

        const sortedGroups = groups
            .sort(([a], [b]) => {
                if (format === "month") {
                    const aDate = getPlainDateFromString(a);
                    const bDate = getPlainDateFromString(b);

                    return Temporal.PlainDate.compare(bDate, aDate);
                }
                return Number(b) - Number(a);
            })
            .map(([key, value]) => {
                return [key, value] as [string, Book[]];
            });

        return sortedGroups;
    };

    let monthsActive = $state(true);

    let groups = $derived(groupedBooks(books, monthsActive ? "month" : "year"));

    function toggle(option: Option) {
        monthsActive = option === "month";
    }

    function getTitle(group: string, monthsActive: boolean) {
        if (monthsActive) {
            const plainDate = getPlainDateFromString(group);

            const options = {
                year: "numeric",
                month: "long",
            } as const;

            const localeString = locale === "en" ? "en-GB" : "fr-FR";

            const dateString = plainDate.toLocaleString(localeString, options);

            return dateString;
        } else {
            return group;
        }
    }
</script>

<div class="bookcase">
    {#if Boolean(groups?.length > 0)}
        <Toggle
            handleClick={toggle}
            options={[
                { id: "month", text: text.month },
                { id: "year", text: text.year },
            ]}
            active={monthsActive ? "month" : "year"}
        />
        {#each groups as [group, books]}
            {@const title = getTitle(group, monthsActive)}
            <h2>
                {title}
                <span
                    >{books.length}
                    {text.book}{books.length > 1 ? "s" : ""}
                    {text.completed}</span
                >
            </h2>
            <ol reversed>
                {#each books as { bookTitle, bookAuthor, rating, bookIsFrench }}
                    <li>
                        &ldquo;{bookTitle}&rdquo; {text.by}
                        {bookAuthor}
                        {#if rating}
                            <span class="rating" data-rating={rating}
                                >{rating}/10</span
                            >
                        {/if}

                        {bookIsFrench ? "🇫🇷" : ""}
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

    .rating {
        --hue: calc(attr(data-rating type(<number>)) * (360 / 10) * 1deg);

        color: hsl(var(--hue) 100% 50%);
        font-variant-numeric: diagonal-fractions;
    }
</style>
