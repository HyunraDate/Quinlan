import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { imagetools } from 'vite-imagetools'

// res.setHeader('Access-Control-Allow-Origin', '*'); //只写这个的话直接打不开终端啦

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/freiraum/VoteApp/',
  //path这段写得不是很好actually
  // server:{ //中转服务器 解决跨域问题
  //   proxy:{ //通过代理实现跨域
  //     //hier 代理http://localhost:8000/question1
  //     'path/':{  //oder 叫'/api'都可以
  //       target:'http://localhost:8000/question1',
  //       changeOrigin:true, //开启代理，允许跨域
  //       rewrite:path=>path.replace(/^\/path/,'') //设置重写的路径
  //     } 
  //   }
  // }
  // plugins: [imagetools()],
})
// module.exports = {
//   devServer: {
//     proxy: {
//       '/api': {
//         target: 'http://localhost:8000/question1', // 目标服务器地址
//         changeOrigin: true, // 是否改变源地址
//         pathRewrite: {
//           '^/api': '/api' // 路径重写
//         }
//       }
//     }
//   }
// };
//Vue中实现页面自适应
// 引入等比适配插件 
// const px2rem = require('postcss-px2rem') 
// // 配置基本大小
// const postcss = px2rem({
// // 基准大小 baseSize，需要和rem.js中相同 
//   remUnit: 16
// }) 
// // 使用等比适配插件 
// module.exports = { lintOnSave: true, css: { loaderOptions: { postcss: { plugins: [ postcss ] } } } }
