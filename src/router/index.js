import Vue from 'vue'
import VueRouter from 'vue-router'
import Reporting from '@/components/Analysis/index'
import Single from '@/components/Analysis/Single'
import Article from '@/components/Article/index'
import Portfolio from '@/components/Portfolio/index'
import Setting from '@/components/SinglePage/Settings'

import Login from '@/components/SinglePage/Login'
import store from '@/store/index'


Vue.use(VueRouter)

const routes = [
  { 
    path: '/login', 
    component: Login,
    name: 'login',
  },
  { 
    path: '/', 
    component: Reporting,
    meta: { 
      requiresAuth: true
    }
  },
  { 
    path: '/single', 
    component: Single,
    meta: { 
      requiresAuth: true
    }
  },
  { 
    path: '/article', 
    component: Article,
    meta: { 
      requiresAuth: true
    }
  },
  { 
    path: '/portfolio', 
    component: Portfolio,
    meta: { 
      requiresAuth: true
    }
  },
  { 
    path: '/settings', 
    component: Setting,
    meta: { 
      requiresAuth: true
    }
  },
  { 
    path: '/404', 
    name: '404', 
    component: Setting, 
  }, 
  { 
    path: '*', 
    redirect: '/404' 
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   if(to.matched.some(record => record.meta.requiresAuth)) {
//     if (store.getters.isLoggedIn) {
//       next()
//       return
//     }
//     next('/login') 
//   } else {
//     next() 
//   }
// })

export default router
