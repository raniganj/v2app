<script setup>
import { inject } from 'vue'

let { count1, incrementCount1, decrementCount1 } = inject('counter1')
</script>
<template>
  <div class="row justify-content-center">
    <div class="col-12 col-md-6">
      <div class="fs-3">Default Store1</div>
      <hr />
      <div>Count : {{ count1 }}</div>
      <button type="button" class="btn btn-primary me-1" @click="incrementCount1()">
        Increment Count1
      </button>
      <button type="button" class="btn btn-primary" @click="decrementCount1()">
        Decrement Count1
      </button>
    </div>
  </div>
</template>
