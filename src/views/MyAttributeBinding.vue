<script setup>
let myId = 'myId'
let counter = 10
let name = 'Hello Vue'
let status = true
</script>

<template>
  <div class="row justify-content-center">
    <div class="col-12 col-md-6">
      <h1>My Attribute Binding</h1>
      <hr />
      <div :id="myId" class="fs-3">Counter : {{ counter }}</div>
      <div :name="myId" class="fs-3">name : {{ name }}</div>
      <div :status="myId" class="fs-2">status : {{ status }}</div>
    </div>
  </div>
</template>
