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
      <span class="text">Supi!</span>
      <img src="../images/right.png" img class="image" @click="goPage"/>
      <span class="text_2">B ist richtig</span>
    </div>

  <!--为Chart准备定义了宽高的DOM-->
    <div class="echarts-box">
    <div id="myEcharts" :style="{width: '75%', height: '300px',  margin: auto }"></div>

      <!-- //<canvas data-zr-dom-id="zr_0" //报错了
      // width:"293px",
      // height:"422px", 
      // position: absolute,
      // left: "0px",
      // top: "0px",
      // user-select: none,
      // -webkit-tap-highlight-
      // color: rgba(0, 0, 0, 0),
      // padding: "0px",
      // margin: "0px", 
      // border-width: "0px">
      width: '75%', 
      height: '100%', 
      margin: 0,</canvas> -->
    </div>
  </body>

</html>

  <!-- <div> -->
    <!-- <a href="../views/Erklaerung.vue" target="_blank"> -->
      <!-- <img src="../images/right.png" class="richtig" alt="Vite logo" @click="goPage"/> -->
    <!-- </a> -- Vue不用a标签的>
    <a href="https://vuejs.org/" target="_blank">
      <img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a> -->
  <!-- </div> -->
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  
</template>

<script>

  // src="https://cdnjs.cloudflare.com/ajax/libs/echarts/5.4.1/echarts.min.js"
  // integrity="sha512-OTbGFYPLe3jhy4bUwbB8nls0TFgz10kn0TLkmyA+l3FyivDs31zsXCjOis7YGDtE2Jsy0+fzW+3/OVoPVujPmQ=="
  // crossorigin="anonymous"
  // referrerpolicy="no-referrer";

import * as echarts from "echarts";
import { reactive, onMounted, onUnmounted } from "vue";
import axios from 'axios'

export default {
  methods:{
      goPage:function(){
          console.log(this.$router);
          // this.$router.plus('/') 这里跳转不了欸
          //this.$router.push({path:"/"}) //传入对象 但也跳转不了欸 push!唔系plus啊死蠢！

          //带参数
          this.$router.push({path:'/Erklaerung'}) //成功跳转了！！okok!!
          //this.$router.push({name:"almond",params:{id:Chocolat}}) //传参 这里传不到欸
      },

  },
  
    // axios.get('http://localhost:8000/question1').then(res => {
    //   console.log(res) 
    //   res= res.data.data;
    //   // 获取response的数据，赋值给变量，这些变量用于下面配置图表的option中
    //   let yAxis = data.chart.yAxis; 
  
  name: "echartsBox",

  setup() {
    const state = reactive({
      dare:[]
    })
    /// 声明定义一下echart
    let echart = echarts;

    onMounted(() => {
      initChart(); //initChart报错惹
      axios.get('http://localhost:8000/question1/api').then(res => {
        state.date=res.date
      })
    });

    onUnmounted(() => {
      echart.dispose;
    });

    // 发送axios请求，获取数据


    
    // 基础配置一下Echarts
    function initChart() {
      let chart = echart.init(document.getElementById("myEcharts"),); //initChart报错惹
      // 把配置和数据放这里
      chart.setOption({
        title: {
          text: "Umfrage",
          color: "#FE9637",
        },
        tooltip: {},
        legend: {
          //data: ["Auswahl"],
        },

        style: {
          width: '75%', 
          height: '100%', 
          margin: 0 , 
          //到底写在哪里啊style@media
        },

        xAxis: {
          data: ["A", "B", "C", "D"],
        },
        yAxis: {},
        series: [{
          name: "Auswahl",
          type: "bar",
        //   axios.get('http://localhost:8000/question1').then(res => {
        // console.log(res)  
        //   data: res.data.data  //这里数据是一个数组的形似
        //     }],
          data: [], //到时要是由后端请求5, 19, 13, 27
          // axios.get('http://localhost:8000/question1')then((res)=>{ console.log(res)})
          itemStyle: {
             //通常情况下：
            normal: {              
              //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
              color: function (params) {
                var colorList = [
                  "#ff715e",
                  "#ffaf51",
                  "#ffee51",
                  "#8c6ac4",
                  "#715c87",
                ];
                return colorList[params.dataIndex];
              },
            },
            //鼠标悬停时：
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(251, 161, 72, 0.66)",
            }
          }
        }]
      });
      window.onresize = function() {
        //自适应大小
        chart.resize();
      };
      // 这个方法报错了  Access to XMLHttpRequest at 'http://localhost:8000/question1' from origin 
      // 'http://localhost:5173' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header 
      // is present on the requested resource.
      // chart.showLoading();
      // //获取数据
      // axios.get('http://localhost:8000/question1').then(res => {
      //   console.log(res)  
      //   setTimeout(()=>{  //未来让加载动画效果明显,这里加入了setTimeout,实现2s延时
      //     chart.hideLoading(); //没有加载出来隐藏加载动画
      //     chart.setOption({  //动画的配置
      //       series: [{
      //         data: res.data.data  //这里数据是一个数组的形似
      //       }]
      //     })
      //   }, 2000) 
    // })
    }
    return { initChart, state};
  }
};
  // mounted(){
  //   const h =document.createElement('script');
  //   h.type ='text/javascript';
  //   h.src = 'https://cdnjs.cloudflare.com/ajax/libs/echarts/5.4.1/echarts.min.js';
  //   document.body.appenChild(h);
  // }


