<template>
	<transition name='slide-left' mode='out-in'>
		<div id="player">
			<div class='player-top'>
				<span class='iconfont icon-mjiantou-copy' @click='back'></span>
				<p @click='foo'>{{newactiveMusic.music}}</p>
			</div>	
			<div class='info'>
				<p @click='foo' class='title'>{{newactiveMusic.music}}</p>
				
					<p @click='foo' class='artist'>{{newactiveMusic.artist}}<span class='iconfont icon-mjiantou'></span> </p>
			</div>
			<div class='player-img'>
				<img :src='newactiveMusic.logo' alt="">
			</div>
			<div class='lyric'></div>
			<div class='faker'></div>
			<div class='pro'>
				<div class='current'>{{currentTime}}</div>
				<div class='prograss'>
					<div class='pp'></div>
					<div class='dot'></div>
				</div>
				<div class='total'>{{totalTime}}</div>
			</div>
			<div id="mask">
				<div class='mask-img'></div>
				<div class='mask-cover'></div>
			</div>
		</div>
	</transition>
	
</template>
<script>
import store from '@/vuex/store';
import {mapState,mapMutations} from 'vuex';
	export default {
		data() {
			return {
				msg:'12345'
			}
		},
		store,
		methods:{
			back:function() {
				this.$router.go(-1);
				$('#link').show();
         		 $('#top').show();
         		 $('#miniPlay').show();
			},
			foo:function() {
				
			}
		},
		mounted:function(){
			let timer = null;
			let rate1 = 0;
			if(timer) {
			clearInterval(timer);
			}
			
			let ct = this.currentTime;
			let tt = this.totalTime;
			let rate = 0;
			let ctArr = ct.split(":");
			let ttArr = tt.split(":")
			ct = +ctArr[0]*60 + +ctArr[1];
			tt = +ttArr[0]*60 + +ttArr[1];
			rate = ct/tt;
			console.log(rate*100);
			$('.pp').css('width', rate*100+'%');
			$('.dot').css('left', rate*100+'%');
			timer = setInterval(function() {
			rate = (rate+ 1/322);
			rate1 = rate*100
			$('.pp').css('width', rate1+'%');
			$('.dot').css('left', rate1+'%');
			},1000)
		},
		computed:{
			...mapState(['newactiveMusic','currentTime','totalTime'])
		}
		
	}
</script>
<style lang='less'>
#player {
	transition: all .5s;
	height: 500px;
	#mask {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 49px;
		left: 0;
		z-index: -1;
		.mask-img {
			background: url('http://pic.xiami.net/images/album/img0/495800/4958001508495801.jpg') no-repeat;
			background-size: 100% 100%;
			    position: absolute;
		    top: 0;
		    bottom: 0;
		    left: 0;
		    z-index: -2;
		    width: 100%;
		    height: 100%;
		    -webkit-filter: blur(1.2rem)
		}
		.mask-cover {
			 position: absolute;
		    top: 0;
		    bottom: 0;
		    left: 0;
		    z-index: -1;
		    width: 100%;
		    height: 100%;
		    background-color: rgba(0,0,0,.8);
		    opacity: .6;
		}
	}
	.faker {
		height: 2.5rem;
		margin: 2rem auto;
		width: 90%;
		background: url('http://gw.alicdn.com/tps/TB17wdHKFXXXXbTXFXXXXXXXXXX-670-46.png') center center no-repeat;
		-webkit-background-size: contain;
		background-size: contain;
	}
	.pro {
		position: relative;
		overflow: hidden;
		width: 100%;
		height: 2rem;
		.current {
			font-size: .5rem;
			color: #908A83;
			position: absolute;
			left: 5px;
			height: 2rem;
			line-height: 2em;
			z-index: 1;
			top: 0;
		}
		.total {
			font-size: .5rem;
			color: #908A83;
			position: absolute;
			right: 5px;
			top: 0;
			height: 2rem;
			line-height: 2em;
			z-index: 1;
		}
		.prograss {
			position: relative;
			
			margin: 0 auto;	
			margin-top: 11px;
			width: 70%;
			height: 1px;
			background: #6B5E46;
			.pp {
				position: absolute;
				width: 0%;
				height: 1px;
				background:#fff;
			}
			.dot {
				position: absolute;
				width: 5px;
				height: 5px;
				border-radius: 50%;
				background-color: #fff;
				top:-2px;
				left: 0;
			}
		}
	}
	.info {
		color: #fff;
		.title {
			margin-top: 20px;
			font-size: 16px;
		}
		.artist {
			font-size: 12px;
			position: relative;
			display: inline;
			span {
				position: absolute;
				top: 1px;
    			left: 40px;
				font-size: 12px;
				
			}
		}
	}
	.player-top {
		background-image: linear-gradient(to bottom,#EAE9E7,#DFDEDC);
		height: 49px;
		width: 100%;
		position: relative;
		
		span {
			position: absolute;
			left: 5px;
			font-size: 30px;
			line-height: 49px;
			height: 49px;
		}
		p {
			height: 49px;
			line-height: 49px;
			text-align: center;
			
		}
		
	}
	.player-img {
		padding-top: 1rem;
		img{
			width: 50%;
		}
	}
}
	.slide-left-enter {
		 -webkit-transform: translate(100%, 0);  
  			transform: translate(-100, 0);  
	}
	.slide-left-leave-active {
		-webkit-transform: translate(-30px, 0);  
  transform: translate(-30px, 0);  
	}
</style>