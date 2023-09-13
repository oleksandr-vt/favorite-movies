import { createRouter, createWebHistory } from 'vue-router'
import FavoriteView from '../views/FavoriteView.vue'
import SearchView from '../views/SearchView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'favorite',
      component: FavoriteView
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView
    },
    // {
    //   path: '/:id',
    //   redirect: '/',
    // }
  ]
})

export default router