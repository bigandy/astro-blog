<script lang="ts">
export const options: string[] = []
export const active = ''

export const handleClick = undefined
</script>

{#each options as option}
  <input
    type="radio"
    name="options"
    bind:group={active}
    value={option}
    id={option}
    on:input={() => handleClick(option)}
  />
  <label for={option}>{option}</label>
{/each}

<style>
  label {
    margin-right: 0.5rem;
  }
</style>
