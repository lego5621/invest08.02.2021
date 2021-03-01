import Vue from 'vue'
import VueRouter from 'vue-router'
import Reporting from '@/components/Analysis/index'
import Single from '@/components/Analysis/Single'
import Article from '@/components/Article/index'
import Portfolio from '@/components/Portfolio/index'
import Setting from '@/components/SinglePage/Settings'


Vue.use(VueRouter)

const routes = [
  { path: '/', component: Reporting },
  { path: '/single', component: Single },
  { path: '/article', component: Article },
  { path: '/portfolio', component: Portfolio },
  { path: '/settings', component: Setting },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
