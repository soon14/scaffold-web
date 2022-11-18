import request from '@/utils/request'

export function add(data) {
  return request({
    url: '/buildings',
    method: 'post',
    data
  })
}

export function edit(data) {
  return request({
    url: '/buildings',
    method: 'put',
    data
  })
}

export function del(ids) {
  return request({
    url: '/buildings',
    method: 'delete',
    data: ids
  })
}

export function getBuildingNums() {
  return request({
    url: '/buildings/buildingNums',
    method: 'get'
  })
}
