import request from '@/utils/request'

export function del(ids) {
  return request({
    url: '/pictures',
    method: 'delete',
    data: ids
  })
}
