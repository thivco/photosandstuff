<script>

import Home from "../pages/Home.vue"
import Gigs from "../pages/Gigs.vue"
import Contact from "../pages/Contact.vue"
import Gallery from "../pages/Gallery.vue"

let routes = {"/home": Home,
"/gigs": Gigs,
"/contact": Contact,
"/gallery": Gallery,
}

export default {
    data() {
    routes
  },
}

</script>

<template>
    <ul>
        <li v-for="item in routes">
            {{ item }}
        </li>
    </ul>
</template>

<style></style>