<script setup>
import { ref } from 'vue'

let post = ref()

let fetchPost = async () => {
  let response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  post.value = await response.json()
}
</script>
<template>
  <div class="row justify-content-center">
    <div class="col-12 col-md-6">
      <div class="fs-3">My Axioz API call</div>
      <hr />
      <div>
        <button type="button" class="btn btn-primary" @click="fetchPost()">Fetch Post</button>
      </div>
      <div>{{ post }}</div>
    </div>
  </div>
</template>
