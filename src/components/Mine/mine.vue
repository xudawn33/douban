<template>
  <div>
    <Header text="我的" twopic="./static/img/ic_settings.png"></Header>
    <div class="content">
      <div class="header">
        <div class="left">
          <i class="iconfont icon-mima1"></i>
          <p>密码管理</p>
        </div>
        <div class="right">
          <i class="iconfont icon-yinxingqia"></i>
          <p>银行卡管理</p>
        </div>
      </div>
      <ul class="list">
        <li>
          <i class="iconfont icon-bianji"></i>
          <p>风险承受能力评估</p>
          <span>></span>
        </li>
        <li>
          <i class="iconfont icon-17"></i>
          <p>安全保障</p>
          <span>></span>
        </li>
        <li>
          <i class="iconfont icon-weibiaoti2fuzhi12"></i>
          <p>我的关注</p>
          <span>></span>
        </li>
        <li>
          <i class="iconfont icon-bangzhu"></i>
          <p>帮助中心</p>
          <span>></span>
        </li>
        <li><i class="iconfont icon-weibiaoti2fuzhi12"></i>
          <p>关于我们</p>
          <span>></span></li>
        <li><i class="iconfont icon-jianchaquyu"></i>
          <p>检查更新</p>
          <span>></span></li>
        <li><i class="iconfont icon-service"></i>
          <p>联系客服</p>
          <span>></span></li>
      </ul>
    </div>
  </div>
</template>
<script>
  import Header from './../header/header'
  import './css/iconfont.css'
  export default ({
    components:{
        Header
    }
  })
</script>
<style scoped>
.content{
  width: 100%;
  padding: .2rem 0;
  box-sizing: border-box;
}
  .content .header{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    padding-bottom: .15rem;
  }
  .header>div{
    text-align: center;
    width: 50%;
  }
  .header div i{
      font-size: .4rem;
    color: #43B351;
  }
  .header div p{
    font-size: .18rem;
    color: #4a4a4a;
  }
  .list{
    margin-top: .1rem;
  }
  .list li{
    display: flex;
    padding: .15rem;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
  }
  .list li i{
    color: #43B351;
    font-size: .25rem;
  }
  .list li p{
    font-size: .15rem;
    padding-left: .1rem;
    line-height: .27rem;
    text-align: left;
    flex: 2;
  }
.list li span{
  font-size: .19rem;
  font-family: '黑体';
  line-height: .27rem;
  flex: 1;
  text-align: right;
  color: #43B351;
}
</style>
