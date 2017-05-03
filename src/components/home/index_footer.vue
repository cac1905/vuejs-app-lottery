<!-- 侧栏组件 -->
<template>
	<div id="footer" class="">
		<ul class="nav clearfix">
			<li v-for="item in navs">
				<router-link :to="item.path">
					<img :src="item.src" alt=""> {{ item.name }}
				</router-link> 
			</li> 
		</ul>
	</div>
</template>

<script>
export default {
	data () {
		return { 
			navs: [{
				name: '首页',
				path: '/',
				src: require('../../assets/img/icon/ico-home-h.png')
			}, {
				name: '开奖记录',
				path: '/result/cqssc',
				src: require('../../assets/img/icon/ico-kaijiang.png')
			}, {
				name: '天气',
				path: '/weather_search',
				src: require('../../assets/img/icon/ico-weather.png')
			}]
		}
	}
}
</script>

<style>
	#footer {
		overflow: hidden;
	    clear: both;
	    padding: 0.0667rem 0.4rem;
	    position: fixed;
	    bottom: 0;
	    z-index: 99;
	    background: #421717;
	    width: 100%; 
	}
	#footer li {
		color: #f5d8d8;
		float: left;
		width: 32%;
    	text-align: center;
	}
	#footer li img {
		display: block;
		width: 25px;
		height: 25px;
    	margin: 5px auto;
	}
	#footer li a {
		color: #e6dcdc;
	}
	    
</style>
