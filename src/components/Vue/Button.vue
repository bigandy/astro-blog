<script lang="ts">
export default {
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<template>
  <button @click="count++">
    <slot name="pre">Count is:</slot> {{ count }}
  </button>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
