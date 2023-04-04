import {
    createRouter, 
    createWebHashHistory,
    createWebHistory
  } from 'vue-router'
  
  // 1. 定义路由组件.
  // 也可以从其他文件导入
  
  // import Home from '../views/Home.vue'
  // import App from './App.vue' 原App好像不需要引入？
  import FragePage from '../views/FragePage.vue' 
  import Ergebnis1 from '../views/Ergebnis1.vue' //1=true
  import Ergebnis2 from '../views/Ergebnis2.vue' //2=falsh
  import Erklaerung  from '../views/Erklaerung.vue'

  //import Step3 from '../views/Step3.html'

  
  //路由懒加载，用到时再加载（咪时好大，load又耐）
  // const About=()=>import('../views/About.vue') //然后Home放在下面path component后面就行啦
  //我加载不到惹
  
  // 2. 定义一些路由
  // 每个路由都需要映射到一个组件。
  // 我们后面再讨论嵌套路由。(hier写路由表)
  const routes = [
  
    /*{
      path:"/.id",
      redirect:(to)=>{
        console.log(to);
        return{path:"/.home"}
      } //都跳转不了欸 No match found for location with path "/home"
    }, 
    */
  
    /*{
      path: '/about',
      redirect: (to)=> {
        return {
          path: '/'
        }
      }
    },*/
  
    // { //这个Home的Hey已经能加载出来了欸 
    //   path: '/', 
    //   name:"home",
    //   component: Home
    // },

    { 
        path: '/FragePage',
        component: FragePage
    },

    
  
  //   { path: '/about', 
  //   component: About },
  
  //   { path: '/OptionA/:id', //路径参数 用冒号 : 表示。当一个路由被匹配时，它的 params 的值将在每个组件中以 this.$route.params 的形式暴露出来。
  //   component: OptionA },
  
    {
      path: "/Ergebnis1", //Ergebnis也成功挂载到了！
      component: Ergebnis1
    },
    {
      path: "/Ergebnis2", //Ergebnis也成功挂载到了！
      component: Ergebnis2
    },
    

    //Set动态路由 因为选项ABCD

    //     path: "/Sweet/:id*", //this is 动态参数啦 d.h 动态路由啦， i dont care what id u r ~
    //     //参数可有可无，但参数不能重复叠加
    //     //path:"/sweet/id?",
    //     component: Sweet
    //   },
    // {
    //   path: "/Step3", //这里要双引号哦
    //   component: Step3
    // },

    {
      path: "/Erklaerung", //这里要双引号哦
      component: Erklaerung
    },
  
    //   {
    //     path: "/Piggie",
    //     alias: ['/Airi','/Kazeo'], //你嘅nickname, two or more就用数组, 直接系导航栏输入path就得啦
    //     component: Piggie //为什么Piggie的子页面跳转不出来？而是home ->重新打Piggie的内容刷新就得啦！
    //   },
    
    //   {
    //     name: "almond", //路由名就叫sweet
    //     path: "/Sweet/:id*", //this is 动态参数啦 d.h 动态路由啦， i dont care what id u r ~
    //     //参数可有可无，但参数不能重复叠加
    //     //path:"/sweet/id?",
    //     component: Sweet
    //   },
    
    //   {
    //     //动态路由 参数一定是数字
    //     path: "/alcohol/:id",
    //     component: Alcohol,
    //     props:true
    //   },
  ]
  
  // 3. 创建路由实例并传递 `routes` 配置
  // 你可以在这里输入更多的配置，但我们在这里
  // 暂时保持简单
  const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。 (Hash有#) 
    //**hash不会向服务器发送请求！ */
    //history: createWebHashHistory(),
  
    //为了漂亮就用History模式，这样路径里就没有#号啦
    history: createWebHistory(),
    routes, // `routes: routes` 的缩写
  })
  
  //This is 全局守卫 （全球守卫）
  router.beforeEach((to, form, next) => {
    console.log(to);
    console.log(form);
    next()//like通行证
  })
  
  
  export default router