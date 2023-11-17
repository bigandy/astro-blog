<script>
  import Button from "../Button.svelte";
  import { clickOutside } from "../utils/click-outside.js";
  import { getTheme } from "../utils/get-theme.js";
  import { onMount } from "svelte";

  let show = false;
  let selected = "";

  // TODO:
  // set state - ✅
  // loop it - ✅
  // set to localStorage ✅
  // get from localStorage ✅
  // do the styling ✅

  function showThemeSelector() {
    show = !show;
  }

  function handleClose() {
    show = false;
  }

  function handleClickOutside() {
    show = false;
  }

  const themeOptions = [
    {
      label: "Light",
      id: "light",
    },
    {
      label: "Dark",
      id: "dark",
    },
    {
      label: "Red / Black",
      id: "red/black",
    },
    {
      label: "Orange / Black",
      id: "orange/black",
    },
  ];

  function handleInputChange(e) {
    const newTheme = e.target.value;
    localStorage.setItem("theme", newTheme);
    document.body.setAttribute("data-theme", newTheme);
  }

  onMount(async () => {
    const theme = getTheme();
    selected = theme;
  });
</script>

<Button handleClick={showThemeSelector} class="toggle"
  >Show Theme Selector</Button
>

<div
  use:clickOutside
  on:click_outside={handleClickOutside}
  class={`theme-selector ${show ? "show" : ""}`}
>
  <h5>Theme</h5>

  <ul>
    {#each themeOptions as { id, label }}
      <li>
        <label for={id}>{label}</label>
        <input
          {id}
          type="radio"
          value={id}
          on:change={handleInputChange}
          bind:group={selected}
        />
      </li>
    {/each}
  </ul>

  <Button handleClick={handleClose}>Close the modal</Button>
</div>

<style>
  :global(.toggle) {
    position: absolute;
    top: var(--body-padding);
    right: var(--body-padding);

    --ah-button-padding-inline: 1.5rem;
  }

  .theme-selector {
    min-width: 300px;
    position: absolute;
    top: 0;
    right: 0;
    border: 1px solid;
    border-top: none;
    border-right: none;
    background: var(--theme-background);
    padding: 1em;
    translate: 0 calc(-100% - 1px);
    transition: translate 200ms ease-in-out;
    z-index: 1;
  }

  .show {
    translate: 0 0;
    transition-duration: 300ms;
    box-shadow: -9px 14px 20px 0px var(--theme-accent);
  }

  li {
    margin-bottom: 0.5rem;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1rem;
  }

  input {
    order: -1;
  }
</style>
