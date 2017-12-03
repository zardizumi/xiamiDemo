<template>
	<div id='miniPlay'>
    <router-link :to='{name:"player"}' id='showPlayer'>
        <footer  @click='hide' :style="{backgroundImage:'url('+newactiveMusic.logo+')',backgroundRepeat:'no-repeat',backgroundSize:'cover'}">
       <div class='progress-bar'><div class='bar-in'></div></div>
       
      <div class='img'>
             <img  alt="" :src='newactiveMusic.logo'>
      </div>
            <div class='info'>
                           <p>{{newactiveMusic.music}}</p>
                     <p>{{newactiveMusic.artist}}</p>
                  </div>
                      
                           <audio   :src="newactiveMusic.src"  id="musicPlay"></audio>
       </footer>
    </router-link>
    <span class='play icon-bofang iconfont' @click='play'></span>
                      <span class='pause iconfont icon-xiazai'></span>
		 
	</div>
</template>
<script>
import store from '@/vuex/store';
import {mapState,mapMutations} from 'vuex';
	export default {
    data() {
      return {
        tt:'',
        ct:''
      }
    },
    store,
    computed:{
      ...mapState(['newmusicData','newactiveMusic','currentTime','totalTime'])
    },
		mounted:function() {
      //点击播放器,切换到大播放器,隐藏上面两块
      $('#showPlayer').click(function() {
            $('#link').hide();
            $('#top').hide();
            $('#miniPlay').hide();   
          });


			for (let k in this.newmusicData[0]) {
				this.newactiveMusic[k] = this.newmusicData[0][k];
			}
     //进度条
      setInterval(function(){
      let music = document.getElementById('musicPlay');
      let rate = music.currentTime/music.duration;
      var time = music.currentTime;
      var bar = document.querySelector('.bar-in');
      bar.style.width = rate*100 +'%';
  },1000)
		},
    methods:{
      play:function() {
        let musicPlay = document.getElementById('musicPlay')
        if(musicPlay.paused) {
           musicPlay.play();
         }else {
          musicPlay.pause();
         } 
      },
      hide:function() {
      let music = document.getElementById('musicPlay');
      let min = 0;
      let cmin = 0;
      let second = 0;
      let csencond = 0;
      //计算总时间
      min = Math.floor(Math.floor(music.duration)/60);
      second = Math.floor(music.duration)-min*60;
      if(min<10) {
        min = 0+''+min;
      }
      if(second<10) {
        second = 0+""+second;
      }
      this.tt = min+":"+second;
      this.$store.commit('totalT',this.tt);


      //计算当前时间
      if(Math.floor(music.currentTime) <60) {
        if(music.currentTime <10) {
          cmin = '00';
          csencond = 0+''+Math.floor(music.currentTime);
        }else {
          cmin = "00";
          csencond = Math.floor(music.currentTime);
        }
      }else {
        let temp = Math.floor(music.currentTime);
        cmin = 0+''+ Math.floor(temp/60); 
        if(temp%60<10 ) {
          csencond = 0 + "" + temp%60;
        } else {
          csencond = temp - Math.floor(temp/60)*60;
        }
      }
      this.ct = cmin+":"+csencond;
      this.$store.commit('currentT',this.ct);
      console.log(this.currentTime);
      },
      ...mapMutations(['currentT','totalT'])
    }
		
	}
 
     
  
 

</script>
<style>
#miniPlay {
  /*position: relative;*/
  position: fixed;
  height: 72px;
  width: 100%;
  background:#ccc;
  bottom: 0;
  
}
	footer {
  position: fixed;
  height: 72px;
  width: 100%;
  background:#ccc;
  bottom: 0;
}
footer .progress-bar {
  width: 100%;
  height: 2px;
  background: transparent;
}
.bar-in {
  width: 0%;
  height: 2px;
  background: #ff8500;
}
footer .img {
  padding: 6px;
  width: 60px;
  height: 60px;
  float: left;
}
footer .img img {
  width: 100%;
  height: 100%;
}
footer .info {
  float: left;
  padding: 10px;
  height: 60px;
  padding: 6px;
  font-size: 14px;
  text-align: left;
  color: #fff;
} 
footer .info p:nth-of-type(1) {
  font-size: 18px;
}
#miniPlay .play,.pause {
 position: absolute;

z-index: 100;
  font-size: 22px;
  color: #fff;
  margin: 25px 30px 0 0;
}
#miniPlay .pause {
    top: 0px;
    right: 50px;
}
#miniPlay .play {
    top: 0px;
    right: 0px;
}
</style>