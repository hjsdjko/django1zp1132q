import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import payList from '../pages/pay'

import xueshengList from '../pages/xuesheng/list'
import xueshengDetail from '../pages/xuesheng/detail'
import xueshengAdd from '../pages/xuesheng/add'
import jiaoshiList from '../pages/jiaoshi/list'
import jiaoshiDetail from '../pages/jiaoshi/detail'
import jiaoshiAdd from '../pages/jiaoshi/add'
import ziyuanfenleiList from '../pages/ziyuanfenlei/list'
import ziyuanfenleiDetail from '../pages/ziyuanfenlei/detail'
import ziyuanfenleiAdd from '../pages/ziyuanfenlei/add'
import xuexiziyuanList from '../pages/xuexiziyuan/list'
import xuexiziyuanDetail from '../pages/xuexiziyuan/detail'
import xuexiziyuanAdd from '../pages/xuexiziyuan/add'
import kechengfenleiList from '../pages/kechengfenlei/list'
import kechengfenleiDetail from '../pages/kechengfenlei/detail'
import kechengfenleiAdd from '../pages/kechengfenlei/add'
import kechengxinxiList from '../pages/kechengxinxi/list'
import kechengxinxiDetail from '../pages/kechengxinxi/detail'
import kechengxinxiAdd from '../pages/kechengxinxi/add'
import newstypeList from '../pages/newstype/list'
import newstypeDetail from '../pages/newstype/detail'
import newstypeAdd from '../pages/newstype/add'
import systemintroList from '../pages/systemintro/list'
import systemintroDetail from '../pages/systemintro/detail'
import systemintroAdd from '../pages/systemintro/add'
import discussxuexiziyuanList from '../pages/discussxuexiziyuan/list'
import discussxuexiziyuanDetail from '../pages/discussxuexiziyuan/detail'
import discussxuexiziyuanAdd from '../pages/discussxuexiziyuan/add'
import discusskechengxinxiList from '../pages/discusskechengxinxi/list'
import discusskechengxinxiDetail from '../pages/discusskechengxinxi/detail'
import discusskechengxinxiAdd from '../pages/discusskechengxinxi/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'xuesheng',
					component: xueshengList
				},
				{
					path: 'xueshengDetail',
					component: xueshengDetail
				},
				{
					path: 'xueshengAdd',
					component: xueshengAdd
				},
				{
					path: 'jiaoshi',
					component: jiaoshiList
				},
				{
					path: 'jiaoshiDetail',
					component: jiaoshiDetail
				},
				{
					path: 'jiaoshiAdd',
					component: jiaoshiAdd
				},
				{
					path: 'ziyuanfenlei',
					component: ziyuanfenleiList
				},
				{
					path: 'ziyuanfenleiDetail',
					component: ziyuanfenleiDetail
				},
				{
					path: 'ziyuanfenleiAdd',
					component: ziyuanfenleiAdd
				},
				{
					path: 'xuexiziyuan',
					component: xuexiziyuanList
				},
				{
					path: 'xuexiziyuanDetail',
					component: xuexiziyuanDetail
				},
				{
					path: 'xuexiziyuanAdd',
					component: xuexiziyuanAdd
				},
				{
					path: 'kechengfenlei',
					component: kechengfenleiList
				},
				{
					path: 'kechengfenleiDetail',
					component: kechengfenleiDetail
				},
				{
					path: 'kechengfenleiAdd',
					component: kechengfenleiAdd
				},
				{
					path: 'kechengxinxi',
					component: kechengxinxiList
				},
				{
					path: 'kechengxinxiDetail',
					component: kechengxinxiDetail
				},
				{
					path: 'kechengxinxiAdd',
					component: kechengxinxiAdd
				},
				{
					path: 'newstype',
					component: newstypeList
				},
				{
					path: 'newstypeDetail',
					component: newstypeDetail
				},
				{
					path: 'newstypeAdd',
					component: newstypeAdd
				},
				{
					path: 'systemintro',
					component: systemintroList
				},
				{
					path: 'systemintroDetail',
					component: systemintroDetail
				},
				{
					path: 'systemintroAdd',
					component: systemintroAdd
				},
				{
					path: 'discussxuexiziyuan',
					component: discussxuexiziyuanList
				},
				{
					path: 'discussxuexiziyuanDetail',
					component: discussxuexiziyuanDetail
				},
				{
					path: 'discussxuexiziyuanAdd',
					component: discussxuexiziyuanAdd
				},
				{
					path: 'discusskechengxinxi',
					component: discusskechengxinxiList
				},
				{
					path: 'discusskechengxinxiDetail',
					component: discusskechengxinxiDetail
				},
				{
					path: 'discusskechengxinxiAdd',
					component: discusskechengxinxiAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
