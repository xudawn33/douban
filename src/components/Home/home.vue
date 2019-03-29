<template>
  <div>
    <div class="header">
      <div class="search">
        <img src="./img/ic_group_search_small.png">
        <input type="text" placeholder="ycyh、is、true">
        <img src="./img/ic_scan_gray.png">
      </div>
      <div class="chat">
      <img src="./img/ic_chat_white.png">
      </div>
    </div>
   <!--轮播图-->
    <div class="banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="./img/01.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./img/02.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./img/03.jpg" alt="">
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="content">
      <span class="hot">热点</span>
      <div class="item">
        <div class="item-left">
          <h2>《加勒比海盗》14年老粉给你带来所有彩蛋和深埋梗</h2>
          <p>此影评送给那些不离不弃的老粉和船长杰克·斯派洛</p>
          <p>作者：女神的秋裤</p>
        </div>
        <div class="item-right">
          <img src="./img/1.jpg" alt="">
        </div>
      </div>
      <div class="item">
        <div class="item-left">
          <h2>《加勒比海盗》14年老粉给你带来所有彩蛋和深埋梗</h2>
          <p>此影评送给那些不离不弃的老粉和船长杰克·斯派洛</p>
          <p>作者：豆瓣</p>
        </div>
        <div class="item-right">
          <img src="./img/2.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  export default ({
    mounted:function () {
      new Swiper ('.swiper-container', {
        speed:500,
        autoplay : {
          delay:2000
        },
        effect : 'flip',
        loop: true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
      })
    }
  })
</script>
<style scoped>
.header{
  width: 100%;
  height: .6rem;
  background-color: #42C055;
  display: flex;
  padding: .1rem;
  box-sizing: border-box;
}
.header img{
  height: .3rem;
}
.header .search{
  width: 90%;
  background-color: #fff;
  border-radius: .06rem;
  padding:0 .08rem;
  box-sizing: border-box;
  line-height: .4rem;
  display: flex;
}
.header .search input{
  width: 90%;
  height: .4rem;
  border: none;
}
input[placeholder] {
  text-indent: .07rem;
  font-size:.17rem;
  color: #c3c3c3!important;
  }
.header .search img{
 height: .25rem;
  margin-top: .075rem;
}
  .header .chat{
    width: 10%;
    line-height: .6rem;
    text-align: right;
  }
  .banner{
    position: relative;
  }
  .swiper-container{
    width: 100%;
    height: 1.5rem;
  }
.swiper-container .swiper-pagination{
  position: absolute!important;
  text-align: right;
  bottom:.25rem;
}
.swiper-container img{
  width: 100%;
}
.content{
  position: relative;
}
.content .hot{
  position: absolute;
  color: #FC8146;
  left: 0;
  top: -.15rem;
  height: .3rem;
  text-align: right;
  line-height: .3rem;
  width: .55rem;
  font-size: .2rem;
  border-left: 5px solid #FC8146;
}
  .content .item{
    display: flex;
    width: 100%;
    box-sizing: border-box;
    padding: .2rem;
    border-bottom: 1px solid #ccc;
  }
.content .item:nth-last-of-type(1){
  border: none;
}
  .item .item-left{
    width: 60%;
    text-align: left;
  }
.item .item-left p{
  margin-top: .1rem;
  font-size: .14rem;
  color: #a7a7a7;
}
  .item .item-right{
    padding-left:.2rem ;
    box-sizing: border-box;
    width: 40%;
  }
.item .item-right img{
  width: 100%;
}
</style>
