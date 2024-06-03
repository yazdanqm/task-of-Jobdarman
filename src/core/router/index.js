import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path : '/sliders',
      name : 'sliders',
      component : () => import('@/views/SlidersView.vue')
    },
    {
      path : '/auth',
      name : 'auth',
      component : () => import('@/views/AuthView.vue')
    },
    {
      path : '/contact',
      name : 'contact',
      component : () => import('@/views/ContactView.vue')
    },
    {
      path : '/plans',
      name : 'plans',
      component : () => import('@/views/PlansView.vue')
    }
  ]
})

export default router
