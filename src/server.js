//我搭建了本地服务器啦！！是麦麦头的蛋糕店！★

//1. 引入express
const express = require('express')

//2. 创建应用对象
const app = express()
const port = 3000

//3. 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/server', (request, response) => {

  //设置响应头  设置允许跨域
  // response.setHeader('Access-Control-Allow-Origin', '*');
  //设置响应体 这里是返回给前端的内容
  response.send('Hey! Mike☆')
});

//4. 监听端口启动服务
app.listen(port, () => {
  console.log("Mike is making Cake!")
});


// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hey! Mike☆')
// })

// app.listen(port, () => {
//   console.log('Example app listening at http://localhost:3000')
// })