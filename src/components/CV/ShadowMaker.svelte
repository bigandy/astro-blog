<script lang="ts">
    import { onMount } from "svelte";
    let container: HTMLElement;

    const { children, spread = 5, color = "" } = $props();

    const trackTheMouse = (evt: MouseEvent) => {
        // get the coords of the container.
        const { top, left, width, height } = container.getBoundingClientRect();

        // Center of the page
        const center = {
            top: top + height / 2,
            left: left + width / 2,
        };

        // distance from the center to the mouse cursor
        const actual = {
            left: evt.clientX - center.left,
            top: evt.clientY - center.top,
        };

        container.style.setProperty("--top", actual.top.toString());
        container.style.setProperty("--left", actual.left.toString());
    };

    onMount(() => {
        document.addEventListener("mousemove", trackTheMouse);

        return () => document.removeEventListener("mousemove", trackTheMouse);
    });
</script>

<!-- bind:this is like ref={myRef} in react -->
<div
    role="application"
    id="container"
    bind:this={container}
    style={`--multiplier: ${spread}; --color: ${color !== "" ? color : "unset"}`}
>
    {@render children?.()}
</div>

<style>
    div {
        /* margin-inline: auto; */
        display: inline-block;
        width: max-content;
        border: 1px solid;
        --x: calc(var(--left, 1) * -0.1px * var(--multiplier, 1));
        --y: calc(var(--top, 1) * -0.1px * var(--multiplier, 1));
        --spread: 5px;

        filter: drop-shadow(
            var(--x) var(--y) var(--spread) var(--color, var(--theme-accent))
        );

        :global(img) {
            line-height: 0;
            display: block;
            margin: 0;
        }
    }
</style>
