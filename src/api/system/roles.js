import request from '@/utils/request'

export function getRoles() {
  return request({
    url: '/roles/select',
    method: 'get'
  })
}

export function getLevelScope() {
  return request({
    url: '/roles/levelScope',
    method: 'get'
  })
}

export function getRoleById(id) {
  return request({
    url: '/roles/' + id,
    method: 'get'
  })
}

export function edit(data) {
  return request({
    url: '/roles',
    method: 'put',
    data
  })
}

export function del(ids) {
  return request({
    url: '/roles',
    method: 'delete',
    data: ids
  })
}

export function editMenu(data) {
  return request({
    url: '/roles/menus',
    method: 'put',
    data
  })
}

export function add(data) {
  return request({
    url: '/roles',
    method: 'post',
    data
  })
}
