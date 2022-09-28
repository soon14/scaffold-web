import request from '@/utils/request'

export function buildMenus() {
  return request({
    url: '/menus/build',
    method: 'get'
  })
}

export function getMenusTree() {
  return request({
    url: '/menus/tree',
    method: 'get'
  })
}
