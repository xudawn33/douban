import Vue from 'vue'
import Router from 'vue-router'
import Home from './../components/Home/home'
import Audio from './../components/Audio/audio'
import Mine from './../components/Mine/mine'
import Broadcast from './../components/Broadcast/broadcast'
import Group from './../components/Group/group'
import movie from './../components/Audio/movie/movie'
import music from './../components/Audio/music/music'
import city from './../components/Audio/city/city'
import tv from './../components/Audio/tv/tv'
import read from './../components/Audio/read/read'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component:Home
    },
    {
      path:'/home',
      component:Home
    },{
    path:'/audio',
      component:Audio,
      children:[
        {
          path:'/audio/',
          component:movie
        },
        {
          path:'/audio/movie',
          component:movie
        },{
          path:'/audio/music',
          component:music
        },{
          path:'/audio/tv',
          component:tv
        },{
          path:'/audio/read',
          component:read
        },{
          path:'/audio/city',
          component:city
        }
      ]
    },{
    path:'/mine',
      component:Mine
    },{
    path:'/broadcast',
      component:Broadcast
    },{
    path:'/group',
      component:Group
    }
  ]
})
