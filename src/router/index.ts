import { createRouter, createWebHistory } from 'vue-router'
import AddNewItem from '../views/AddNewItem.vue'
import Panel from '../views/Panel.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    {
      path: '/',
      name: 'panel',
      component: Panel
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
    {
      path: '/addNew',
      name: 'addNew',
      component: AddNewItem
    }
  ]
})

export default router
