<template>
	<div id="artist">
		<ul>
			<li v-for='m in artist' @click='foo(m)' >
				<router-link to='/artist/cnman' ><p>{{m.title}}</p></router-link>
				<span class='icon-mjiantou iconfont'></span>
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
			foo:function(val) {	
				this.currentArtist.title = val.title;
				this.currentArtist.artist = val.artist;
				$('#link .orgion').hide();
				$('#link .extra').show();
				let download = document.createElement('div');
				let html = `${this.currentArtist.title}`;
				download.innerHTML = html;
				download.className = 'download';
				document.querySelector('.extra').appendChild(download);
			}
		},
		computed:{
			...mapState(['artist','currentArtist'])
		},
		store
	}
</script>
<style lang='less'>
* {
      margin: 0;
      padding: 0;

  }
  	#artist ul {

  	}
	#artist li {
		width: 100%;
		height: 71px;
		border-bottom: 1px solid #E0E0E0;
		overflow: hidden;
		text-overflow: ellipsis;
		position: relative;
		a {
			text-decoration: none;
			&:visited{
				color: #000;
			}
		}
		
		p {
			
			
			margin-right: 25px;
			overflow: hidden;
			text-overflow: ellipsis;
			text-align: left;
			white-space: nowrap;
			margin-top: -19px;
    line-height: 71px;
    margin-left: 10px;
		}
		span {
			top: 29px;
			right: 5px;
			color: #848484;
			font-size: 20px;
			position: absolute;


			
		}
	}
</style>