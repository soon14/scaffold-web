import request from '@/utils/request'

export function add(data) {
  return request({
    url: '/notices',
    method: 'post',
    data
  })
}

export function edit(data) {
  return request({
    url: '/notices',
    method: 'put',
    data
  })
}

export function del(ids) {
  return request({
    url: '/notices',
    method: 'delete',
    data: ids
  })
}
