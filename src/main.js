import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from '@/pages/Home.vue'
import Contact from "@/pages/Contact.vue"

const router = createRouter(
{
    history:createWebHistory(),
    routes:[
        {
            path:"/",
            name:"Home",
            component:Home
        },  
        {
            path:"/contact",
            name:"Contact",
            component:Contact
        },  
    ]
}
)

createApp(App)
.use(router)
.mount('#app')
