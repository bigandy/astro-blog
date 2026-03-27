<script lang="ts">
    interface Props {
        handleClick: (option: string) => void;
        options: Array<{ id: string; text: string }>;
        active: string;
    }
    let { handleClick, options, active }: Props = $props();
</script>

{#each options as { id, text }}
    <input
        type="radio"
        name="options"
        bind:group={active}
        value={id}
        {id}
        onchange={() => handleClick(id)}
    />
    <label for={id}>{text}</label>
{/each}

<style>
    label {
        margin-right: 0.5rem;
    }
</style>
