<script lang="ts">
interface Props {
	handleClick: (option: any) => void;
	options: string[];
	active: string;
}

let { handleClick, options, active }: Props = $props();
</script>

{#each options as option}
  <input
    type="radio"
    name="options"
    bind:group={active}
    value={option}
    id={option}
    onchange={() => handleClick(option)}
  />
  <label for={option}>{option}</label>
{/each}

<style>
  label {
    margin-right: 0.5rem;
  }
</style>
