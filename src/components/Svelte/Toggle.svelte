<script lang="ts">
// biome-ignore lint/style/useConst: svelte
export let options: string[] = []
// biome-ignore lint/style/useConst: svelte
export let active = ''
// biome-ignore lint/style/useConst: svelte
export let handleClick = (option: any) => {}
</script>

{#each options as option}
  <input
    type="radio"
    name="options"
    bind:group={active}
    value={option}
    id={option}
    on:input={() => handleClick && handleClick(option)}
  />
  <label for={option}>{option}</label>
{/each}

<style>
  label {
    margin-right: 0.5rem;
  }
</style>
