<template>
  <div class="tabBar">
    <router-link to="/home">
    <item @myFn="fn" index="home" :activeIndex="activeIndex" text="首页" imgUrl="./static/img/ic_tab_home_normal.png"
          activeUrl="./static/img/ic_tab_home_active.png"></item>
    </router-link>

    <router-link to="/audio">
    <item @myFn="fn" index="audio" :activeIndex="activeIndex" text="书影音" imgUrl="./static/img/ic_tab_subject_normal.png"
          activeUrl="./static/img/ic_tab_subject_active.png"></item>
    </router-link>

    <router-link to="/broadcast">
    <item @myFn="fn" index="broadcast" :activeIndex="activeIndex" text="广播" imgUrl="./static/img/ic_tab_status_normal.png"
          activeUrl="./static/img/ic_tab_status_active.png"></item>
    </router-link>

    <router-link to="group">
    <item @myFn="fn" index="group" :activeIndex="activeIndex" text="小组" imgUrl="./static/img/ic_tab_group_normal.png"
          activeUrl="./static/img/ic_tab_group_active.png"></item>
    </router-link>

    <router-link to="mine">
    <item @myFn="fn" index="mine" :activeIndex="activeIndex" text="我的" imgUrl="./static/img/ic_tab_profile_normal.png"
          activeUrl="./static/img/ic_tab_profile_active.png"></item>
    </router-link>
  </div>
</template>
<script>
  import item from '../item/item'
  export default ({
    data:function () {
      return{
        activeIndex:window.location.hash.substr(2)
      }
    },
    created:function () {
      this.activeIndex=window.location.hash.substr(2).split('/')[0]||'home';
    },
    methods:{
      fn:function (data) {
        this.activeIndex=data;
        // console.log(this.activeIndex);
      }
    },
    components:{
      item
    }
  })
</script>
<style scoped>
.tabBar{
  height: .6rem;
  position: fixed;
  bottom: 0;
  left:0 ;
  border-top: 1px solid #555555;
  width: 100%;
  z-index: 99;
  background-color: #ffffff;
}
  a{
    color: #3f3a33;
  }
</style>
