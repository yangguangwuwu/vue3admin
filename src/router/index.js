import { createRouter, createWebHashHistory } from 'vue-router'
export const constantRoutes = [
    {
        path: '/',
        redirect: '/dashboard',
        hidden: true,
      },
      {
        path: '/dashboard',
        component: () => import('@/pages/index/Index'),
        children: [
          {
            path: 'test',
            component: () => import('@/pages/test/Index'),
          }
        ],
      }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
})

export default router