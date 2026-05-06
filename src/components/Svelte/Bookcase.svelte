<script lang="ts">
    import { getPlainDateFromString, groupedBooks } from "@utils/dates";
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
        text: Text | undefined;
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

    let monthsActive = $state(true);

    let groups = $derived(
        await groupedBooks(books, monthsActive ? "month" : "year"),
    );

    function toggle(option: string) {
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
                {#each books as { bookTitle, bookAuthor, rating, bookIsFrench, bookIsAudio }}
                    <li>
                        &ldquo;{bookTitle}&rdquo; {text.by}
                        {bookAuthor}
                        {#if rating}
                            <span class="rating" data-rating={rating}
                                >{rating}/10</span
                            >
                        {/if}

                        {bookIsFrench ? "🇫🇷" : ""}{" "}{bookIsAudio ? "🎵" : ""}
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
