import { createRouter, createWebHistory } from 'vue-router'
import AuthLayout from '@/layouts/AuthLayout.vue'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import HomePage from '@/views/HomePage.vue'
import { useUserStore } from '@/stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        layout: DashboardLayout,
        requiresAuth: true
      },
      component: HomePage
    },
    {
      path: '/email-campaign',
      name: 'email-campaign',
      meta: {
        layout: DashboardLayout,
        requiresAuth: true
      },
      component: () => import('@/views/EmailCampaign.vue')
    },
    {
      path: '/all-leads',
      name: 'all-leads',
      meta: {
        layout: DashboardLayout,
        requiresAuth: true
      },
      component: () => import('@/views/AllLeads.vue')
    },
    {
      path: '/master-inbox',
      name: 'master-inbox',
      meta: {
        layout: DashboardLayout,
        requiresAuth: true
      },
      component: () => import('@/views/MasterInbox.vue')
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        layout: AuthLayout,
        requiresAuth: false
      },
      component: () => import('@/views/LogIn.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const store = useUserStore()
  if (to.meta.requiresAuth && !store.isLoggedIn) {
    if (store.isLoggedIn) next()
    else next({ name: 'login' })
  } else {
    if (store.isLoggedIn && to.name !== 'login') next()
    else if (!store.isLoggedIn) next()
    else next({ name: 'email-campaign' })
  }
})

export default router
