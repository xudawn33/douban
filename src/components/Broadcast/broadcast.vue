<template>
  <div>
    <Header text="广播" onepic="./static/img/ic_status_search_user.png"
     twopic="./static/img/ic_chat_green.png"></Header>
    <div class="title">
      <img src="./img/user_normal.jpg">
      <h2>登陆发广播</h2>
    </div>
    <div class="content">
      <div class="item">
        <div class="top">
          <img src="./img/logo.png">
          <div class="word">
            <p><span class="name">豆瓣</span> 写了日记</p>
            <p>2018-5-23 10:39:23</p>
          </div>
        </div>
        <div class="bottom">
          <p>5月24日凌晨3:00到6:00豆瓣停机维护</p>
          <p>因业务发展需要，豆瓣计划于5月24日(星期四)凌晨3:00到6:00对服务器机房进行迁移迁移期间全部豆瓣项目</p>
          <div class="talk">
            <div class="list">
              <img src="" alt="">
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="top">
          <img src="./img/logo.png">
          <div class="word">
            <p><span class="name">豆瓣</span> 写了日记</p>
            <p>2018-5-23 10:39:23</p>
          </div>
        </div>
        <div class="bottom">
          <p>5月24日凌晨3:00到6:00豆瓣停机维护</p>
          <p>因业务发展需要，豆瓣计划于5月24日(星期四)凌晨3:00到6:00对服务器机房进行迁移迁移期间全部豆瓣项目</p>
          <div class="talk">
            <div class="list">
              <img src="" alt="">
              <span></span>
            </div>
          </div>
        </div>
      </div>
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
.title{
  display: flex;
  padding: .2rem;
  box-sizing: border-box;
  width: 100%;
  align-content: center;
  border-bottom: 1px solid #ccc;
}
  .title img{
    height: .48rem;
    border-radius: 50%;
  }
  .title h2{
    color: #a6a6a6;
    line-height: .48rem;
    margin-left: .1rem;
  }
  .content{
    width: 100%;
    padding: .2rem;
    box-sizing: border-box;
  }
  .item{

  }
  .item .top{
    display: flex;
  }
  .top img{
    height: .5rem;
    border-radius: 50%;
    margin-right: .15rem;
  }
  .word{
    color: #a6a6a6;
  }
  .word p{
    line-height: .25rem;
  }
  .word p:nth-of-type(1){
    font-size: .18rem;
  }
  .word .name{
      color: #191919;
  }
  .content .bottom{
    width: 100%;
    padding:.2rem .2rem .2rem .65rem ;
    box-sizing: border-box;
  }
  .bottom p:nth-of-type(1){
    font-size: .19rem;
    color: #191919;
  }
.bottom p:nth-of-type(2){
  color: #a6a6a6;
  margin-top: .1rem;
  font-size: .14rem;
}
  .bottom .talk{

  }
</style>
