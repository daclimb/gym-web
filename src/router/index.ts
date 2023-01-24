import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import GymDetailView from '@/views/GymDetailView.vue'
import MainView from '@/views/MainView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: MainView
  },
  {
    path: '/gym/:id',
    name: 'gym details',
    component: GymDetailView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
