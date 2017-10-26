// 分享录页面路由
import  index from '@/components/know/index'
import speech from '@/components/know/speech'
import about from '@/components/know/about'
import business from '@/components/know/business'
import plan from '@/components/know/plan'
import stort from '@/components/know/stort'
import contact from '@/components/know/contact'
export default {
	path: '/know',
	name:'index',
	component :index,
	children:[
		{
			path:'speech/:id',
			name:'speech',
			component :speech,
			meta:{
				title:"致辞"
			}
		},
		{
			path:"/know/about/:id",
			name:'about',
			component : about,
			meta:{
				title:'关于THE ONE CLUB',
			}
		},
		{
			path:"/know/business/:id",
			name:"business",
			component:business,
			meta:{
				title:"我们的业务"
			}
		},
		{
			path:"/know/plan/:id",
			name:"plan",
			component:plan,
			meta:{
				title:"企业会员计划"
			}
		},
		{
			path:"/know/stort",
			name:"stort",
			component:stort,
			meta:{
				title:"商店"
			}
		},
		{
			path:"/know/contact",
			name:"contact",
			component:contact,
			meta:{
				title:"商店"
			}
		}
	]	
}