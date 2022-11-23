import request from '@/utils/request'

export function add(data) {
  return request({
    url: '/elevators',
    method: 'post',
    data
  })
}

export function edit(data) {
  return request({
    url: '/elevators',
    method: 'put',
    data
  })
}

export function del(ids) {
  return request({
    url: '/elevators',
    method: 'delete',
    data: ids
  })
}

export function maintain(data) {
  return request({
    url: '/elevators/maintain',
    method: 'put',
    data
  })
}
