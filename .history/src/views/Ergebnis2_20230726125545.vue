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
    <!-- <div class="echartsBox" ref="echartsBox"> 初始化Echarts 峰华老师的方法 使用props传参 -->
      <div
      id="myEcharts"
      ref="echartsBox"
      :style="
      {
        width: '75%',
        height: '300px',
        // margin: auto,
        // display: flex,
        // justify-content: center,
        // align-items: center
      }">
    </div>
  </body>
</html>
</template>

<script>
import * as echarts from "echarts";
import { reactive, ref, onMounted, onUnmounted, nextTick } from "vue";
import axios from 'axios';

export default {
  // created(){
  //   axios.get('http://localhost:8000/question1').then((res) =>{
  //     console.log(res) //成功det到数据啦！
  //   })
  // },
  methods:{
    goPage:function(){
      console.log(this.$router);
      // this.$router.plus('/') 这里跳转不了欸
      //this.$router.push({path:"/"}) //传入对象 但也跳转不了欸 push!唔系plus啊死蠢！

      //带参数
      this.$router.push({path:'/Erklaerung'}) //成功跳转了！！ id就是Chocolat!
      //this.$router.push({name:"almond",params:{id:Chocolat}}) //传参 这里传不到欸
      // Chocolat is not defined (???)
    },
  },

  setup(){
    let chart;

    var state = reactive({
      data: [], //这里定义了data的类型是array
      dataType: "json", //返回数据形式为json but didnt work?
      option: {
        // title: {
        //   text: "Umfrage",
        //   color: "#FE9637",
        // },
        tooltip: {},
        legend: {
          //data: ["Auswahl"],
          //series里面有name值， legend里面的data可以删掉
        },
        grid: {
          left: "30%",
          top: "10%",
          right: "auto", //ok了！？
          // left: left,
          // top: top,
          // right: 'auto',
          // bottom: 'auto',
          containLebel: true, //显示刻度，不显示就false
        },

        style: {
          width: "75%",
          height: "100%",
          margin: 0,
          //到底写在哪里啊style@media
        },

        xAxis: {
          type: "category",
          data: ["A", "B", "C", "D"],
        },
        yAxis: {
          type: "value",
          //data: state.values, 这里不显示的 要在下面series显示
        },
        series: [
          {
            name: "Auswahl",
            type: "bar",
            data: [],
            //If 传的是Proxy对象，proxy代理了Child对象，所以我们访问的是proxy代理对象的自身属性，因此不需要.value
            //ref的值在 JS/TS 中读取和修改时，需要使用 .value获取，在模版中读取是，不需要使用 .value
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
              },
            },
          },
        ],
      },
    });

    /// 声明定义一下echart
    let echart = echarts;

    onMounted(() => {
      initChart();
      axios
      .get("http://localhost:8000/question1")
      .then((res) => {
        // state.data = res.data;
        state.option.series[0].data = res.data;
        nextTick(() => {
          chart.setOption(state.option);
        });
      })
      .catch((error) => {
        console.log(error); //没有报错表示成功了！
      });
    });

      onUnmounted(() => {
        echart.dispose;
      });

      // 基础配置一下Echarts
      function initChart() {
        chart = echart.init(document.getElementById("myEcharts")); //initChart报错惹
        // 把配置和数据放这里
        chart.setOption(state.option);

        //Pink老师教的方法
        window.addEventListener("resize", function () {
          chart.resize();
        });
      }
      onUnmounted(() => {
        chart.dispose();
      });
      return { initChart, state };
      },
    };

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