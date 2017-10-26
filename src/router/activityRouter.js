// 分享录页面路由
import index from '@/components/activity/index'
import fame from '@/components/activity/fame'
import exhibition from '@/components/activity/exhibition'
import interview from '@/components/activity/interview'
import party from '@/components/activity/party'
import xs_summit from '@/components/activity/xs_summit'
import cy_summit from '@/components/activity/cy_summit'


export default {
	path: '/activity',
	name: 'activity',
	component: index,
	children:[
		{
			path: '/activity/fame/:id',
			name: 'fame',
			component: fame,
			meta:{
				title:"名人堂"
			}
		},
		{
			path: '/activity/exhibition/:id',
			name: 'exhibition',
			component: exhibition,
			meta:{
				title:"展览"
			}
		},
		{
			path: '/activity/interview/:id',
			name: 'interview',
			component: interview,
			meta:{
				title:"面试"
			}
		},
		{
			path: '/activity/party/:id',
			name: 'party',
			component: party,
			meta:{
				title:"派对"
			}
		},
		{
			path: '/activity/xs_summit/:id',
			name: 'xs_summit',
			component: xs_summit,
			meta:{
				title:"销售峰会"
			}
		},
		{
			path: '/activity/cy_summit/:id',
			name: 'cy_summit',
			component: cy_summit,
			meta:{
				title:"创意峰会"
			}
		},
		
	]
}