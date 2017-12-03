<template>
	<div id="search">
		<div class="searchInput">
			<div class='from'>
				<input type="text" :placeholder='msg'>
			</div>
			<a href="javascript:;">搜索</a>
		</div>
		<div class='searchHot'>
			<h4>今日搜索热词</h4>
			<div class='hotList'>
				<!-- <li>
					<p><span class='num'>1</span>五月天</p><span></span>
					<span class='icon-mjiantou iconfont'></span>
				</li> -->
				<li v-for='val in artist'>
					<p><span :class='numClass'>{{val.rank}}</span>{{val.name}}</p><span></span>
					<span class='icon-mjiantou iconfont'></span>
				</li>

			</div>
		</div>
	</div>

</template>
<script>
	export default {
		name:'search',
		data() {
			return{
				msg:'请输入歌曲,专辑,艺人名搜索',
				artist:[
					{
						name:'五月天',
						rank:1
					},
					{
						name:'林宥嘉',
						rank:2
					},
					{
						name:'陈奕迅',
						rank:3
					},
					{
						name:'毛不易',
						rank:4
					},
					{
						name:'儿歌',
						rank:5
					},
					{
						name:'田馥甄',
						rank:6
					},
					{
						name:'张学友',
						rank:7
					},
					{
						name:'寻梦环游记',
						rank:8
					},
					{
						name:'李宗盛',
						rank:9
					},
					{
						name:'王菲',
						rank:10
					}
				],
				numClass:'num'
			}
		}
	}
</script>
<style lang='less'>
	#search {
		background-color: #F4F5F7;
	}
	.searchInput {
		position: relative;
		height: 62px;
		width: 100%;
		border-bottom:1px solid #D9D9D9;
		background-color: #fff;
		.from {
			margin-right: 90px;
		}
		input {
			box-sizing: border-box;
			width: 100%;
			height: 36px;
			border: 1px solid #D9D9D9;
			border-radius: 5px;
			margin: 12px 0 0 12px;
			margin-right: 20px;
			padding: 0 15px 0 25px;
			font-size: 14px;
			color: #757575;
			outline: none;
			background:#F4F5F7 url(http://gtms01.alicdn.com/tps/i1/TB1V1DqFVXXXXbMXpXX3pcaFFXX-25-25.png) no-repeat left 5px center;
			background-size: 5%;
		}
		a {
			width: 60px;
			height: 38px;
			position: absolute;
			right: 10px;
			top: 0;
			background-image: linear-gradient(to bottom,#FDA10D,#F77801);
			margin: 12px 0 0 12px;
			color: #fff;
			border-radius: 8px;
			font-size: 12px;
			line-height: 38px;
			text-decoration: none;
		}
	}
	.searchHot {
		overflow: hidden;
		color: #2C3E50;
		width: 100%;
		background: #F4F5F7;
		.hotList {
			margin-bottom: 100px;
		}
		h4 {
			text-align: left;
			font-weight: normal;
			margin: 18px 0 15px 12px;
			font-size: 14px;
		}
		li {
			position: relative;
			list-style: none;
			text-align: left;
			overflow: hidden;
			list-style: none;
			text-overflow: ellipsis;
			height: 65px;
			border-bottom: 1px solid #E0E0E0;
			.iconfont {
				float: right;
				position: absolute;
				top: 20px;
				font-size: 20px;
				color: #848484;
				right: 10px;
			}
			p {
				padding: 0 0 0 15px;
				margin-right: 25px;
				text-overflow: ellipsis;
				overflow: hidden;
    			white-space: nowrap;
    			line-height: 65px;

    			.num {
    				font-style: italic;
    				color: #FE6923;
    				font-size: 16px;
    				margin-right: 8px;
    			}
			}
		}
	}
</style>