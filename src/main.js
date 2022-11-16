import Vue from 'vue' // Vue
import App from '@/App'// 入口组件
import router from '@/router/routers' // Vue router
import store from '@/store' // Vuex
import Element from 'element-ui' // element-ui
import Cookies from 'js-cookie' // Cookies
import Permission from '@/components/Permission' // 权限控制
import VueHighlightJS from 'vue-highlightjs' // Vue 语法高亮
import lottie from 'lottie-web' // Lottie支持
import i18n from '@/i18n' // 国际化插件
import JsonViewer from 'vue-json-viewer' // JSON格式化显示
import Time from '@/components/Time' // 相对时间插件 (n天前,n小时前,刚刚)
import ECharts from 'vue-echarts' // ECharts组件
import Scaffolds from '@/components/index' // 全局Scaffold组件
import '@/assets/styles/index.scss' // 全局CSS
import 'element-ui/lib/theme-chalk/index.css' // element-ui CSS
import '@/assets/icons/index' // 阿里巴巴icon库
import 'highlight.js/styles/atom-one-dark.css' // 代码高亮
import '@/router/index' // 动态路由表
import '@/utils/desensitize'// 脱敏过滤器
import 'echarts' // ECharts

Vue.use(Time)
Vue.use(Permission)
Vue.use(JsonViewer)
Vue.use(Scaffolds)
Vue.use(VueHighlightJS)
Vue.use(Element, {
  size: Cookies.get('size') || 'small' // 设置 element-ui 默认大小
})
Vue.prototype.$lottie = lottie // 将Lottie挂载到Vue上
Vue.component('v-charts', ECharts) // 全局组件ECharts
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
