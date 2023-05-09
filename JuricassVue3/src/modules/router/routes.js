const routes = [
  { path: '/', component: () => import('@pages/home.vue') },
  { path: '/decision', component: () => import('@pages/decision/index.vue') }
]

export default routes
