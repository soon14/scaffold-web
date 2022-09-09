import request from '@/utils/request'

// 登录函数
export function login(username, password, code, uuid) {
  return request({
    url: '/auth/login',
    method: 'post',
    data: {
      username,
      password,
      code,
      uuid
    }
  })
}

// 获取验证码
export function getCodeImg() {
  return request({
    url: '/auth/verifyCode',
    method: 'get'
  })
}

// 注销登录
export function logout() {
  return request({
    url: '/logout',
    method: 'delete'
  })
}
