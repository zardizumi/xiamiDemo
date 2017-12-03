<template>
	<div id="cn-man">
		<ul>
			<!-- <li>
				<img :src='currentArtist.artist[0].img' alt="">
				<p>{{currentArtist.artist[0].name}}</p>
				<p>粉丝 {{currentArtist.artist[0].fans}}</p>
			</li> -->
			<li v-for='val in currentArtist.artist '>
				<img :src='val.img' alt="">
				<p>{{val.name}}</p>
				<p>粉丝 {{val.fans}}</p>
			</li>
			
		</ul>

	</div>
</template>
<script>
import store from '@/vuex/store'
import {mapState} from 'vuex'
	export default {
		data() {
			return {
			}
		},
		methods:{
			back:function() {
      }
		},
		computed:{
			...mapState(['currentArtist'])
		},
		store
	}
</script>
<style lang='less'>
#cn-man {
	padding-bottom: 100px;
	ul {
		overflow: hidden;
	}
}
	#cn-man li{
		padding: 10px 10px;
		text-align: center;
		float: left;
		width: 33%;
		height: auto;
		box-sizing: border-box;
		list-style: none;
		img {
			display: inline-block;
			width: 70%;
			margin: 0 auto;
		}
		p:nth-of-type(1) {
			font-size: 14px;
			color: #000;
			margin: 10px 0 15px 0;
		}
		p:nth-of-type(2) {
			font-size: 10px;
			color: #AFAFB0;
		}
	}


</style>