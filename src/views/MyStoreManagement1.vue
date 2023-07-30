<script setup>
import { inject } from 'vue'

let { count1, incrementCount1, decrementCount1, count2 } = inject('counter1')
</script>
<template>
  <div class="row justify-content-center">
    <div class="col-12 col-md-6">
      <div class="fs-3">Default Store1</div>
      <hr />
      <div>
        Count1 : {{ count1 }}
        <button type="button" class="btn btn-primary ms-4 me-1" @click="incrementCount1()">
          Increment Count1
        </button>
        <button type="button" class="btn btn-primary" @click="decrementCount1()">
          Decrement Count1
        </button>
      </div>
      <div class="mt-1">Count2 : {{ count2 }}</div>
    </div>
  </div>
</template>
