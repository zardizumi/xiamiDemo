<template>
	<div id='chart'>
		<ul>
			<!-- <li>
				<router-link to=''>
					<img :src="musicChart[0].chartImg" alt="">
					<p>虾米音乐榜</p>
					<span class='icon-mjiantou iconfont'></span>
				</router-link>
			</li> -->
			<li v-for='val in musicChart' @click='add(val)'>
				<router-link to=''>
					<img :src="val.chartImg" alt="">
					<p>{{val.name}}</p>
					<span class='icon-mjiantou iconfont'></span>
				</router-link>

			</li>
		</ul>
	</div>
</template>

<script>
import axios from 'axios';
import store from '@/vuex/store'
import {mapState} from 'vuex' 
	export default {
		data() {
			return {
				msg:'这是排行榜页面'
			}
		},
		created:function() {
			console.log(this.musicChart);
  		},
  		computed:{
  			...mapState(['musicChart'])
  		},
  		methods:{
  			add:function(m) {
  				console.log(m);
  			}
  		},
		store
	}
</script>
<style>
	#chart {
		width: 100%;
	}
	#chart ul a {
		color:black;
		display: block;
		height: 70px;
		border-bottom: 1px solid #E0E0E0;
		text-decoration: none;
	}
	#chart ul a:visited {
		color: black;
	}
	#chart ul li {
		overflow: hidden;
		list-style: none;
	}
	#chart p {
		float: left;
		margin-top: 20px;
		margin-left: 10px;
	}
	#chart ul a img {

		width: 48px;
		height: 48px;
		float: left;
		margin-top: 10px;
		margin-left: 15px;
	}
	#chart ul a span {
		float: right;
		margin-top: 20px;
		margin-right: 10px;
		color: #878787;
		font-size: 20px;
	}
</style>