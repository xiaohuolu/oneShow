import Vue from 'vue'
import Router from 'vue-router'
//路由分层
import shareRouter from './shareRouter'; // 分享部分路由
import creativeRouter from './creativeRouter'; // 创意部分路由
import activityRouter from './activityRouter'; // 活动部分路由
import knowRouter from './knowRouter'; // 活动部分路由
import youthRouter from './youthRouter'; // 青年创意部分路由
import indexRouter from './indexRouter'; // 首页部分路由
import zhCnRouter from './zhCnRouter'; // 中华创意部分路由
import index from '@/components/main'
import page404 from '@/components/404'
Vue.use(Router)
const component = {
  template: '<router-view></router-view>'
};

let path = [
	{
		path: '/',
		component: index,
		children: [
			indexRouter,
			shareRouter,
			creativeRouter,
			activityRouter,
			knowRouter,
			youthRouter,
			zhCnRouter
		]
	},
	{
		path: '*',
		name: '404',
		component: page404
	}
];

let router = new Router({
	  mode: 'history',
	  routes: path,
	  scrollBehavior() {  // 跳转页面后达到顶端
	    return {x: 0, y: 0};
	  }
});

import { Indicator } from 'mint-ui';


router.beforeEach((to, from, next) => {
	// 拦截器 待优化
	// if (to.matched.some(record => record.meta.requiresAuth)) {
 //        if (sessionStorage.userData) {
 //            next({
 //            path: '/login'
 //          });
 //        }
	// }
  	to.matched[0].components.default.methods.change
  	if (!to.meta.title) {
  		window.document.title = '默认title';
  		return next();
  	}
  	window.document.title = to.meta.title;
  	Indicator.open({
  	  text: '加载中...',
  	  spinnerType: 'fading-circle'
  	});
  	next();
});

router.afterEach(transition => {
 	setTimeout(() => {
	  Indicator.close();
	}, 200);
});

export default router;
