import Vue from 'vue'
import App from './App'
import router from './router/routers'
import store from './store'

// element-ui
import Element from 'element-ui'

// Cookies
import Cookies from 'js-cookie'

// 全局CSS
import './assets/styles/index.scss'

import 'element-ui/lib/theme-chalk/index.css'

// 阿里巴巴icon库
import './assets/iconfont/iconfont.css'

// 代码高亮
import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/atom-one-dark.css'

// Lottie支持
import lottie from 'lottie-web'

// 动态路由表
import './router/index'

// 国际化
import i18n from './i18n'

// JSON格式化显示
import JsonViewer from 'vue-json-viewer'

// axios
import axios from 'axios'

Vue.use(VueHighlightJS)
Vue.use(JsonViewer)
// 设置 element-ui 默认大小
Vue.use(Element, {
  size: Cookies.get('size') || 'default'
})

// 将Lottie挂载到Vue上
Vue.prototype.$lottie = lottie
// 挂载axios
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
