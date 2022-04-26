import Vue from 'vue'
import VueRouter from 'vue-router'
import GetIn from '../views/GetIn.vue'
import AdminView from '../views/AdminView.vue'
import UserView from '../views/UserView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/getIn',
    name: 'getIn',
    component: GetIn
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
