<template>
  <div>
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<style scoped>
div {
  border: 1px solid;
  padding: 1rem;
  margin-trim: block-end;
}

header {
  background-color: #eee;
  border: 3px solid hotpink;
  padding: 0.5rem;
}

main {
  border: 1px dotted orange;
  padding: 0.5rem;
  margin-block: 1rem;
}
</style>
