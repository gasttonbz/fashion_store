import Vue from 'vue'
import VueRouter from 'vue-router'

import GetInView from '../views/GetInView.vue'
import AdminView from '../views/AdminView.vue'
import UserView from '../views/UserView.vue'
import CarritoView from '../views/CarritoView.vue'
import HomeView from '@/views/HomeView.vue'
import DetailView from '@/views/DetailView.vue'
import PedidosView from '@/views/PedidosView.vue'
import ProfileView from '@/views/ProfileView.vue'

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
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/productDetail',
    name: 'detail',
    component: DetailView
  },
  {
    path: '/pedidos',
    name: 'pedidos',
    component: PedidosView
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: ProfileView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
