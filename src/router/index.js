import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Form.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Form',
    component: () => import('../views/Form.vue')
  },
  {
    path: '/preview',
    name: 'Preview',
    component: () => import('../views/Preview.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
