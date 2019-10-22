import Vue from 'vue'
import VueRouter from 'vue-router'
import TrafficLight from '../views/TrafficLight.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: TrafficLight,
    meta: {
      color: 'red',
      time: 10000,
    }
  },
  {
    path: '/red',
    component: TrafficLight,
    meta: {
      color: 'red',
      time: 10000
    }
  },
    {
    path: '/yellow',
    component: TrafficLight,
    meta: {
      color: 'yellow',
      time: 3000
    }
  },
    {
    path: '/green',
    component: TrafficLight,
    meta: {
      color: 'green',
      time: 15000
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
