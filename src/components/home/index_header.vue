<!-- 顶部导航组件 -->
<template>
	<div id="index_header" class="">
		<mt-header title="6686彩票" :fixed="is_fixed">
			<router-link to="##" slot="left">
				<mt-button icon="more" @click="showSlideFn"></mt-button>
			</router-link>
		</mt-header>
	</div>
</template>

<script>
import Vue from 'vue'
import { Header } from 'mint-ui';
import { Button } from 'mint-ui';
import { mapMutations } from 'vuex'

Vue.component('mt-button', Button);
Vue.component('mt-header', Header);

export default {
	name: 'index_header',
	data () {
		return {
			is_fixed : true
		}
	},
	methods : {
		//映射点击事件为commit同名的mutations
		...mapMutations([
			'showSlideFn',
		])
	}
}
</script>

<style>
	#index_header {
		margin-bottom: 54px;
	}
	.mint-header { 
    	background-color: #6b2d25;
    	height: 54px;
    	font-size: 16px;
	}
	.mintui {
		font-size: 22px;
	}
</style>
