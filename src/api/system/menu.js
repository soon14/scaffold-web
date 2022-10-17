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

export function add(data) {
  return request({
    url: '/menus',
    method: 'post',
    data
  })
}

export function edit(data) {
  return request({
    url: '/menus',
    method: 'put',
    data
  })
}

export function del(ids) {
  return request({
    url: '/menus',
    method: 'delete',
    data: ids
  })
}
