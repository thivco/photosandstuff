import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from '@/pages/Home.vue'
import Contact from "@/pages/Contact.vue"
import Gallery from "@/pages/Gallery.vue"

export const routes = [
    { path: '/', component: Home, name: 'Home' },
    { path: '/contact', component: Contact, name: 'Contact' },
    { path: '/gallery', component: Gallery, name: 'Gallery' },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  });

createApp(App)
.use(router)
.mount('#app')