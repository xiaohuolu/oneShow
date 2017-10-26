// 分享录页面路由
import index from '@/components/youth/index'
import member from '@/components/youth/member'
import teashear from '@/components/youth/teashear'
import teaonline from '@/components/youth/teaonline'
import merchants from '@/components/youth/merchants'
import ambassador from '@/components/youth/ambassador'
import ambassadorMore from '@/components/youth/ambassadorMore'
import camp from '@/components/youth/camp'
import competition from '@/components/youth/competition'
import question from '@/components/youth/question'
import newbassador from '@/components/youth/newambassador'
import apply from '@/components/youth/apply'
import memebersign from '@/components/youth/membersign'
import query from '@/components/youth/query'

export default {
	path: '/youth',
	name: 'youth',
	component: index,
	children:[
		{
			path:'/youth/member',
			name : 'member',
			component:member,
			meta:{
				title:'个人会员计划'
			}
		},
		{
			path:'/youth/apply',
			name : 'apply',
			component:apply,
			meta:{
				title:'校园大使申请'
			}
		},
		{
			path:'/youth/teashear/:id',
			name : 'teashear',
			component:teashear,
			meta:{
				title:'教师分享计划'
			}
		},
		{
			path:'/youth/teaonline',
			name : 'teaonline',
			component:teaonline,
			meta:{
				title:'教师分享计划在线报名'
			}
		},
		{
			path:'/youth/merchants/:id',
			name : 'merchants',
			component:merchants,
			meta:{
				title:'招商'
			}
		},
		{
			path:'/youth/ambassador',
			name : 'ambassador',
			component:ambassador,
			meta:{
				title:'校园大使招募'
			}
		},

		{
			path:'/youth/ambassadorMore',
			name : 'ambassadorMore',
			component:ambassadorMore,
			meta:{
				title:'优秀校园大使招募-加载更多'
			}
		},
		{
			path:'/youth/newbassador',
			name : 'newbassador',
			component:newbassador,
			meta:{
				title:'新校园大使招募-加载更多'
			}
		},
		{
			path:'/youth/camp/:id',
			name : 'camp',
			component:camp,
			meta:{
				title:'中华青年创新营'
			}
		},

		{
			path:'/youth/competition/:id',
			name : 'competition',
			component:competition,
			meta:{
				title:'中华青年创意竞赛'
			}
		},
		{
			path:'/youth/question',
			name : 'question',
			component:question,
			meta:{
				title:'中华青年创意竞赛常见问题'
			}
		},
		{
			path:'/youth/memebersign',
			name : 'memebersign',
			component:memebersign,
			meta:{
				title:'个人会员计划申请'
			}
		},
		{
			path:'/youth/query',
			name : 'query',
			component:query,
			meta:{
				title:'中华青年创新竞赛-报名结果查询'
			}
		},
	]
}
