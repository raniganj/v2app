<script setup>
let counter = 10
let increment = () => {
  alert()
}
</script>

<template>
  <div class="row justify-content-center">
    <div class="col-12 col-md-6">
      <h1>Simple Event Binding</h1>
      <hr />
      <div class="fs-2">Counter : {{ counter }}</div>
      <button class="btn btn-primary" @click="increment">Click</button>
    </div>
  </div>
</template>
