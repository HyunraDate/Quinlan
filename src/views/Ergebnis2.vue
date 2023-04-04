<template>
<html lang="en">
  <!-- <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>codefun</title>
    <link rel="stylesheet" href="./Step3.Ai.css" /> -->

  <!-- 需要需要！ 就算——我在main.js已经import了echarts了
    <script src="node_modules/echarts/dist/echarts.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/echarts/5.4.1/echarts.min.js"
    integrity="sha512-OTbGFYPLe3jhy4bUwbB8nls0TFgz10kn0TLkmyA+l3FyivDs31zsXCjOis7YGDtE2Jsy0+fzW+3/OVoPVujPmQ=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"></script> 

  
  </head>-->
  <body>
    <div class="flex-col items-center page">
      <span class="text">Oh!</span>
      <img src="../images/wrong.png" img class="image" @click="goPage"/>
      <span class="text_2">B ist richtig</span>
    </div>
    <!--为Chart准备定义了宽高的DOM-->
    <div class="echarts-container">
      <div id="main" style="margin: 0 auto"></div>
    </div>
  </body>
</html>
</template>

<script>
export default {
    methods:{
        goPage:function(){
            //console.log(this.$router);
            // this.$router.plus('/') 这里跳转不了欸
            //this.$router.push({path:"/"}) //传入对象 但也跳转不了欸 push!唔系plus啊死蠢！

            //带参数
            this.$router.push({path:'/Erklaerung'}) //成功跳转了！！ id就是Chocolat!
            //this.$router.push({name:"almond",params:{id:Chocolat}}) //传参 这里传不到欸
            // Chocolat is not defined (???)
        }
    }
}
</script>

<style scoped>
/* #main {
  width: 75%;
}
@media screen and (min-width: 1024px) {
  #main {
    width: 50%;
  }
} */
@import url("../css/Step3a.css"); /*src = . */ 
</style>