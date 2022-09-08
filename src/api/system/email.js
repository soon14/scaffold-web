import request from '@/utils/request'

export function sendCodeToEmail(data) {
  return request({
    url: '/mail/code',
    method: 'post',
    data
  })
}

export function getSelectList() {
  return request({
    url: '/mail/options',
    method: 'get'
  })
}

export function updateEmail(data) {
  return request({
    url: '/user/email',
    method: 'post',
    data
  })
}
