<template>
  <div id="app">
    <div id='top'>
      <router-link to='/' class='logo'></router-link>
      <router-link to='download' class='download'>APP试听高品质</router-link>
    </div>
    <div id='link'>
      <ul class='orgion'>
        <li class='active' ><router-link to='/' >新歌</router-link></li>
        <li><router-link to='chart'>排行榜</router-link></li>
        <li><router-link to='collect'>歌单</router-link></li>
        <li><router-link to='artist'>歌手</router-link></li>
        <li><router-link to='search'>搜索</router-link></li>
      </ul>
      <div class='extra'><span class='back iconfont icon-mjiantou-copy' @click='back'></span></div>
    </div>
    <div><router-view class='child-view'></router-view></div>
    <MiniPlay></MiniPlay>
  </div>
</template>

<script>
import MiniPlay from '@/components/common/MiniPlay'
import store from '@/vuex/store'
import {mapState} from 'vuex'
export default {
  name: 'app',
  data() {
    return {
      transitionName: ''
    }
  },
  methods:{
    back:function() {
      //替换最上面一排的回退按钮
        this.$router.go(-1);
        let download = document.querySelector('.extra').children[1]
        document.querySelector('.extra').removeChild(download);
        $('#link .orgion').show();
        $('#link .extra').hide();
      }
  },
  components:{
      MiniPlay
    },
  mounted:function() {
    var lis = document.getElementById("link").getElementsByTagName('li');
    for(let i =0;i<lis.length;i++) {
      lis[i].onclick = function() {
        for(let i =0;i<lis.length;i++) {
          lis[i].classList.remove('active');
        }
        this.classList.add('active');
      }
    }
  },
  store,
  computed:{
    ...mapState(['currentArtist'])
  }
}
</script>

<style>
* {
  margin: 0; 
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#top {
  width: 100%;
  height: 96px;
  background-image: linear-gradient(to right,#FF5E00,#FF5E00);

}
#top .logo {
  display: block;
  width: 200px;
  height: 75px;
  float: left;
  background:url(./assets/xiamilogo.png) no-repeat top 28px left 15px;
  background-size: contain;
}
#top .download {
  position: absolute;
  right: 0;
  width: 118px;
  height: 34px;
  line-height: 34px;
  margin-top: 31px;
  border-radius: 20px;
  background: #fff;
  font-size: 12px;
  text-decoration: none;
  color: #FF5E00;
  margin-right: 10px;
}
#link {
  position: relative;
  width: 100%;
  height: 48px;
  background: #F7F7F7;
  box-shadow: 0 0 2px 2px #D4D4D4;
  background-image: linear-gradient(to bottom ,rgba(249,249,249,.8),rgba(235,235,235,.8));
  
}
#link ul {
  width: 100%;
  height: 46px;
}
#link li{
  list-style: none;
  float: left;
  width: 20%;
  height: 46px;
}
#link li a {
  display: block;
  width: 100%;
  line-height: 46px;
  font-size: 12px;
  color: #000;
  text-decoration: none;
  font-size: 16px;
}
#link .extra {
  display: none;
  width: 100%;
}
#link .back {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  font-size: 32px;
  color: #646464;
}
#link .download {
  text-align: center;
  line-height: 48px;
  height: 46px;
  font-size: 18px;
}
.active {
  border-bottom: 2px solid #FF5800;
  
}
#link .active a {
  color: #FF5800;
}

 
</style>
