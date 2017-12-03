<template>
  
  <div id='newMusic'>
    <div class='banner'>
      <a href="">
        <img src="../../assets/download.png" height="176" width="750" alt="">
      </a>
    </div>
    <div>
      <div></div>
      <ul id='musicList'>
      <li v-for='m in musicData' @click='foo(m)'>
          <h5>{{m.music}}</h5>
          <h5>{{m.artist}}</h5>
      </li>
   </ul>
    </div>
   
   <div class='more'>
     <p @click='downloadApp'>去虾米app,试听更多好歌曲</p>
   </div>
  </div>
</template>

<script>
import axios from 'axios';
import store from '@/vuex/store';
import {mapState} from 'vuex';
export default {
  name: 'NewMusic',
  data () {
    return {
      musicData:[
        {
          music:'晴天',
          artist:'周杰伦',
          logo:'http://pic.xiami.net/images/album/img60/1260/66501471873995_1.jpg',
          src:'http://ozxgcyrqo.bkt.clouddn.com/Beyond%20-%20%E6%B5%B7%E9%98%94%E5%A4%A9%E7%A9%BA.mp3'
        },
        {
          music:'消愁',
          artist:'毛不易',
          logo:'http://pic.xiami.net/images/album/img0/495800/4958001508495801_1.jpg',
          src:'http://ozxgcyrqo.bkt.clouddn.com/ZARD%20-%20%E9%81%8B%E5%91%BD%E3%81%AE%E3%83%AB%E3%83%BC%E3%83%AC%E3%83%83%E3%83%88%E5%BB%BB%E3%81%97%E3%81%A6.mp3'
        },
        {
          music:'9420',
          artist:'麦小兜',
          logo:'http://pic.xiami.net/images/album/img26/898926/8989261508898926_1.jpg',
          src:'http://ozxgcyrqo.bkt.clouddn.com/ZARD%20-%20%E9%81%A0%E3%81%84%E6%97%A5%E3%81%AENostalgia.mp3'
        },
         {
          music:'成都',
          artist:'赵雷',
          logo:'http://pic.xiami.net/images/album/img87/181/585a3226db20e_9076087_1482306086_1.jpg',
          src:'http://ozxgcyrqo.bkt.clouddn.com/ZARD%20-%20%E5%A4%8F%E3%82%92%E5%BE%85%E3%81%A4%E3%82%BB%E3%82%A4%E3%83%AB%28%E5%B8%86%29%E3%81%AE%E3%82%88%E3%81%86%E3%81%AB.mp3'
        },
         {
          music:'风清扬',
          artist:'马云;王菲',
          logo:'http://pic.xiami.net/images/album/img60/50/59fd499eb9fe6_2539360_1509771678_1.jpg',
          src:'http://ozxgcyrqo.bkt.clouddn.com/ZARD%20-%20%E8%BF%9C%E3%81%84%E6%97%A5%E3%81%AENostalgia%28Acoustic%20arrange%20ver.%29%20-%20unplug.mp3'
        },
         {
          music:'李荣浩',
          artist:'戒烟',
          logo:'http://pic.xiami.net/images/album/img79/120/5a0a4deb1bf12_6014279_1510624747_1.jpg',
          src:'http://ozxgcyrqo.bkt.clouddn.com/DJ%20Okawari%20-%20Flower%20Dance.mp3'
        },
         {
          music:'9420',
          artist:'麦小兜',
          logo:'http://pic.xiami.net/images/album/img26/898926/8989261508898926_1.jpg',
          src:'http://ozxgcyrqo.bkt.clouddn.com/Zard%20-%20%E6%81%AF%E3%82%82%E3%81%A7%E3%81%8D%E3%81%AA%E3%81%84.mp3'
        },
         {
          music:'躲猫猫(Peek-A-Boo)',
          artist:'Red Velvet',
          logo:'http://pic.xiami.net/images/album/img95/20/5a0ea458e3027_1047695_1510909016_1.jpg',
          src:'http://ozxgcyrqo.bkt.clouddn.com/ZARD%20-%20%E6%8F%BA%E3%82%8C%E3%82%8B%E6%83%B3%E3%81%84.mp3'
        },
         {
          music:'静下来',
          artist:'赵雷',
          logo:'http://pic.xiami.net/images/album/img84/7/5a02bcac85c9b_377584_1510128812_1.jpg',
          src:'http://ozxgcyrqo.bkt.clouddn.com/ZARD%20-%20%E3%81%82%E3%81%AE%E5%BE%AE%E7%AC%91%E3%81%BF%E3%82%92%E5%BF%98%E3%82%8C%E3%81%AA%E3%81%84%E3%81%A7.mp3'
        }
      ]
    }
  },
  methods:{
    foo:function(m) {
      for (let k in m) {
        this.newactiveMusic[k] = m[k];
      }
      
      document.querySelector('.bar-in').style.width = 0;
    },
    downloadApp:function() {
      console.log(document.querySelector('#link'));
      document.querySelector('#link').querySelector('ul').style.display = 'none';
      document.querySelector('#link').querySelector('.download').style.display = 'block';
    }
  },
  created:function() {
    for(let k in this.newmusicData) {
      this.newactiveMusic[k] = this.newmusicData[0][k];
    }
      },
  mounted:function() {
    var lis = document.getElementById('musicList').getElementsByTagName('li');
    lis[0].style.borderLeft = '2px solid #ff8500';
    for(let i =0;i<lis.length;i++) {
      lis[i].addEventListener('click',function() {
        this.index = i;
        for(let i =0;i<lis.length;i++) {
          lis[i].style.borderLeft = '2px solid transparent';
        }
        this.style.borderLeft = '2px solid #ff8500';
      })
    }
  },
  computed:{
    ...mapState(['newmusicData','xixi','newactiveMusic'])
  },
  store
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}
.banner {
  /*width: 100%;*/
  background:yellow;
}
.banner img {
  display: block;
  width: 100%; height: auto;max-width: 100%; display: block;
}
#musicList {
 overflow: hidden;
}
#musicList li {
  box-sizing: padding-box;
  overflow: hidden;
  width: 100%;
  background: #fff;
  height: 62px;
  border-bottom: 1px solid #E0E0E0;
  border-left:2px solid transparent;
}
#musicList h5 {
  text-align: left;
  padding-left: 10px;
  margin: 10px 0 1px 0;
  font-weight: normal;
}
#musicList h5:nth-of-type(2) {
  color: #AFAFB0;
}

.more {
  line-height: 80px;
  width: 100%;
  height: 80px;
  color: #ff8500;
  font-size: 14px;
  margin-bottom:72px;
}
footer {
  position: fixed;
  height: 72px;
  width: 100%;
  background:#ccc;
  bottom: 300px;
}
footer .progress-bar {
  width: 100%;
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

</style>
