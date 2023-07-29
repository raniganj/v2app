<script setup>
import { ref } from 'vue'

let post = ref()

let getPost = async () => {
  let response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  post.value = await response.json()
}
</script>

<template>
  <div class="row justify-content-center">
    <div class="col-12 col-md-6">
      <div class="fs-4">My First API call</div>
      <hr />
      <button class="btn btn-primary" @click="getPost()">Get Post</button>
      <div class="fs-4">My Post : {{ post }}</div>
      <div class="fs-4">Title : {{ post?.title }}</div>
      <div class="fs-4">Body : {{ post?.body }}</div>
    </div>
  </div>
</template>
