import request from '@/utils/request'
import { encrypt } from '@/utils/rsaEncrypt'

// 登录后获取当前登录用户的用户信息
export function getUserInfo() {
  return request({
    url: '/users/info',
    method: 'get'
  })
}

export function updatePassword(params) {
  const data = {
    oldPassword: encrypt(params.oldPassword),
    newPassword: encrypt(params.newPassword)
  }
  return request({
    url: '/users/pass',
    method: 'post',
    data
  })
}

// 添加用户
export function add(data) {
  return request({
    url: '/users',
    method: 'post',
    data
  })
}

// 修改用户
export function edit(data) {
  return request({
    url: '/users',
    method: 'put',
    data
  })
}

// 删除用户
export function del(ids) {
  return request({
    url: '/users',
    method: 'delete',
    data: ids
  })
}
