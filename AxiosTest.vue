<script>
//ChatGPT vue setup 中如何用axios获取数据
import { reactive, onMounted } from 'vue'
import axios from 'axios'

export default {
  setup() {
    const state = reactive({
      data: []
    })

    onMounted(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          state.data = response.data
        })
    })

    return {
      state
    }
  }
}
//我们首先通过 reactive() 函数创建了一个响应式对象 state，其中包含了一个空数组 data。
//接着，在 onMounted() 钩子函数中使用 axios.get() 方法发起了一个 GET 请求，并将获取到的数据存储到了 state.data 中。
//最后，我们将 state 对象返回给组件，以便在模板中渲染数据。
</script>