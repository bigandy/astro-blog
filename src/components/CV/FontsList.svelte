<script lang="ts">
    // @ts-expect-error
    import fonts from "google-fonts-complete";

    import WebFont from "webfontloader";

    let font = $state("");

    const setFont = (font) => {
        WebFont.load({
            events: true,
            classes: false,
            google: {
                families: [font],
            },
            fontactive: () => {
                document.body.style.setProperty("--cv-heading-font", font);
                font = font;
            },
        });
    };

    const fontsList = Object.entries(fonts)
        .map(([key, value]) => {
            return { fontName: key, details: value };
        })
        .filter((font: any) => {
            return font.details.category === "serif";
        });

    const resetFont = () => {
        font = "";

        document.body.style.setProperty("--cv-heading-font", "");
    };
</script>

<div class="wrapper">
    <label for="headingFont">Select Heading Font:</label>
    <select
        name="headingFont"
        id="headingFont"
        bind:value={font}
        onchange={(event) => {
            const target = event.target as HTMLSelectElement;
            if (!target.value) {
                return;
            }
            setFont(target.value);
        }}
    >
        <option value="">Select a font</option>
        {#each fontsList as font}
            <option value={font.fontName}>{font.fontName}</option>
        {/each}
    </select>

    <button disabled={font === ""} onclick={resetFont}>Reset Font</button>
</div>

<style>
    button,
    select,
    label {
        display: block;
        width: 100%;
    }

    .wrapper {
        padding-block-start: 1rem;
    }

    select {
        margin-bottom: 1rem;
    }
</style>
