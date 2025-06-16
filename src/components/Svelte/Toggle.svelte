<script lang="ts">
    interface Props {
        handleClick: (option: any) => void;
        options: Array<{ id: string; text: string }>;
        active: string;
    }

    let { handleClick, options, active }: Props = $props();
</script>

{#each options as option}
    <input
        type="radio"
        name="options"
        bind:group={active}
        value={option.id}
        id={option.id}
        onchange={() => handleClick(option.id)}
    />
    <label for={option.id}>{option.text}</label>
{/each}

<style>
    label {
        margin-right: 0.5rem;
    }
</style>
