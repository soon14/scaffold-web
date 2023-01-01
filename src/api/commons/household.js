import request from '@/utils/request'

export function add(data) {
  return request({
    url: '/households',
    method: 'post',
    data
  })
}

export function edit(data) {
  return request({
    url: '/households',
    method: 'put',
    data
  })
}

export function del(ids) {
  return request({
    url: '/households',
    method: 'delete',
    data: ids
  })
}
