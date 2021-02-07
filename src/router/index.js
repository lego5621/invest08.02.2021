import Vue from 'vue'
import VueRouter from 'vue-router'
import Reporting from '@/components/Reporting/index'
import Analysis from '@/components/Analysis/index'
import Idea from '@/components/Idea/index'
import Single from '@/components/Reporting/Single'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Reporting },
  { path: '/analysis', component: Analysis },
  { path: '/idea', component: Idea },
  { path: '/single', component: Single },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
