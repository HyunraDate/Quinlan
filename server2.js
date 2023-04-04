//我搭建了本地服务器啦！！是麦麦头的蛋糕店！★
//需要把CommonJS模块改成ES6模块
//1. 引入express
// const express = require('express');
import express from 'express'
//2. 创建应用对象
const app = express();

//3. 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/', (req, res) => {
//设置响应头  设置允许跨域
res.setHeader('Access-Control-Allow-Origin', '*');
//设置响应体 这里是返回给前端的内容
res.send('那就跳！舞！吧！☆');
});

// 访问 question1
app.get('/question1', (req, res) => {
  res.send({
    code: 10000,
    status: 'success',
    data: {
      "A":3,"B":24,"C":4,"D":23 //yes!! send to Echart go!
    },
    //["A"=3;"B"=24,"C"=4,"D"=23]报错惹, //Oder[5, 19, 13, 27], 
    message: 'Hey Mike!'
  })
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
