<!-- 天气搜索组件 -->
<template>
	<div class="app page">
		<!-- 返回导航条 -->
		<router-view 
			name="backup_header" 
			:title="title"
			:is_fixed="is_fixed"
		></router-view>
   	
   		<div class="result">
			<h2>{{ openTitle }}</h2>
			<ul>
				<li v-for="item in openData">
					<p class="clearfix">
						<span class="date">第<span>{{ item.expect }}</span>期</span>
						<span class="opentime">{{ item.opentime }}</span>
					</p>
					<p class="opencode">
						{{ item.opencode }}
					</p>
				</li>
			</ul>
			<p class="nomore"> {{ nomore }} </p>
		</div>

	</div>
</template>
 
<script>
import Vue from 'vue'
import { Indicator } from 'mint-ui';
export default {
	data () {
		return {
			title :'超级大乐透',
			is_fixed : true,
			openTitle: '近一周开奖结果',
			nomore: '只显示最近7天数据~',
			openData: []
		}
	},
	created () {
		this.request()
	},
	methods: {
		request () {
			this.$http.jsonp('http://f.apiplus.cn/dlt-7.json', {
				params : {
					url : this.url
				},
				timeout : 3000,
				before : function(){
					//打开加载数据框
					Indicator.open({
						text : '加载中....',
						spinnerType : 'triple-bounce'
					})
				}
			}).then(function(response){
				//关闭加载数据框
				Indicator.close()
				if(response.ok){
					this.openData =  response.body.data
				} else {
					alert('获取文章出错')
				}
			},function(response){
				console.log(response);
			}).catch(function(msg){
				alert('请求程序出错：'+msg)
			})
		}
	}
}
</script>

<style> 
.page {
	padding-top: 10px;
}
.result h2 {
	font-size: 16px;
	font-weight: normal;
	color: #999;
	padding: 15px 0 0 15px;
	line-height: 25px;	
	margin-top: 10px;
}
.result li {
	width: 86%;
	background: #fff;
	border-radius: 5px; 
	padding: 15px;
	margin: 10px auto;
}
.result li p {
	line-height: 35px;
}
.result .opentime {
	float: right;
}
.result .opencode {
	color: #ff9600;		
}
.nomore {
	text-align: center;
	line-height: 30px;
	margin: 15px 0;
    color: #c1b8b8;
}
.date span {
	margin: 0 5px;
	color: #dd0000;
    font-size: 18px;
}
</style>
