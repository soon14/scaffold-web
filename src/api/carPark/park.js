import request from '@/utils/request'

export function add(data) {
  return request({
    url: '/parks',
    method: 'post',
    data
  })
}

export function edit(data) {
  return request({
    url: '/parks',
    method: 'put',
    data
  })
}

export function del(ids) {
  return request({
    url: '/parks',
    method: 'delete',
    data: ids
  })
}
