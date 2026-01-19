<script lang="ts">
import { onMount } from "svelte";

const container = document.querySelector(".container") as HTMLElement;

const handleMouseMove = (evt) => {
	if (!container) {
		return;
	}
	const { height: containerHeight, width: containerWidth } =
		container.getBoundingClientRect();

	// let x = evt.clientX / containerWidth;
	// let y = evt.clientY / containerHeight;

	// Center of the container
	const center = {
		top: containerHeight / 2,
		left: containerWidth / 2,
	};

	// distance from the center to the mouse cursor
	const actual = {
		left: evt.clientX - center.left,
		top: evt.clientY - center.top,
	};

	// console.log({ evt, center, actual });

	// get the angle from the opposite/adjacent. Trigonometry!
	// let angle = getAngleFromOppositeAdjacent(actual.top, actual.left);

	// angle += actual.left >= 0 ? 90 : 270;

	container.style.setProperty("--top", (actual.top *= -1).toString());
	container.style.setProperty("--left", (actual.left *= -1).toString());
};

const { children } = $props();

const getAngleFromOppositeAdjacent = (top, left) => {
	return (Math.atan(top / left) * 180) / Math.PI;
};
</script>

<div role="application" class="container" onmousemove={handleMouseMove}>
    {@render children?.()}
</div>

<style>
    div {
        margin-inline: auto;
        display: inline-block;
        border: 1px solid;
        filter: drop-shadow(
            calc(var(--left, 1) * 0.1px) calc(var(--top, 1) * 0.1px) 5px
                var(--theme-accent)
        );

        :global(img) {
            line-height: 0;
            display: block;
            margin: 0;
        }
    }
</style>
