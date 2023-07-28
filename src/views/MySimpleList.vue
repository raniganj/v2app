<script setup>
let cityList = ['Delhi', 'Mumbai', 'Kolkata']
</script>

<template>
  <div class="row justify-content-center">
    <div class="col-12 col-md-6">
      <h2>My Simple List</h2>
      <hr />
      <div class="fs-2" v-for="(item, index) in cityList" :key="index">{{ item }}</div>
    </div>
  </div>
</template>
