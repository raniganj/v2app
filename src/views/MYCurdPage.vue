<script setup>
import { ref, reactive, computed, watch } from 'vue'

const names = reactive(['Emil, Hans', 'Mustermann, Max', 'Tisch, Roman'])
const selected = ref('')
const prefix = ref('')
const first = ref('')
const last = ref('')

const filteredNames = computed(() =>
  names.filter((n) => n.toLowerCase().startsWith(prefix.value.toLowerCase()))
)

watch(selected, (name) => {
  ;[last.value, first.value] = name.split(', ')
})

function create() {
  if (hasValidInput()) {
    const fullName = `${last.value}, ${first.value}`
    if (!names.includes(fullName)) {
      names.push(fullName)
      first.value = last.value = ''
    }
  }
}

function update() {
  if (hasValidInput() && selected.value) {
    const i = names.indexOf(selected.value)
    names[i] = selected.value = `${last.value}, ${first.value}`
  }
}

function del() {
  if (selected.value) {
    const i = names.indexOf(selected.value)
    names.splice(i, 1)
    selected.value = first.value = last.value = ''
  }
}

function hasValidInput() {
  return first.value.trim() && last.value.trim()
}
</script>

<template>
  <div class="row justify-content-center">
    <div class="col-12 col-md-6">
      <div>
        <input type="text" class="form-control" v-model="prefix" placeholder="Filter prefix" />
      </div>

      <div class="mt-2 mb-2">
        <select size="5" v-model="selected">
          <option v-for="name in filteredNames" :key="name">{{ name }}</option>
        </select>
      </div>

      <label class="mb-1"
        >Name: <input type="text" class="form-control" placeholder="first" v-model="first"
      /></label>
      <br />
      <label
        >Surname: <input type="text" class="form-control" placeholder="last" v-model="last"
      /></label>

      <div class="buttons mt-2">
        <button class="btn btn-primary" @click="create">Create</button>
        <button class="btn btn-info mx-1" @click="update">Update</button>
        <button class="btn btn-secondary" @click="del">Delete</button>
      </div>
    </div>
  </div>
</template>
