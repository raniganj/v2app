<script setup>
import { onMounted, ref } from 'vue'

let postList = ref()

onMounted(() => {
  getPostList()
})

let getPostList = async () => {
  let response = await fetch('https://jsonplaceholder.typicode.com/posts')
  postList.value = await response.json()
}
</script>

<template>
  <div class="row justify-content-center">
    <div class="col-12 col-md-6">
      <div class="fs-3">Post List API call</div>
      <hr />
      <div v-for="(item, index) in postList" :key="index">{{ item.title }}</div>
    </div>
  </div>
</template>
