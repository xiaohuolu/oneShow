// 分享录页面路由
import index1 from '@/components/share/index'
import video from '@/components/share/video'
import picture from '@/components/share/picture'
import youthprodact from '@/components/share/youthprodact'
import internation from '@/components/share/internation'
export default {
	path: '/share',
	name: 'share',
	component: index1,
	children:[
		{
			path: '/share/video',
			name: 'video',
			component: video,
			meta:{
				title:'oneshow视频'
			}
		},
		{
			path: '/share/youthprodact',
			name: 'youthprodact',
			component: youthprodact,
			meta:{
				title:'青年获奖创意作品'
			}
		},
		{
			path: '/share/picture',
			name: 'picture',
			component: picture,
			meta:{
				title:'oneshow相册'
			}
		},
		{
			path: '/share/internation',
			name: 'internation',
			component: internation,
			meta:{
				title:'国际获奖创意作品'
			}
		},
	]
}
