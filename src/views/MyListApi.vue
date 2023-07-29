<script setup>
import { ref } from 'vue'

let postList = ref()

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
      <button type="button" class="btn btn-primary" @click="getPostList()">Get Post List</button>
      <div>{{ postList }}</div>
    </div>
  </div>
</template>
