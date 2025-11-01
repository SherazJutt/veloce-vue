import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ButtonPage from '../views/ButtonPage.vue'
import AccordionPage from '../views/AccordionPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: {
        title: 'Home - Veloce Vue UI Components'
      }
    },
    {
      path: '/button',
      name: 'button',
      component: ButtonPage,
      meta: {
        title: 'Button Component - Veloce Vue'
      }
    },
    {
      path: '/accordion',
      name: 'accordion',
      component: AccordionPage,
      meta: {
        title: 'Accordion Component - Veloce Vue'
      }
    }
  ],
})

// Optional: Update document title based on route meta
router.beforeEach((to, from, next) => {
  document.title = (to.meta.title as string) || 'Veloce Vue UI Components'
  next()
})

export default router
