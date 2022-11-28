import request from '@/utils/request'

export function add(data) {
  return request({
    url: '/park-lots',
    method: 'post',
    data
  })
}

export function edit(data) {
  return request({
    url: '/park-lots',
    method: 'put',
    data
  })
}

export function del(ids) {
  return request({
    url: '/park-lots',
    method: 'delete',
    data: ids
  })
}
