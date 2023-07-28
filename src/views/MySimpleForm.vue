<script setup>
import { ref } from 'vue'

let city = ref()

let save = () => {
  alert(city.value)
  city.value = ''
}
</script>

<template>
  <div class="row justify-content-center">
    <div class="col-12 col-md-6">
      <h2>My Simple Form</h2>
      <hr />
      <input type="text" placeholder="city" v-model="city" />
      <button class="btn btn-primary ms-2" @click="save()">Save</button>
    </div>
  </div>
</template>
