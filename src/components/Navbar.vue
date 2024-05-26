<script>
export default {
  name: 'App',
  data() {
    return {
      routes: [
        { path: '/', name: 'Home' },
        { path: '/contact', name: 'Contact' },
        { path: '/gallery', name: 'Gallery' },
      ]
    };
  }
};
</script>
<template>
    <p>Hd</p>
    <div v-for="route in routes" :key="route.name">
        <router-link :to="route.path" >{{ route.name }}</router-link>
    </div>
</template>