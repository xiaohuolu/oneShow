// 分享录页面路由
import index from '@/components/index/index'
import home_index from '@/components/index/home-index'
import home_mine from '@/components/index/home-mine'
import password from '@/components/index/password'
import information from '@/components/index/information'
import userlogo from '@/components/index/userlogo'
import listEnter from '@/components/index/listEnter'
import artical from '@/components/index/comment'
import privacy from '@/components/index/privacy'
import zfubaoPay from '@/components/comment/zfubaoPay'
import instruction from '@/components/index/instruction'
export default {
	path: '/',
	meta: {
		requiresAuth: true,
		title:'首页'
	},
	component: index,
	children:[
		{
			path:'/privacy',
			name: 'privacy',
			meta:{
				title:"OneShow中文网-隐私说明",
			},
			component:privacy
		},
		{
			path:'/instruction',
			name: 'instruction',
			meta:{
				title:"OneShow中文网-使用条款",
			},
			component:instruction
		},
		{
			path:'/',
			name: 'home_index',
			meta:{
				title:"OneShow中文网",
			},
			component:home_index
		},
		{
			path:'/zfubaoPay',
			name: 'zfubaoPay',
			meta:{
				title:"支付结果",
			},
			component:zfubaoPay
		},
		{
			path:'/artical/:id',
			name: 'artical',
			meta:{
				title:"通用",
			},
			component:artical
		},
		{
			path:'/mine',
			name: 'home_mine',
			meta:{
				title:"个人中心",
				requiresAuth:true
			},
			component:home_mine

		},
		{
			path:'/password',
			name: 'password',
			meta:{
				title:"修改密码",
				requiresAuth:true
			},
			component:password
		},
		{
			path:'/information',
			name: 'information',
			meta:{
				title:"修改资料",
				requiresAuth:true
			},
			component:information
		},
		{
			path:'/userlogo',
			name: 'userlogo',
			meta:{
				title:"修改头像",
				requiresAuth:true
			},
			component:userlogo
		},
		{
			path:'/listEnter',
			name: 'listEnter',
			meta:{
				title:"入围名单",

			},
			component:listEnter
		},

	]
}
