// src/router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import store from '@/store'

const HomePage = () => import('@/components/HomePage.vue')
const AboutPage = () => import('@/components/AboutPage.vue')
const CounterPage = () => import('@/components/CounterPage.vue')
const PostsPage = () => import('@/components/PostsPage.vue')
const PostDetailPage = () => import('@/components/PostDetailPage.vue')
const LoginPage = () => import('@/components/LoginPage.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  },
  {
    path: '/counter',
    name: 'Counter',
    component: CounterPage,
    beforeEnter: (to, from, next) => {
      if (store.getters['auth/isAuthenticated']) {
        next()
      } else {
        next('/login')
      }
    }
  },
  {
    path: '/posts',
    name: 'Posts',
    component: PostsPage,
    children: [
      {
        path: ':id',
        name: 'PostDetailPage',
        component: PostDetailPage
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
