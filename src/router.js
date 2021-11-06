import { createWebHistory, createRouter } from 'vue-router'
import Main from "./components/Main.vue"
import Album from "./components/Album.vue"

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  {
    path: '/album',
    name: 'Album',
    component: Album,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
