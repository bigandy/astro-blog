<script>
const classname = ''
export { classname as class }
</script>

<div class={`warning ${classname}`}>
  <slot />
</div>

<style>
  .warning {
    border: 5px dotted yellow;
    padding: 1rem;
  }
</style>
