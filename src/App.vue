<script setup>
import { RouterView } from 'vue-router'
import MyNavbar from './views/MyNavbar.vue'
</script>

<template>
  <MyNavbar />

  <RouterView v-slot="{ Component }">
    <Transition>
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>

<style>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.7s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
