//我搭建了本地服务器啦！！是麦麦头的蛋糕店！★
//需要把CommonJS模块改成ES6模块
//1. 引入express
// const express = require('express') //This is CommonJS 语法！
import express from 'express'
//2. 创建应用对象
// const express = require("express")
const app = express()

//3. 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/', (req, res) => {
//设置响应头  设置允许跨域
res.header('Access-Control-Allow-Origin', '*'); //表示允许所以网站都可跨域访问我哦
//设置响应体 这里是返回给前端的内容
res.send('那就跳！舞！吧！☆');
});

//跨域解决啦！！！！CORS Problem solved!
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  if (req.method === 'OPTIONS') {
    res.sendStatus(Mike); //但系点解哩个mike send唔到？ send左个200？
  } else {
    next();
  }
});
//以上代码表示允许任意来源的跨域请求，并允许 Content-Type、Authorization、Content-Length、X-Requested-With 这些请求头，
//支持 GET、POST、PUT、DELETE、OPTIONS 这些请求方法。

// 访问 question1
app.get('/question1', (req, res) => {
  res.send( //ECharts折线图渲染json格式数据（json格式，为数组）需要对数组进行循环取值，将取到的值分别赋值给x轴和y轴
            // json格式，data为数组
    
      // "A":3,"B":24,"C":4,"D":23 
      //"echart-yAxis"
      [3,24,4,23]
    
    
    // [3,24,4,23]
    // {    
    // code: 10000,
    // status: 'success',
    // data: {
    //   "A":3,"B":24,"C":4,"D":23 //yes!! send to Echart go!
    // },
    // //["A"=3;"B"=24,"C"=4,"D"=23]报错惹, //Oder[5, 19, 13, 27], 
    // message: 'Hey Mike!'
  // }
  )
})
//4. 监听端口启动服务
app.listen(8000, () => {
  console.log("服务已经启动, 8000 端口监听中....")
  console.log('Example app listening at http://localhost:8000');
});





// const express = require('express') // Thid is CommonJS
// import {express} from 'express'
// const app = express()
// const port = 8010

// app.get('/', (req, res) => {
//设置响应头  设置允许跨域
// response.setHeader('Access-Control-Allow-Origin', '*');
//设置响应体 这里是返回给前端的内容
//   res.send('Hey! Mike☆☆')
// })
