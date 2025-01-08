<script lang="ts">
    import { onMount } from "svelte";

    interface Props {
        src: string;
        alt: string;
    }

    let { alt, src }: Props = $props();

    let themeColor = $state("");

    const handleColor = (e: any) => {
        const body = document.body;
        themeColor = e.target.value;

        body.style.setProperty("--accent", themeColor);

        // save to localStorage
        localStorage.setItem("themeColor", themeColor);
    };

    const closePopover = () => {
        const popover = document.querySelector("[popover]");
        if (popover) {
            // @ts-expect-error
            popover.hidePopover();
        }
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
            localStorage.setItem("themeColor", rootThemeColor);
        }
    };

    onMount(() => {
        const storageTheme = localStorage.getItem("themeColor");
        if (storageTheme && storageTheme !== "") {
            themeColor = storageTheme;
        }
    });
</script>

<div class="wrapper">
    <button popovertarget="settings-menu">
        <img {src} {alt} />
    </button>

    <div class="box" popover="auto" id="settings-menu">
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
        <button onclick={closePopover} class="close">x</button>
    </div>
</div>

<style>
    .wrapper > button {
        all: unset;
    }

    button {
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

    .box {
        /* display: block; */
        width: calc(anchor-size(width) * 3);
        position: absolute;
        inset: auto;
        margin: 0;
        position-anchor: --image;
        top: calc(anchor(bottom) + 10px);
        right: anchor(right);
        padding: 1rem;
        border-radius: 0.25rem;

        h2 {
            font-weight: bold;
            display: block;
            margin-top: 0;
            margin-bottom: 0.5rem;
            padding-top: 0;
        }

        input {
            width: 100%;
            margin-bottom: 1rem;
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
            cursor: pointer;
        }
    }

    @media print {
        [popover] {
            display: none;
        }
    }
</style>
