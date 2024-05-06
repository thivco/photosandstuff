<script>
import { ref, computed } from 'vue'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Gallery from '../pages/Gallery.vue'
import Gigs from '../pages/Gigs.vue'

// const pages = {
//   '/': Home,
//   '/gigs': Gigs,
//   '/gallery': Gallery,
//   '/about': About
// }

const currentTab = ref('Home')


const tabs = {
    Home,
    Gigs,
    Gallery,
    About
}


</script>

<template>
    <!-- <ul>
        <li v-for="(_, page) in pages">mdrr</li>
    </ul> -->
<p>Hello</p>
    <div class="demo">
    <button
       v-for="(_, tab) in tabs"
       :key="tab"
     >
      {{ tab }}
    </button>
	  <component :is="tabs[currentTab]" class="tab"></component>
  </div>

</template>