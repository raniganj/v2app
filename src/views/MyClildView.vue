<template>
  <div class="border rounded bg-light p-3">
    <header class="border-bottom">
      <h4>
        <slot name="header"></slot>
      </h4>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer class="border-top">
      <h4>
        <slot name="footer"></slot>
      </h4>
    </footer>
  </div>
</template>
