import Vue from 'vue'
//import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/css/animate.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import store from './vuex/store'

//Vue.use(MintUI)
Vue.use(VueRouter)
Vue.use(VueResource)

//引入自定义组件

import slide from './components/public/slide.vue'
import backup_header from './components/public/backup_header.vue'
import home from './components/page/home.vue'
import weather_search from './components/page/weather_search.vue'
import weather_search2 from './components/page/weather_search2.vue'
import weather from './components/page/weather.vue'
import weather_all from './components/page/weather_all.vue'
import index_main from './components/home/index_main.vue'
import index_swipe from './components/home/index_swipe.vue'
import index_header from './components/home/index_header.vue'
import weather_form from './components/part/weather_form.vue'
import index_footer from './components/home/index_footer.vue'
import resultDlt from './components/page/result/dlt.vue'
import resultCqssc from './components/page/result/cqssc.vue'
import resultFc3d from './components/page/result/fc3d.vue'
import resultPk10 from './components/page/result/pk10.vue'
import resultPl3 from './components/page/result/pl3.vue'
import resultPl5 from './components/page/result/pl5.vue'
import resultQlc from './components/page/result/qlc.vue'
import resultQxc from './components/page/result/qxc.vue'
import resultSeq from './components/page/result/seq.vue'
import news from './components/page/news.vue'


const router = new VueRouter({
	mode : 'hash',
	base : __dirname,
	routes : [
		{
			path : '/',
			component : home,
			children : [
				{
					path : '',
					components : {
						index_header,
						slide,
						index_main,
						index_swipe,
						index_footer
					}
				}
			]
		},
		{
			path : '/news',
			component : news,
			children : [
				{
					path : '',
					components : {
						backup_header
					}
				}
			]
		},
		{
			path : '/weather_search',
			component : weather_search,
			children : [
				{
					path : '',
					components : {
						backup_header
					}
				}
			]
		},
		{
			path : '/weather',
			component : weather,
			children : [
				{
					path : '',
					components : {
						backup_header,
						weather_form
					}
				}
			]
		},{
			path : '/weather_all',
			component : weather_all,
			children : [
				{
					path : '',
					components : {
						backup_header
					}
				}
			]
		},
		{
			path : '/result/dlt',
			component : resultDlt,
			children : [
				{
					path : '',
					components : {
						backup_header
					}
				}
			]
		},
		{
			path : '/result/cqssc',
			component : resultCqssc	,
			children : [
				{
					path : '',
					components : {
						backup_header
					}
				}
			]
		},
		{
			path : '/result/fc3d',
			component : resultFc3d,
			children : [
				{
					path : '',
					components : {
						backup_header
					}
				}
			]
		},
		{
			path : '/result/dlt',
			component : resultDlt,
			children : [
				{
					path : '',
					components : {
						backup_header
					}
				}
			]
		},
		{
			path : '/result/pk10',
			component : resultPk10,
			children : [
				{
					path : '',
					components : {
						backup_header
					}
				}
			]
		},
		{
			path : '/result/pl3',
			component : resultPl3,
			children : [
				{
					path : '',
					components : {
						backup_header
					}
				}
			]
		},
		{
			path : '/result/pl5',
			component : resultPl5,
			children : [
				{
					path : '',
					components : {
						backup_header
					}
				}
			]
		},
		{
			path : '/result/qlc',
			component : resultQlc,
			children : [
				{
					path : '',
					components : {
						backup_header
					}
				}
			]
		},
		{
			path : '/result/qxc',
			component : resultQxc,
			children : [
				{
					path : '',
					components : {
						backup_header
					}
				}
			]
		},
		{
			path : '/result/seq',
			component : resultSeq,
			children : [
				{
					path : '',
					components : {
						backup_header
					}
				}
			]
		}
	]
})
//每次进入新组件后滚动条回到顶部
router.afterEach(function(to){
	window.scrollTo(0,0)
});



new Vue({
	el: '#app',
	router : router,
	store,
	render: h => h(App)
})
