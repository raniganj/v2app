<script setup>
import { ref } from 'vue'
import axios from 'axios'

let post = ref()

let fetchPost = async () => {
  let response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  post.value = await response.json()
}

let fetchPostAxios = async () => {
  let url = 'https://jsonplaceholder.typicode.com/posts/2'
  let response = await axios.get(url)
  post.value = response.data
}
</script>
<template>
  <div class="row justify-content-center">
    <div class="col-12 col-md-6">
      <div class="fs-3">My Axioz API call</div>
      <hr />
      <div v-if="post">
        <div>Id : {{ post?.id }}</div>
        <div>User Id : {{ post?.userId }}</div>
        <div>Title : {{ post?.title }}</div>
      </div>
      <div>
        <button type="button" class="btn btn-primary me-1" @click="fetchPost()">Fetch Post</button>
        <button type="button" class="btn btn-primary" @click="fetchPostAxios()">
          Fetch Post with Axios
        </button>
      </div>
    </div>
  </div>
</template>
