<script setup>
import { ref } from 'vue'

let city = ref()
let cityList = ref(['Delhi', 'Mumbai', 'Kolkata'])

let addCity = () => {
  cityList.value.unshift(city.value)
  city.value = ''
}
</script>

<template>
  <div class="row justify-content-center">
    <div class="col-12 col-md-6">
      <h2>My Simple List</h2>
      <hr />
      <input type="text" placeholder="city" v-model="city" />
      <button class="btn btn-primary ms-2" @click="addCity()">Add City</button>
      <div class="fs-2" v-for="(item, index) in cityList" :key="index">{{ item }}</div>
    </div>
  </div>
</template>
