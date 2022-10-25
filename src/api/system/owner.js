import request from '@/utils/request'

export function add(data) {
  return request({
    url: '/owners',
    method: 'post',
    data
  })
}

export function edit(data) {
  return request({
    url: '/owners',
    method: 'put',
    data
  })
}

export function del(ids) {
  return request({
    url: '/owners',
    method: 'delete',
    data: ids
  })
}

export function getById(id) {
  return request({
    url: '/owners/owner',
    method: 'post',
    data: { id: id }
  })
}

export function resetPass(id, phone) {
  return request({
    url: '/owners/reset',
    method: 'put',
    data: {
      id: id,
      phone: phone
    }
  })
}
