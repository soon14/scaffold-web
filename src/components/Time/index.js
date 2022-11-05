import Time from '@/components/Time/time'
import Vue from 'vue'

const install = function (Vue) {
  Vue.directive('time', Time)
}

if (window.Vue) {
  window['time'] = Time
  Vue.use(install)
}

Time.install = install
export default Time
