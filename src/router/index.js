import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
        name: 'acceso',
        component: () => import('../views/Acceso.vue')
    },
    {
      path:'/homeempresa',
      name:'homeempresa',
      component: () => import('../views/HomeEmpresa.vue')
    },
    {
      path:'/hometurista',
      name:'hometurista',
        component: () => import('../views/HomeTurista.vue')
    }
  ]
})

export default router
