<script setup>
import { ref } from 'vue'
import Navbar from "../navbar/Navbar.vue"
defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
    <Navbar/>
<div>
    <h1>{{ msg }}</h1>
</div>
</template>

<style>
</style>