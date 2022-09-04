import axios from 'axios'
import { MessageBox, Notification } from 'element-ui'
import Global from '@/global'
import { getToken } from '@/utils/auth'
import store from '@/store'
import i18n from '@/i18n'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: Global.timeout
})

// 请求拦截器
service.interceptors.request.use(config => {
  if (getToken()) {
    // 让每个请求携带自定义token 请根据实际情况自行修改
    config.headers['Authorization'] = getToken()
  }
  config.headers['Content-Type'] = 'application/json'
  config.headers['Accept-Language'] = localStorage.getItem('lang') || navigator.language
  return config
}, error => {
  console.log(error)
  Promise.reject(error).then(() => {
  })
})

// 响应拦截器
service.interceptors.response.use(success => {
  // 正常响应
  if (success.status && success.status === 200) {
    // 业务逻辑错误
    if (success.data.code === 1403 || success.data.code === 1400 || success.data.code === 1500 ||
      success.data.code === 1406 || success.data.code === 1502) {
      Notification.error({
        title: success.data.msg,
        message: success.data.data,
        duration: 3000,
        showClose: true
      })
      return Promise.reject('error')
    } else {
      return success.data
    }
  } else {
    Notification.error({
      title: String(i18n.t('error')),
      message: String(i18n.t('serverException')),
      duration: 3000,
      showClose: true
    })
    return Promise.reject('error')
  }
}, error => {
  let code = 0
  try {
    code = error.response.data.status
  } catch (e) {
    if (error.toString().indexOf('Error: timeout') !== -1) {
      Notification.error({
        title: String(i18n.t('error')),
        message: String(i18n.t('networkTimeOut')),
        duration: 3000,
        showClose: true
      })
      return Promise.reject(error)
    }
  }
  if (code) {
    if (code === 401) {
      MessageBox.alert(String(i18n.t('message_401')), String(i18n.t('title_401')), {
        confirmButtonText: String(i18n.t('confirmButtonText_401')),
        type: 'warning',
        roundButton: true,
        lockScroll: true,
        callback: () => {
          store.dispatch('user/LogOut').then(() => {
            location.reload() // 为了重新实例化vue-router对象 避免bug
          })
        }
      }).then(() => {
      })
    }
  } else {
    Notification.error({
      title: String(i18n.t('error')),
      message: String(i18n.t('apiRequestFail')),
      duration: 3000,
      showClose: true
    })
  }
  return Promise.reject(error)
})

export default service

