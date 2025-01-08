<script lang="ts">
    import { onMount } from "svelte";

    interface Props {
        src: string;
        alt: string;
        themeColorKey: string;
    }

    let { alt, src, themeColorKey }: Props = $props();

    let themeColor = $state("");
    let debug = $state(false);

    const handleColor = (e: any) => {
        const body = document.body;
        themeColor = e.target.value;

        body.style.setProperty("--accent", themeColor);

        // save to localStorage
        localStorage.setItem(themeColorKey, themeColor);
    };

    const closePopover = () => {
        const popover = document.querySelector("[popover]");
        if (popover) {
            // @ts-expect-error
            popover.hidePopover();
        }
        debug = false;
    };

    const resetTheme = () => {
        const rootThemeColor = document
            .querySelector("html")
            ?.style.getPropertyValue("--accent");
        const body = document.body;

        if (rootThemeColor) {
            themeColor = rootThemeColor;

            body.style.setProperty("--accent", rootThemeColor);

            // save to localStorage
            localStorage.setItem(themeColorKey, rootThemeColor);
        }
    };

    onMount(() => {
        const storageTheme = localStorage.getItem(themeColorKey);

        if (storageTheme && storageTheme !== "") {
            themeColor = storageTheme;
        }

        debug = false;
    });

    $effect(() => {
        if (debug) {
            document.body.classList.add("debug");
        } else {
            document.body.classList.remove("debug");
        }
    });
</script>

<div class="wrapper">
    <button popovertarget="settings-menu">
        <img {src} {alt} />
    </button>

    <div class="settings-menu" popover="auto" id="settings-menu">
        <h2>Theme Picker</h2>

        <label for="color">Theme color:</label>
        <input
            type="color"
            name="color"
            id="color"
            oninput={handleColor}
            value={themeColor}
        />
        <button onclick={resetTheme} class="reset">Reset Theme</button>

        <label for="debug">Debug</label>
        <input
            type="checkbox"
            name="debug"
            id="debug"
            bind:checked={debug}
            class="inline"
        />
        <button onclick={closePopover} class="close">x</button>
    </div>
</div>

<style>
    .wrapper > button {
        all: unset;
    }

    img,
    label,
    button {
        cursor: pointer;
    }

    button {
        cursor: pointer;
        &:hover {
            img {
                filter: drop-shadow(0px 0px 6px var(--theme-accent));
            }
        }
    }

    img {
        anchor-name: --image;
        display: block;
        border-radius: 50%;
        aspect-ratio: 1;
        height: 100px;
        transition: 300ms filter ease-in-out;
    }

    .wrapper:has([popover]:popover-open) img {
        filter: drop-shadow(0px 0px 6px var(--theme-accent));
    }

    label {
        font-size: 14px;
    }

    .settings-menu {
        /* display: block; */
        width: calc(anchor-size(width) * 3);
        position: absolute;
        inset: auto;
        margin: 0;
        background-color: white;
        padding: 1rem;
        border-radius: 0.25rem;

        position-anchor: --image;
        position-try-fallbacks: flip-inline;

        /* top: calc(anchor(bottom) + 10px);
        right: anchor(right); */
        /* left: auto; */

        position-area: span-right bottom;
        margin-top: 10px;

        h2 {
            font-weight: bold;
            display: block;
            margin-top: 0;
            margin-bottom: 0.5rem;
            padding-top: 0;
            font-size: 18px;
        }

        input {
            width: 100%;
            margin-bottom: 1rem;
        }

        [type="checkbox"] {
            width: auto;
            vertical-align: middle;
            margin-bottom: 0;
        }

        .reset {
            width: 100%;
        }

        .close {
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
            background: transparent;
            border: none;
            font-weight: bold;
        }
    }

    @media print {
        [popover] {
            display: none;
        }

        img {
            filter: none !important;
        }
    }
</style>
