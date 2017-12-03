import Vue from 'vue'
import Router from 'vue-router'
import NewMusic from '@/components/page/NewMusic'
import Chart from '@/components/page/Chart'
import Collect from '@/components/page/Collect'
import MiniPlay from '@/components/common/MiniPlay'
import Search from '@/components/page/Search'
import Artist from '@/components/page/Artist'
import CnMan from '@/components/artist/CnMan'
import Player from '@/components/common/Player'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NewMusic',
      component: NewMusic
    },
    {
      path:'/chart',
      name:'chart',
      component:Chart
    },
    {
      path:'/collect',
      name:'collect',
      component: Collect
    },
    {
      path:'/search',
      name:'search',
      component:Search
    },
    {
      path:'/artist',
      name:'artist',
      component:Artist
    },
    {
      path:'/cnman',
      name:'cnman',
      component:CnMan,
      alias:'/artist/cnman'
    },
    {
      path:'/player',
      name:'player',
      component:Player
    }
  ]
})
