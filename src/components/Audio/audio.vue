<template>
  <div>

    <div class="nav">

      <Header text="书影音" onepic="./static/img/ic_actionbar_search_icon.png"
              twopic="./static/img/ic_chat_green.png"></Header>
      <ul class="nav-ul">
        <!--<router-link to=""><li class="active">体育</li></router-link>
        <router-link to=""><li>娱乐</li></router-link>
        <router-link to=""><li>科技</li></router-link>
        <router-link to=""><li>军事</li></router-link>-->
        <router-link :to="item.url" v-for="(item,index) in arr" :key="index">
          <li :class="{active:myindex===index}" @click="active(index)">{{item.text}}</li>
        </router-link>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
  import Header from './../header/header'
  import Movie from  './movie/movie'
  import Music from  './music/music'
  import City from  './city/city'
  import Read from  './read/read'
  import Tv from  './tv/tv'
  export default ({
    data:function () {
      return{
        arr:[
          {
            url:'/audio/movie',
            text:'体育'
          },{
          url:'/audio/read',
            text:'军事'
          },{
          url:'/audio/tv',
            text:'时尚'
          },{
          url:'/audio/city',
            text:'科技'
          },{
          url:'/audio/music',
            text:'娱乐'
          }
        ],
        myindex:0
      }
    },
    created:function () {
      window.location.hash='/audio/movie'
    },
    methods:{
      active:function (index) {
        this.myindex=index;
      }
    },
      components:{
        Header,
        Movie,
        Music,
        City,
        Read,
        Tv
      }
  })
</script>
<style scoped>
  .nav{
    width: 100%;
    height: .3rem;
    position: fixed;
  }
  .nav-ul{
    background: #ffffff;
    width: 100%;
    display: flex;
  }
  .nav-ul a{
    width: 25%;
    height: .3rem;
    line-height: .3rem;
    text-align: center;
    background: #ffffff;
    text-decoration: none;
  }
  .active{
    background-color: #09D709;
    color: #fff;
  }
  a{
    color: #606060;
  }
</style>
