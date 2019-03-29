<template>
  <div id="app">
    <router-view/>
    <tabBar></tabBar>
  </div>
</template>

<script>
  import tabBar from './components/tabBar/tabBar'
export default {
  name: 'App',
  components:{
    tabBar
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  ul{
    list-style: none;
  }
  html{
    font-size: 100px;
  }
  body{
    font-size: .13rem;
  }
</style>
