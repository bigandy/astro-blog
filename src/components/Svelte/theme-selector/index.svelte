<script>
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
  // do the styling

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
      label: "Rainbow",
      id: "rainbow",
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

<button on:click={showThemeSelector} class="toggle">
  Show Theme Selector
</button>

<div
  use:clickOutside
  on:click_outside={handleClickOutside}
  class={`theme-selector ${show ? "show" : ""}`}
>
  <h2>Theme Selector</h2>

  {selected}

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

  <button on:click={handleClose}>Close the modal</button>
</div>

<style>
  .toggle {
    position: absolute;
    top: 1em;
    right: 1em;
  }

  .theme-selector {
    position: absolute;
    top: 0;
    right: 0;
    border: 1px solid;
    border-top: none;
    border-right: none;
    background: white;
    padding: 1em;
    translate: 0 calc(-100% - 1px);
    transition: translate 200ms ease-in-out;
  }

  .show {
    translate: 0 0;
    transition-duration: 300ms;
  }
</style>
