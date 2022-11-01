import request from '@/utils/request'

export function del(keys) {
  return request({
    url: '/online',
    method: 'delete',
    data: keys
  })
}
