// 分享录页面路由
import index from '@/components/creative/index'
import design from '@/components/creative/design'
import awards from '@/components/creative/awards'
import answer from '@/components/creative/answer'
import newyork from '@/components/creative/newyork'
import student from '@/components/creative/student'

export default {
	path: '/creative',
	name: 'creative',
	component: index,
	children:[
		{
			path:'/creative/design/:id',
			name:'design',
			component:design,
			meta:{
				title:'ADC 96届年度设计大奖'
			}
		},
		{
			path:'/creative/awards/:id',
			name:'awards',
			component:awards,
			meta:{
				title:'oneshow创意奖'
			}
		},
		{
			path:'/creative/answer',
			name:'answer',
			component:answer,
			meta:{
				title:'oneshow创意奖-常见问题解答'
			}
		},
		{
			path:'/creative/newyork/:id',
			name:'newyork',
			component:newyork,
			meta:{
				title:'纽约创意周'
			}
		},
		{
			path:'/creative/student/:id',
			name:'student',
			component:student,
			meta:{
				title:'国际学生奖 '
			}
		},


	]
}