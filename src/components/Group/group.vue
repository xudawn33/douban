<template>
  <div>
    <Header text="小组" twopic="./static/img/ic_chat_green.png"
            onepic="./static/img/ic_actionbar_search_icon.png">
      <!--<img src="./static/img/ic_actionbar_search_icon.png" class="one" slot="one">-->
    </Header>
   <div class="content">
     <div class="title">
        <h1>新组速报</h1>
     </div>
     <div class="item">
       <div class="top">
         <img src="./img/1.jpg" alt="">
         <h2>星辰月影联盟</h2>
         <p>1314人</p>
       </div>
       <p class="desc">星辰相随，月影不离，ycyh共同存在，惺惺相惜</p>
     </div>
     <div class="item">
       <div class="top">
         <img src="./img/2.jpg" alt="">
         <h2>刚才发生了一件小事</h2>
         <p>1017人</p>
       </div>
       <p class="desc">星辰相随，月影不离，ycyh共同存在，惺惺相惜</p>
     </div>
     <div class="item">
       <div class="top">
         <img src="./img/3.jpg" alt="">
         <h2>麻烦少女</h2>
         <p>731人</p>
       </div>
       <p class="desc">星辰相随，月影不离，ycyh共同存在，惺惺相惜</p>
     </div>
     <div class="item">
       <div class="top">
         <img src="./img/4.jpg" alt="">
         <h2>越涵</h2>
         <p>101人</p>
       </div>
       <p class="desc">星辰相随，月影不离，ycyh共同存在，惺惺相惜</p>
     </div>
     <h2>更多相关小组</h2>
     <div class="title">
       <h1>热门小组</h1>
     </div>
     <div class="item">
       <div class="top">
         <img src="./img/5.jpg" alt="">
         <h2>星辰月影联盟</h2>
         <p>1314人</p>
       </div>
       <p class="desc">星辰相随，月影不离，ycyh共同存在，惺惺相惜</p>
     </div>
     <div class="item">
       <div class="top">
         <img src="./img/6.jpg" alt="">
         <h2>麻烦少女</h2>
         <p>731人</p>
       </div>
       <p class="desc">星辰相随，月影不离，ycyh共同存在，惺惺相惜</p>
     </div>
     <div class="item">
       <div class="top">
         <img src="./img/7.jpg" alt="">
         <h2>越涵</h2>
         <p>101人</p>
       </div>
       <p class="desc">星辰相随，月影不离，ycyh共同存在，惺惺相惜</p>
     </div>
     <h2>更多相关小组</h2>
   </div>
  </div>
</template>
<script>
  import Header from './../header/header'
  export default ({
    components:{
      Header
    }
  })
</script>
<style scoped>
.content{
  padding: .2rem .1rem 0 .2rem;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: .6rem;
}
.title{
  margin-bottom: .2rem;
}
  .title h1{
    font-weight:500;
  }
  .item{
    margin-bottom: .2rem;
  }
  .item .top{
    display: flex;
    line-height: .5rem;
  }
  .top img{
    height: .5rem;
    width: .5rem;
  }
  .top h2{
    width: 70%;
    padding-left: .1rem;
    box-sizing: border-box;
    color: #3e3e3e;
  }
  .top p{
    color: #bebebe;
    font-size: .16rem;
  }
  .item .desc{
    font-size: .16rem;
    color: #9a9a9a;
    padding: .16rem 0;
    border-bottom: 1px solid #ccc;
  }
  .content>h2{
    color: #37C353;
    text-align: center;
    padding-bottom: .3rem;
  }
</style>
