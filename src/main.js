import { createApp } from 'vue'
// import './style.css'
import './utils/rem'
import App from './views/FragePage.vue'
import router from './router'
import * as echarts from 'echarts/core'

const app=createApp(App)//用const = 去挂载
app.use(router) //要先use哦
app.provide("ec", echarts);

// app.config.globalProperties.$axios = axios.create({
//     baseURL: 'http://localhost:8000', // 设置axios的基本URL
//     headers: {
//     // 设置axios请求的头部信息
//     }
// });

//createApp(app).mount('#app')
app.mount('#app')
