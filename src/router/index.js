import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /*{
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }*/

    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('@/views/ProductDetailView.vue')
    },
    {
      path: '/add-product',
      name: 'add-product',
      component: () => import('@/views/AddProductView.vue')
    },
    {
      path: '/edit-product',
      name: 'edit-product',
      component: () => import('@/views/EditProductView.vue')
    }
  ]
})

export default router
