<script setup>
import MyClildView from '@/views/MyClildView.vue'
// import { ref } from 'vue'

// let msg = ref('from parent')
</script>

<template>
  <div class="row justify-content-center">
    <div class="col-12 col-md-6">
      <h1>This is parant Component</h1>

      <MyClildView>
        <template #header>
          <p>Title</p>
        </template>

        <template #default>
          <p>A paragraph for the main content.</p>
          <p>And another one.</p>
        </template>

        <template #footer>
          <p>Footer content</p>
        </template>
      </MyClildView>
    </div>
  </div>
</template>
