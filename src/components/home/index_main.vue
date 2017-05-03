<!-- 首页主体组件 -->
<template>
	<div id="index_main" class=""> 
		<p class="home-news clearfix">
			<img src="../../assets/img/icon/ico-notice.png" width="20" height="20">
			<marquee scrollAmount="3" direction="left" width="100%" height="30"> {{ homeNews}}</marquee>
		</p>
		<ul class="home clearfix">
			<li v-for="item in menus">
				<router-link :to="{ path: item.path }">
					<img :src="item.src" alt=""> 
					{{ item.name }}
				</router-link> 
			</li> 
		</ul>
	</div>
</template>

<script> 
export default {
	data () {
		return { 
			homeNews: '欢迎访问6686彩票手机端',
			menus: [{
				name: '超级大乐透',
				path: '/result/dlt',
				src: require('../../assets/img/menu/ico-dlt.png')
			}, {
				name: '双色球',
				path: '/result/seq',
				src: require('../../assets/img/menu/ico-ssq.png')
			}, {
				name: '七乐彩',
				path: '/result/qlc',
				src: require('../../assets/img/menu/ico-qlc.png')
			}, {
				name: '福彩3D',
				path: '/result/fc3d',
				src: require('../../assets/img/menu/fc3d.png')
			}, {
				name: '七星彩',
				path: '/result/qxc',
				src: require('../../assets/img/menu/ico-qxc.png')
			}, {
				name: '排列3',
				path: '/result/pl3',
				src: require('../../assets/img/menu/pl3.png')
			}, {
				name: '排列5',
				path: '/result/pl5',
				src: require('../../assets/img/menu/pl5.png')
			}, {
				name: '北京赛车',
				path: '/result/pk10',
				src: require('../../assets/img/menu/pk10.png')
			}, {
				name: '重庆时时彩',
				path: '/result/cqssc',
				src: require('../../assets/img/menu/cqssc.png')
			}, {
				name: '即将上线',
				src: require('../../assets/img/menu/ico-coming.png')
			}]
		}
	}
}
</script>

<style scoped> 
	.home {
		padding-bottom: 70px;
	}
	.home li {
	    width: 45%;
	    height: 80px;
	    background: #fff;
	    border-radius: 4px;
	    margin: 3% 0 0 3%;
	    float: left;
	    font-size: 16px;
	}
	.home li img {
	    width: 50px;
	    height: 50px;
	    display: inline-block;
	    margin: 14px 5px 0 17px;
	    vertical-align: -18px;
	}
	.home li a {
		display: block;
	}
	.home-news {
	    background: #fff;
	    line-height: 30px;
	    height: 30px;
	    padding: 0 15px; 
	}
	.home-news img {  
		float: left;
    	margin: 5px 5px 0 0;
	}
	.home-news marquee {
		width: 90%;
	}

</style>
