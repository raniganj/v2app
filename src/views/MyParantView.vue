<script setup>
import MyClildView from '@/views/MyClildView.vue'
import { ref } from 'vue'

let msg = ref('from parent')
</script>

<template>
  <div class="row justify-content-center">
    <div class="col-12 col-md-6">
      <h1>This is parant Component</h1>

      <MyClildView>Message: {{ msg }}</MyClildView>
    </div>
  </div>
</template>
