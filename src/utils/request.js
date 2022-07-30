import axios from 'axios'
import {Message} from 'element-ui';
import router from "@/router";

//响应拦截器
axios.interceptors.response.use(success => {
    //正常响应
    if (success.status && success.status === 200) {
        //业务逻辑错误
        if (success.data.code === 1403 || success.data.code === 1400 || success.data.code === 1500 ||
            success.data.code === 1406 || success.data.code === 1502) {
            Message.error({message: success.data.msg, showClose: true})
            return;
        }
        if (success.data.code && success.data.data.type !== "verifyCode") {
            Message.success({message: success.data.msg, showClose: true})
        }
    }
    return success.data;
}, error => {
    if (error.response.code === 504 || error.response.code === 404) {
        Message.error({message: '服务器故障！', showClose: true})
    } else if (error.response.code === 403) {
        Message.error({message: '权限不足，请联系管理员！', showClose: true})
    } else if (error.response.code === 401) {
        Message.error({message: '尚未登录，请登录！', showClose: true})
        router.replace('/').then(r => {
        });
    } else {
        if (error.response.data.message) {
            Message.error({message: error.response.data.message, showClose: true})
        } else {
            Message.error({message: '未知错误！', showClose: true})
        }
    }
    return;
});

let base = process.env.VUE_APP_BASE_API;

//封装GET请求
export const getRequest = (url, params) => {
    return axios({
        method: 'get',
        url: `${base}${url}`,
        data: params
    })
}

//封装POST请求
export const postRequest = (url, params) => {
    return axios({
        method: 'post',
        url: `${base}${url}`,
        data: params
    })
}
