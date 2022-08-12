import axios from 'axios'
import {Message, Notification, MessageBox} from 'element-ui';
import Global from "@/global";
import {getToken} from "@/utils/auth";
import store from "@/store";

//创建axios实例
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: Global.timeout
});

//请求拦截器
service.interceptors.request.use(config => {
    if (getToken()) {
        // 让每个请求携带自定义token 请根据实际情况自行修改
        config.headers['Authorization'] = getToken()
    }
    config.headers['Content-Type'] = 'application/json'
    return config
}, error => {
    console.log(error)
    Promise.reject(error).then(r => {
    })
});

//响应拦截器
service.interceptors.response.use(success => {
    //正常响应
    if (success.status && success.status === 200) {
        //业务逻辑错误
        if (success.data.code === 1403 || success.data.code === 1400 || success.data.code === 1500 ||
            success.data.code === 1406 || success.data.code === 1502) {
            Notification.error({
                title: success.data.msg,
                message: success.data.data,
                duration: 3000,
                showClose: true
            })
            return Promise.reject('error');
        } else {
            return success.data;
        }
    } else {
        Notification.error({
            title: '错误',
            message: '服务器异常',
            duration: 3000,
            showClose: true
        })
        return Promise.reject('error');
    }
}, error => {
    let code = 0;
    try {
        code = error.response.data.status
    } catch (e) {
        if (error.toString().indexOf('Error: timeout') !== -1) {
            Notification.error({
                title: '错误',
                message: '网络请求超时',
                duration: 3000,
                showClose: true
            })
            return Promise.reject(error)
        }
    }
    if (code) {
        if (code === 401) {
            MessageBox.confirm(
                '登录状态已过期，您可以继续留在该页面，或者重新登录',
                '系统提示',
                {
                    confirmButtonText: '重新登录',
                    cancelButtonText: '取消',
                    type: 'warning'
                }
            ).then(() => {
                store.dispatch('user/LogOut').then(() => {
                  location.reload() // 为了重新实例化vue-router对象 避免bug
                })
            })
        }
    } else {
        Notification.error({
            title: '错误',
            message: '接口请求失败',
            duration: 3000,
            showClose: true
        })
    }
    return Promise.reject(error)
});

export default service

