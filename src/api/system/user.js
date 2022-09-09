import request from '@/utils/request'
import { encrypt } from '@/utils/rsaEncrypt'

// 登录后获取当前登录用户的用户信息
export function getUserInfo() {
  return request({
    url: '/user/info',
    method: 'get'
  })
}

export function updatePassword(params) {
  const data = {
    oldPassword: encrypt(params.oldPassword),
    newPassword: encrypt(params.newPassword)
  }
  return request({
    url: '/user/pass',
    method: 'post',
    data
  })
}
