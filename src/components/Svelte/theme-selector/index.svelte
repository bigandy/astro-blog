<script>
import { onMount } from 'svelte'
import { clickOutside } from '../utils/click-outside.js'
import { getTheme } from '../utils/get-theme.js'

let show = false
let selected = ''

function showThemeSelector() {
	show = !show
}

function handleClose() {
	show = false
}

function handleClickOutside() {
	show = false
}

const themeOptions = [
	{
		label: 'Light',
		id: 'light',
	},
	{
		label: 'Dark',
		id: 'dark',
	},
	{
		label: 'Red / Black',
		id: 'red/black',
	},
	{
		label: 'Orange / Black',
		id: 'orange/black',
	},
]

function handleInputChange(e) {
	const newTheme = e.target.value
	localStorage.setItem('theme', newTheme)
	document.body.setAttribute('data-theme', newTheme)
}

onMount(async () => {
	const theme = getTheme()
	selected = theme
})
</script>

<button on:click={showThemeSelector} class="toggle">
  Show Theme Selector
</button>

<div
  use:clickOutside
  on:click_outside={handleClickOutside}
  class={`theme-selector ${show ? "show" : ""}`}
>
  <p class="h5">Theme</p>

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
    min-width: 300px;
    position: absolute;
    top: 0;
    right: 0;
    border: 1px solid;
    border-block-start: none;
    border-inline-end: none;
    background: var(--theme-background, white);
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
    margin-block-end: 0.5rem;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1rem;
  }

  input {
    order: -1;
  }
</style>
