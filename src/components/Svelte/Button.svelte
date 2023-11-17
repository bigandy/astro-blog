<script lang="ts">
  let className;
  export let outlined = false;
  export let fullwidth = false;
  export let grow = false;
  export let active = false;

  export { className as class };

  export let handleClick = () => {};
</script>

<button
  class:outlined
  class:fullwidth
  class:grow
  class:active
  on:click={handleClick}
  class={className}
>
  <slot class="before" name="before" />
  <slot />
  <slot class="after" name="after" />
</button>

<style>
  .after,
  .before {
    display: inline-block;
  }

  button {
    border-radius: calc(var(--ah-button-border-radius, 20) * 1px);
    border: none;
    padding-inline: var(
      --ah-button-padding,
      var(--ah-button-padding-inline, 1.2em)
    );
    padding-block: var(
      --ah-button-padding,
      var(--ah-button-padding-block, 0.6em)
    );
    font-size: 1em;
    background: var(--ah-button-background, var(--brand, black));
    color: var(--ah-button-color, white);
    cursor: pointer;
    transition: background-color 0.25s;
    border: 1px solid transparent;
  }

  .grow.active {
    font-size: 200%;
  }

  .fullwidth {
    width: 100%;
  }

  .outlined {
    border-color: var(--ah-button-background, var(--brand));
    color: var(--ah-button-outlined-color, black);
  }

  .outlined:hover,
  .outlined {
    background: unset;
  }

  .outlined:hover {
    border-color: var(--ah-button-background-hover, var(--brand-hover));
    background-color: lightgray;
  }

  button:hover {
    background-color: var(
      --ah-button-background-hover,
      var(--brand-hover, grey)
    );
  }
</style>
