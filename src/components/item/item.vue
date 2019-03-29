<template>
  <div class="item" @click="pao()">
    <img :src="imgUrl" v-show="!flag"><img :src="activeUrl" v-show="flag">
    <p :class="{active:flag}">{{text}}</p>
  </div>
</template>
<script>
  export default ({
    data:function () {
      return{
      }
    },
    // 先获取父组件给子组件传的index值（固定的值，每个子组件的路由）和activeIndex值（当前的路由值，变量）
    props:['text','imgUrl','activeUrl','index','activeIndex'],
    methods:{
      // 当点击时，把被点击项的路由值传给父组件activeIndex
      pao:function () {
        this.$emit('myFn',this.index);
      }
    },
    computed:{
      flag:function () {
        /*console.log(this.index);
        console.log(this.activeIndex);*/
        // 把index与activeIndex进行比较，相等则该项被选中，改变样式
        if(this.index===this.activeIndex){
          return true
        }
        return false;
      }
    }
  })
</script>
<style scoped>
  .item{
    width: 20%;
    float: left;
    text-align: center;
  }
  .item img{
    height: .35rem;
    vertical-align: top;
  }
 .active{
   color: #42BD56;
 }
</style>
