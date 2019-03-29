<template>
  <div class="header">
    <p>{{text}}</p>
    <img :src="onepic" class="one">
    <img :src="twopic" class="two">
  </div>
</template>
<script>
  export default ({
      props:['text','twopic','onepic']
  })
</script>
<style scoped>
 .header{
   height: .4rem;
   background-color: #f7f7f7;
   border-bottom: 1px solid #ababab;
   width: 100%;
   text-align: center;
   position: relative;
   line-height: .4rem;
   font-size: .2rem;
 }
 .header img{
   height: .3rem;
   position: absolute;
   top: .05rem;
 }
  .one{
      right:.6rem;
  }
  .two{
    right: .1rem;
  }
</style>
