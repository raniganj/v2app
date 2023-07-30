import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/slot',
    name: 'slot',
    component: () => import('../views/MyParantView.vue')
  },
  {
    path: '/data-binding',
    name: 'data-binding',
    component: () => import('../views/MyDataBinding.vue')
  },
  {
    path: '/attribute-binding',
    name: 'attribute-binding',
    component: () => import('../views/MyAttributeBinding.vue')
  },
  {
    path: '/event-binding',
    name: 'event-binding',
    component: () => import('../views/MyEventBinding.vue')
  },
  {
    path: '/reactive-binding',
    name: 'reactive-binding',
    component: () => import('../views/MyReactiveBinding.vue')
  },
  {
    path: '/simple-list',
    name: 'simple-list',
    component: () => import('../views/MySimpleList.vue')
  },
  {
    path: '/simple-form',
    name: 'simple-form',
    component: () => import('../views/MySimpleForm.vue')
  },
  {
    path: '/reactive-list',
    name: 'reactive-list',
    component: () => import('../views/MyReactiveList.vue')
  },
  {
    path: '/first-api',
    name: 'first-api',
    component: () => import('../views/MyFirstApi.vue')
  },
  {
    path: '/list-api',
    name: 'list-api',
    component: () => import('../views/MyListApi.vue')
  },
  {
    path: '/axios-api',
    name: 'axios-api',
    component: () => import('../views/MyAxiosApi.vue')
  },
  {
    path: '/state-management1',
    name: 'state-management1',
    component: () => import('../views/MyStoreManagement1.vue')
  },
  {
    path: '/state-management2',
    name: 'state-management2',
    component: () => import('../views/MyStoreManagement2.vue')
  },
  {
    path: '/curd',
    name: 'curd',
    component: () => import('../views/MyCurdPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