//   name: "echarts-container",
//   setup() {
//     /// 声明定义一下echart

//     // <script type="text/javascript">
//       const main = document.getElementById("main");
//       const height = document.documentElement.clientHeight;
//       // main.style.width = "50%";
//       main.style.height = "100%";
//       // 基于准备好的dom，初始化echarts实例
//       var myChart = echarts.init(main);

//       // 指定图表的配置项和数据
//       var option = {
//         title: {
//           text: "Umfrage",
//           color: "#FE9637",
//         },
//         tooltip: {},
//         legend: {
//           data: ["Auswahl"],
//         },
//         xAxis: {
//           data: ["A", "B", "C", "D"],
//         },
//         yAxis: {},
//         series: [{
//           name: "Auswahl",
//           type: "bar",
//           data: [5, 19, 13, 27], //到时要是由后端请求
//           itemStyle: {
//              //通常情况下：
//             normal: {              
//               //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
//               color: function (params) {
//                 var colorList = [
//                   "#ff715e",
//                   "#ffaf51",
//                   "#ffee51",
//                   "#8c6ac4",
//                   "#715c87",
//                 ];
//                 return colorList[params.dataIndex];
//               },
//             },
//             //鼠标悬停时：
//             emphasis: {
//               shadowBlur: 10,
//               shadowOffsetX: 0,
//               shadowColor: "rgba(251, 161, 72, 0.66)",
//             }
//           }
//         }],

//     // 使用刚指定的配置项和数据显示图表。
//     myChart.setOption(option);
//     setTimeout(()=>{
//       myChart.resize();
//     },0),
//     window.addEventListener("resize", function () {
//     myChart.resize();
//   });
// }
// onMounted(() => {
//   initEcharts()
// }),
//     myChart.setOption(option)
  
//     window.onresize = function () {
//       //自适应大小
//       myChart.resize();
//       document.body.width = "100vw";
//     }

    
//     };
//   },


  // function initEcharts() {
  //   var main = document.getElementById("main");
  //   var height = document.documentElement.clientHeight;
  // // main.style.width = "50%";
  //   main.style.height = "100%"; //why hier 报错？？
  // // 基于准备好的dom，初始化echarts实例
  //   var myChart = echarts.init(main);

  //   // 指定图表的配置项和数据
  //   var option = {
  //     title: {
  //       text: "Umfrage",
  //       color: "#FE9637",
  //     },
  //     tooltip: {},
  //     legend: {
  //       data: ["Auswahl"],
  //     },
  //     xAxis: {
  //       data: ["A", "B", "C", "D"],
  //     },
  //     yAxis: {},
  //     series: [
  //       {
  //         name: "Auswahl",
  //         type: "bar",
  //         data: [5, 19, 13, 27], //到时要是由后端请求 how请求后端数据? => 把data数据抽成动态参数赋值
  //         itemStyle: {
  //           //通常情况下：
  //           normal: {
  //             //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
  //             color: function (params) {
  //               var colorList = [
  //                 "#ff715e",
  //                 "#ffaf51",
  //                 "#ffee51",
  //                 "#8c6ac4",
  //                 "#715c87",
  //               ];
  //               return colorList[params.dataIndex];
  //             },
  //           },
  //           //鼠标悬停时：
  //           emphasis: {
  //             shadowBlur: 10,
  //             shadowOffsetX: 0,
  //             shadowColor: "rgba(251, 161, 72, 0.66)",
  //           },
  //         },
  //     },
  //   ],
  // };
</script>
<!-- ★☆在正式开发中，我们可能多处使用到Echarts，所以大家可以写一个EchartsCommon,
  把height、width和setOption定义为动态接收props，这样就方便调用啦！★☆ -->


<style scoped>
/* #main {
  width: 75%;
} */

/* @media screen and (min-width: 1024px) {
  #main {
    width: 50%;
  }
} */

@import url("../css/Step3b.css"); /*src = . */ 
</style>