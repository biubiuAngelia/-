<template>
<div>
	<mt-header title="我的柚子小屋"></mt-header>
	<router-view></router-view>

	
	<nav class="mui-bar mui-bar-tab">
		<router-link :to="{name:'Home'}" class="mui-tab-item mui-active" href="#tabbar">
			<span class="mui-icon icon-shouye"></span>
			<span class="mui-tab-label">首页</span>
		</router-link>
		<router-link :to="{name:'vip'}" class="mui-tab-item" href="#tabbar">
			<span class="mui-icon icon-huiyuan1"></span>
			<span class="mui-tab-label">会员</span>
		</router-link>
		<router-link :to="{name:'shopcar'}" class="mui-tab-item" href="#tabbar">
			<span class="mui-icon icon-gouwuche-white-copy"></span>
			<span class="mui-tab-label">购物车</span>
		</router-link>
		<router-link :to="{name:'search'}" class="mui-tab-item" href="#tabbar">
			<span class="mui-icon icon-work-search"></span>
			<span class="mui-tab-label">查找</span>
		</router-link>
	</nav>
</div>
	
</template>
<script>
	export default{
		data(){
			return {
				
			}
		},
		method:{
			change(){

			}
		}
	}
</script>
<style></style>