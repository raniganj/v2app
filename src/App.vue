<script setup>
import { RouterView } from 'vue-router'
import MyNavbar from './views/MyNavbar.vue'
import { provide, ref } from 'vue'

let count1 = ref(10)

let incrementCount1 = () => {
  count1.value++
}
let decrementCount1 = () => {
  count1.value--
}
provide('counter1', { count1, incrementCount1, decrementCount1 })
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
