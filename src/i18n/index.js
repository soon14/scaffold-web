import Vue from 'vue'
import VueI18n from 'vue-i18n'
import ElementLocale from 'element-ui/lib/locale'

Vue.use(VueI18n)

const langFiles = require.context('./config', false, /\.js$/)
// 正则用于匹配 ./zh-CN.js中的'zh-CN'
const regExp = /\.\/([^\.\/]+)\.([^\.]+)$/
// 声明一个数据模型，对应i18n中的message属性
const messages = {}
// 遍历资源JS文件，将其放入messages对象中
langFiles.keys().forEach(key => {
  // 正则匹配zh-CN这样的值
  const prop = regExp.exec(key)[1]
  // messages[prop]相当于 messages['zh-CN'] = {...}
  messages[prop] = langFiles(key).default
})

const locale = localStorage.getItem('lang') || navigator.language

const i18n = new VueI18n({
  locale,
  messages
})

ElementLocale.i18n((key, value) => i18n.t(key, value))

export default i18n

