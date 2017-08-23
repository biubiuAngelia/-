<template>
    <div>
        <ul class="mui-table-view">
				<li v-for="img in imgs" class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" :src="img.img_url">
						<div v-text="img.title" class="mui-media-body">
							<p class="mui-ellipsis"><span >{{img.click}}</span><span>{{img.add_time}}</span></p>
						</div>
					</a>
				</li>

			</ul>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                imgs:[]
            }
        },
        created(){
            this.Axios.get("getnewslist")
            .then(res=>{
                console.log(res);
                this.imgs=res.data.message;
            })
            .catch(err=>{
                console.log(err)
            })
        }
    }
</script>
<style lang="">
    .mui-table-view{
        margin-bottom:50px;
    }
</style>