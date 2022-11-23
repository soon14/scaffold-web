import request from '@/utils/request'

export function getTypeList() {
  return request({
    url: '/elevator-types/select',
    method: 'get'
  })
}
