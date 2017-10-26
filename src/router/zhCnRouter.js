// 分享录页面路由
import index from '@/components/zhCn/index'
import zh_project from '@/components/zhCn/zh_project'
import zh_award from '@/components/zhCn/zh_award'
export default {
	path: '/zhCn',
	name: 'zhCn',
	component: index,
	children:[
		{
			path:'/zhCn/zh_project/:id',
			component:zh_project,
			name:'zh_project',
			meta:{
				title:"中华创意节，获奖作品"
			}
		},
		{
			path:'/zhCn/zh_award/:id',
			component:zh_award,
			name:'zh_award',
			meta:{
				title:"中华创意节，创意奖项"
			}
		},
	]	

}