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
						<span class="date">{{ item.expect }}</span>
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
			this.$http.jsonp("http://f.apiplus.cn/dlt-7.json")
			.then(response => {
				this.openData =  response.body.data
			}, error => {
			    console.log(error) 
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
	}
</style>
