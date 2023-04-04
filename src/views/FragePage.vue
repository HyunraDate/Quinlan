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
    methods:{
      option1:function(){
            console.log(this.$router);
            // this.$router.plus('/') 这里跳转不了欸
            //this.$router.push({path:"/"}) //传入对象 但也跳转不了欸 push!唔系plus啊死蠢！

            //带参数
            this.$router.push({path:'/Ergebnis1'}) //成功跳转了！！okok!!
            //this.$router.push({name:"almond",params:{id:Chocolat}}) //传参 这里传不到欸 // 试一下传right
        },

        option2:function(){
            console.log(this.$router);
            // this.$router.plus('/') 这里跳转不了欸
            //this.$router.push({path:"/"}) //传入对象 但也跳转不了欸 push!唔系plus啊死蠢！

            //带参数
            this.$router.push({path:'/Ergebnis2'}) //成功跳转了！！okok!!
            //如果要动态传参

            //this.$router.push({name:"Ergebnis2",params:{id:A}}) //传参 这里传不到欸 // 试一下传worong
        }
    }
}

    
</script>

<template>
<body >
<div>
  <!-- <div class="flex-col page"> </div>  太占位啦！--> 
    <div class="flex-col items-center">  </div>
      <span class="font_1">Umfrage</span>
  <router-view/>

<!-- onload="run()" 这里加载不了 这个onload function欸--> 
  
    wird in <span id="spanId" style="color:#FE9637">60</span>Sekunden springen!

</div>

<div>
<span class="text">
Welche Tragwirkung stellt sich in der monolithischen Deckenplatte infolge einer vertikalen, konstanten
Flächenlast ein?
<br/>
</span>

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
<button id ="A" class="flex-col justify-start items-center text-wrapper " type="submit" @click="option2">A: Kette von Einfeldträgern</button>

<button id ="B" class="flex-col justify-start items-center text-wrapper_2" type="button" @click="option1">B: Durchlauftragwirkung</button>

<button id ="C" class="flex-col justify-start items-center text-wrapper_3" type="button" @click="option2">C: Normalkrafttragwirkung</button>

<button id ="D" class="flex-col justify-start items-center text-wrapper_4" type="button" @click="option2">D: Scheibentragwirkung</button>
</div>
</div>

</body>
</template>

<style scoped>
@import url("../css/halloween.css"); /*src = . */ 
</style>
