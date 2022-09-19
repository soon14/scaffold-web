import request from '@/utils/request'

export function getLogoAndTitle() {
  return request({
    url: '/settings',
    method: 'get'
  })
}
