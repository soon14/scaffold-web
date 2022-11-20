import request from '@/utils/request'

export function edit(data) {
  return request({
    url: '/feedbacks',
    method: 'put',
    data
  })
}

export function del(ids) {
  return request({
    url: '/feedbacks',
    method: 'delete',
    data: ids
  })
}
