<template>
	<div id='collect'>
		<ul>
			<!-- <li>
				<router-link to=''>
					<img :src="musicChart[0].chartImg" alt="">
					<p>虾米音乐榜</p>
					<span class='icon-mjiantou iconfont'></span>
				</router-link>
			</li> -->
			<li v-for='val in collectData'>
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
import store from '../../vuex/store';
import {mapState} from 'vuex'
	export default {
		data() {
			return {
				msg:'这是歌单页面'
			}
		},
		computed:{
			...mapState(['musicChart','collectData','testData'])
		},
		store
	}
</script>
<style>
	#collect {
		width: 100%;
	}
	#collect ul a {
		color:black;
		display: block;
		height: 70px;
		border-bottom: 1px solid #E0E0E0;
		text-decoration: none;
	}
	#collect ul a:visited {
		color: black;
	}
	#collect ul li {
		overflow: hidden;
		list-style: none;
		text-overflow: ellipsis;
	}
	#collect p {
		text-align: left;
		line-height: 60px;
		margin-right: 40px;
				text-overflow: ellipsis;
				overflow: hidden;
    white-space: nowrap;
    padding-left: 5px;
	}
	#collect ul a img {

		width: 48px;
		height: 48px;
		float: left;
		margin-top: 10px;
		margin-left: 15px;
	}
	#collect ul a span {
		display: block;
		width: 17px;
		height: 17px;;
		float: right;
		margin-top: -37px;
		margin-right: 10px;
		color: #878787;
		font-size: 20px;
	}
</style>