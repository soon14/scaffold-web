import request from '@/utils/request'

export function del(ids) {
  return request({
    url: '/localStorage',
    method: 'delete',
    data: ids
  })
}

export function downloadOne(id) {
  return request({
    url: '/localStorage/download/' + id,
    method: 'get',
    responseType: 'blob'
  })
}

export function edit(data) {
  return request({
    url: '/localStorage',
    method: 'put',
    data
  })
}
