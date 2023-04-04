import { createApp } from 'vue'
// import './style.css'
import './util/rem'
import App from './views/FragePage.vue'
import router from './router'
import * as echarts from 'echarts/core'

const app=createApp(App)//用const = 去挂载
app.use(router) //要先use哦
app.provide("ec", echarts);


//createApp(app).mount('#app')
app.mount('#app')
