<!-- <template>
    <div>
    <div class="flex-col page"> 
        <div class="flex-col items-center">
          span class="font_1">Umfrage</span>
      <br/>

      <body onload="run()">
        wird in <span id="spanId" style="color:#FE9637">60</span>Sekunden springen!
      </body>
    </div>
</template> -->
<script>
// import { useStore } from '@store/index'
// //先引入useRouter
// import { useRouter } from 'vue-router'

// export default {
//   const store = useStore()
//   const router = useRouter()
//   //通过定义一个方法，使用Router进行跳转
//   const test =()=>
//   router.push()
// }

// import { useRouter , useRoute } from 'vue-router'

// setup(){
//     const $router=useRouter()
//     const $route=useRoute()
    
//     // 对象 $router.push()可以向history对象添加新记录
//     $router.push({ path: 'Ergebnis1' })
// }


// return {
//   store,
//   //这里暴露test方法
//   test
// }
// 页面一加载完成，该方法就会执行
// 读秒，一秒钟数字改变一次

// export default { 唔可以系setup度用
//   methods: {
//     scrollTo(target) {
//       const element = this.$refs[target];
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   }
// }

var x = 60;       
var select = "Step3.html";

function run(){
  // 获取到的是span标签的对象
  var span = document.getElementById("spanId");
  // 获取span标签中间的文本
  span.innerHTML = x;
  x--;
  // 再让run方法执行呢，一秒钟执行一次
  if(x < 0)window.location = select;
  else window.setTimeout("run()", 1000);

};

function test(click){
  select = click;
}

export default {
  data() {
    return {
      isDisabled: false,
      showButton: true,
    };
  },
  //Falls du die Btns nicht zeigen möchtest
  // beforeRouteEnter(to, from, next) {
  //   next(vm => {
  //     vm.showButton = false
  //   })
  // },
  // mounted() {
  //   // 在页面加载时显示按钮
  //   this.showButton = true;
  // },
  // beforeDestroy() {
  //   // 在页面销毁之前隐藏按钮
  //   this.showButton = false;
  // },

  methods:{
    option1:function(){
      console.log(this.$router);
      // this.$router.plus('/') 这里跳转不了欸
      //this.$router.push({path:"/"}) //传入对象 但也跳转不了欸 push!唔系plus啊死蠢！
      //this.showButton = false;

      //带参数
      this.$router.push({path:'/Ergebnis1'}) //成功跳转了！！okok!!
      //this.$router.push({name:"almond",params:{id:Chocolat}}) //传参 这里传不到欸 // 试一下传right
      },

      option2:function(){
        console.log(this.$router);
        //this.showButton = false; //hier zeigt die Button nicht mehr, wie du möchtest

        //带参数
        this.$router.push({path:'/Ergebnis2'}) //成功跳转了！！okok!!
        //如果要动态传参

        //this.$router.push({name:"Ergebnis2",params:{id:A}}) //传参 这里传不到欸 // 试一下传worong
      },

      onClick() {
        // 在点击事件监听器中禁用按钮
        this.isDisabled = true;
        // 在每个按钮上使用 v-bind:disabled 指令，将其值绑定为 isDisabled，
        //当 isDisabled 为 true 时，按钮将被禁用。
        console.log("Button clicked")
      },
  },


}    
</script>

<template>
<body >
<div>
  <!-- <div class="flex-col page"> </div>  太占位啦！--> 
    <div class="flex flex-col items-center">  
    <br/><br/><br/><br/>
    <span class="font_1">Umfrage</span> 
    <!--style="{
      margin: 0;
      font-size: 1.38rem;
      font-family: Inter;
      line-height: 1.63rem;
      color: #000000;
      font-family: 'Work Sans', sans-serif;
      text-align: center;
      }"-->
    <br/><br/>
    <br/><br/>
    <span class="text">
    Welche Tragwirkung stellt sich in der monolithischen Deckenplatte infolge einer vertikalen, konstanten
    Flächenlast ein?
    <br/>
    </span>
  <router-view/>

<!-- onload="run()" 这里加载不了 这个onload function欸--> 
<!-- wird in <span id="spanId" style="color:#FE9637">60</span>Sekunden springen! -->
</div>



<!-- 要页面跳转了
1、 router-link: <router-link to='/testDemo'>
                <button>点击跳转2</button>
                </router-link>

2、 this.$router.push('/a')
3、 get params ->  console.log(this.$route.params.a); -->
<div class="flex-col group space-y-22">

  <!-- <router-link to="Ergebnis2"><button class="flex-col justify-start items-center text-wrapper " type="submit">A: Kette von Einfeldträgern</button></router-link> -->
  <!-- <button class="flex-col justify-start items-center text-wrapper " type="submit" a href="Step3.html">A: Kette von Einfeldträgern</button> -->


  <!-- <router-link to="Ergebnis1"><button class="flex-col justify-start items-center text-wrapper_2 " type="submit">B: Durchlauftragwirkung</button></router-link> -->
  
  <!-- <router-link to="Ergebnis2"><button class="flex-col justify-start items-center text-wrapper_3" type="button">C: Normalkrafttragwirkung</button>
  </router-link> -->
<button v-on:click="onClick" :disabled="isDisabled" v-if="showButton" id ="A" class="flex-col justify-start items-center text-wrapper " type="submit" @click="option2">A: Kette von Einfeldträgern</button>

<button v-on:click="onClick" :disabled="isDisabled" v-if="showButton" id ="B" class="flex-col justify-start items-center text-wrapper_2" type="button" @click="option1">B: Durchlauftragwirkung</button>

<button v-on:click="onClick" :disabled="isDisabled" v-if="showButton" id ="C" class="flex-col justify-start items-center text-wrapper_3" type="button" @click="option2">C: Normalkrafttragwirkung</button>

<button v-on:click="onClick" :disabled="isDisabled" v-if="showButton" id ="D" class="flex-col justify-start items-center text-wrapper_4" type="button" @click="option2">D: Scheibentragwirkung</button>
</div>
</div>

</body>
</template>

<style scoped>
@import url("../css/halloween.css"); /*src = . */ 
/* .font_1{ /* didnt work 
  position: center;
  } */

/* 
使用深度选择器来写使样式生效。
有两种写法：

.a >>> .b {}
.a /deep/ .b
当你子组件使用了 scoped 但在父组件又想修改子组件的样式可以 通过 >>> 来实现：

<style scoped>
.a >>> .b { /* ... 


将会编译成
.a[data-v-f3f3eg9] .b {
  /* ... */

</style>
