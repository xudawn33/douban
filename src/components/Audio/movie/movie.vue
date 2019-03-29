<template>
  <div class="content">
    <h3 class="title">体育新闻</h3>
    <div class="news">
        <div class="item" v-for="(item,index) in arr">
          <!--<h2 @click="jump(index)">{{item.title}}</h2>-->
          <h2> <a :href="item.url">{{item.title}}</a></h2>
          <img  :src="item.thumbnail_pic_s">
          <p>类型：{{item.category }}</p>
          <p>作者：{{item.author_name}}</p>
          <p>日期：{{item.date}}</p>
        </div>
    </div>
  </div>
</template>
<script>
  export default {
    data:function () {
      return{
        arr:'',
      }
    },
    methods:{
      jump:function (index) {
        window.location.href=this.arr[index].url;
      }
    },
    created:function () {
      var that=this;
      this.$http.get('http://toutiao-ali.juheapi.com/toutiao/index',{
        params:{
          type:'tiyu'
        },
        headers:{
          Authorization:'APPCODE 6c1fa33904b543af921e1b2b6dd6f3d2'
        }
      }).then(function (res) {
        that.arr=res.data.result.data;
        // console.log(that.arr);
      }).catch(function (err) {

      })
    }


  }
</script>
<style scoped>
  .title{
    padding: .8rem .2rem .1rem .2rem;
    font-size: .19rem;
    color: #404040;
  }
  .news{
    padding: .1rem .2rem;
  }
  .news .item{
    border-bottom: 1px solid #808080;
    margin-bottom: .2rem;
    padding-bottom: .1rem;
  }
  .item img{
    margin: .1rem 0;
    border-radius: .1rem;
  }
  .item p{
    color: #787878;
    font-size: .15rem;
    margin: .05rem 0;
  }
  h2 a{
    font-size: .18rem;
    color: #3b5a81;
    text-underline: none;
  }
</style>
