import Vue from "vue";
import VueRouter from "vue-router";
import Reporting from "@/components/AnalysisIndex";
import Single from "@/components/AnalysisSinglePage";
import Article from "@/components/ArticleList";
import Portfolio from "@/components/PortfolioPage";
import Setting from "@/components/TheSettings";
import The404Page from "@/components/The404Page";
import The500Page from "@/components/The500Page";
import NotWork from "@/components/NotWork";
import About from "@/components/About";
import WhatShares from "@/components/article/WhatShares";
import HowWork from "@/components/article/HowWork";
import HowFnd from "@/components/article/HowFnd";



import ExArticle from "@/components/singlePageBloсk/articleExample";

import Login from "@/components/TheLogin";
import store from "@/store/index";

Vue.use(VueRouter);

const routes = [
	// {
	//   path: '/login',
	//   component: Login,
	//   name: 'login',
	// },
	{
		path: "/",
		component: Reporting,
		name: "index",
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: "/company/:id",
		component: Single,
		name: "single",
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: "/article",
		component: Article,
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: "/portfolio",
		component: Portfolio,
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: "/settings",
		component: Setting,
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: "/ExamArticle",
		component: ExArticle,
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: "/about",
		component: About,
		meta: {
			requiresAuth: true,
		},
	},
  {
		path: "/what-are-shares",
		component: WhatShares,
		meta: {
			requiresAuth: true,
		},
	},
  {
		path: "/how-does-it-work",
		component: HowWork,
		meta: {
			requiresAuth: true,
		},
	},
  {
		path: "/how-find-invest",
		component: HowFnd,
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: "/notWorking",
		name: "notWork",
		component: NotWork,
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: "*",
		name: "404",
		component: The404Page,
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: "*",
		name: "500",
		component: The500Page,
		meta: {
			requiresAuth: true,
		},
	},

	// {
	//   path: '*',
	//   redirect: '/404'
	// }
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return {
				selector: savedPosition,
				behavior: "smooth",
			};
		} else {
			return { x: 0, y: 0 };
		}
	},
});

// router.beforeEach((to, from, next) => {
//   if(to.matched.some(record => record.meta.requiresAuth)) {
//     if (store.getters.isLoggedIn || localStorage.getItem("Token")) {
//       next()
//       return
//     }
//     next('/login')
//   } else {
//     next()
//   }
// })

export default router;
