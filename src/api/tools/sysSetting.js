import request from '@/utils/request'

export function getSettings() {
  return request({
    url: '/settings',
    method: 'get'
  })
}

export function save(data) {
  return request({
    url: '/settings',
    method: 'put',
    data
  })
}
