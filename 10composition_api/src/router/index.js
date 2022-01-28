import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/contador',
    name: 'Contador',
    component: () => import('../views/Contador.vue')
  },
  {
    path: '/paises',
    name: 'Paises',
    component: () => import('../views/Paises.vue')
  },
  {
    path: '/paises/:nombre',
    name: 'Pais',
    props: true,
    component: () => import('../views/Pais.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
