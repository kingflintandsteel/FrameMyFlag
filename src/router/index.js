import { createRouter, createWebHistory } from 'vue-router'
import home from '../pages/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/vintage',
      name: 'vintage',
      component: () => import('../pages/vintage.vue')
    },
    {
      path: '/betsy',
      name: 'betsy',
      component: () => import('../pages/betsy.vue')
    },
    {
      path: '/bennington',
      name: 'bennington',
      component: () => import('../pages/bennington.vue')
    },
    {
      path: '/traditional',
      name: 'traditional',
      component: () => import('../pages/traditional.vue')
    },
    {
      path: '/unframed',
      name: 'unframed',
      component: () => import('../pages/unframed.vue')
    },
    {
      path: '/frameYourflag',
      name: 'frameYourflag',
      component: () => import('../pages/frameYourflag.vue')
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('../pages/checkout.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../pages/aboutUs.vue')
    },
    {
      path: '/designPartners',
      name: 'designPartners',
      component: () => import('../pages/designPartners.vue')
    },
    {
      path: '/flagFolding',
      name: 'flagFolding',
      component: () => import('../pages/flagFolding.vue')
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/'
    }
  ]
})

export default router
