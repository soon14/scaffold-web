import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// element-ui
import Element from 'element-ui'

// Cookies
import Cookies from 'js-cookie'

// 全局CSS
import './assets/style/index.scss'

import 'element-ui/lib/theme-chalk/index.css'

// 阿里巴巴icon库
import './assets/iconfont/iconfont.css'

// 代码高亮
import VueHighlightJS from 'vue-highlightjs'

Vue.use(VueHighlightJS)
Vue.use(Element, {
    size: Cookies.get('size') || 'small'  // 设置 element-ui 默认大小
})

Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
