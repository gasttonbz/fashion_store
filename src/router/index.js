import Vue from 'vue'
import VueRouter from 'vue-router'

import GetInView from '../views/GetInView.vue'
import AdminView from '../views/AdminView.vue'
import UserView from '../views/UserView.vue'
import CarritoView from '../views/CarritoView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/getIn',
    name: 'getIn',
    component: GetInView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView
  },
  {
    path: '/user',
    name: 'user',
    component: UserView
  },
  {
    path: '/carrito',
    name: 'carrito',
    component: CarritoView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
