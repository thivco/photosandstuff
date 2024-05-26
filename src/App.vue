<script>
import Navbar from "./components/Navbar.vue"
// import { routes } from "./main.js"
// console.log(routes);
</script>

<template>
  <p>Hello</p>
  <Navbar />
    <!-- <router-link to="/">Home</router-link>
    <router-link to="/contact">Contact</router-link> -->
  <router-view></router-view>
</template>

<style>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
