import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../views/layout/Layout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/bar',
    },
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '/bar',
          component: () => import('@/views/bar/Bar.vue'),
          meta: {
            title: '柱状图',
          },
        },
        {
          path: '/line',
          component: () => import('@/views/line/Line.vue'),
          meta: {
            title: '折线图',
          },
        },
      ],
    },
  ],
})

router.beforeEach((to, _, next) => {
  document.title = to.meta.title as string
  next()
})

export default router
