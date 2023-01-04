import request from '@/utils/request'

export function add(data) {
  return request({
    url: '/visitors',
    method: 'post',
    data
  })
}

export function edit(data) {
  return request({
    url: '/visitors',
    method: 'put',
    data
  })
}

export function del(ids) {
  return request({
    url: '/visitors',
    method: 'delete',
    data: ids
  })
}
