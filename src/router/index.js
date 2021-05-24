import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Piggybanks from '../views/Piggybanks.vue'
import NewPiggybank from '../views/NewPiggybank.vue'
import PiggybankDetail from '../views/PiggybankDetail.vue'

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
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/piggybanks',
    name: 'Piggybanks',
    component: Piggybanks
  },
  {
    path: '/piggybanks/:piggyId',
    name: 'PiggybankDetail',
    component: PiggybankDetail
  },
  {
    path: '/piggybanks/new',
    name: 'NewPiggybank',
    component: NewPiggybank
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
