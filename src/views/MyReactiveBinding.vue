<script setup>
import { ref } from 'vue'

let counter = ref(10)

let increment = () => {
  counter.value++
}
let decrement = () => {
  counter.value--
}
</script>

<template>
  <div class="row justify-content-center">
    <div class="col-12 col-md-6">
      <h1>Reactive Event Binding</h1>
      <hr />
      <div class="fs-2">Counter : {{ counter }}</div>
      <button class="btn btn-primary me-1" @click="counter++">Increment</button>
      <button class="btn btn-info" @click="counter--">Decrement</button>

      <button class="btn btn-primary ms-5 me-1" @click="increment()">Increment</button>
      <button class="btn btn-info" @click="decrement()">Decrement</button>
    </div>
  </div>
</template>
