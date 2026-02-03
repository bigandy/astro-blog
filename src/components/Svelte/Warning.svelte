<script>
    let { classname, children } = $props();
</script>

<div class={`warning ${classname}`}>
    {@render children()}
</div>

<style>
    .warning {
        border: 5px dotted yellow;
        padding: 1rem;
    }
</style>
