import Vue from 'vue'
import VueRouter from 'vue-router'
import Reporting from '@/components/Reporting/index'
import Idea from '@/components/Idea/index'
import Single from '@/components/Reporting/Single'
import Template from '@/components/Reporting/ComponentsReporting/SWOT/Template'
import Article from '@/components/Article/index'


Vue.use(VueRouter)

const routes = [
  { path: '/', component: Reporting },
  { path: '/idea', component: Idea },
  { path: '/single', component: Single },
  { path: '/template', component: Template },
  { path: '/article', component: Article },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
