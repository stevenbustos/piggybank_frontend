import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Piggybanks from '../views/Piggybanks.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      guest: true
    }
  },
  // {
  //   path: '/register',
  //   name: 'register',
  //   component: Register,
  //   meta: {
  //     guest: true
  //   }
  // },
  {
    path: '/piggybanks',
    name: 'Piggybanks',
    component: Piggybanks
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
