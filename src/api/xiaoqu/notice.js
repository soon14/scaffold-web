import request from '@/utils/request'

export function add(data) {
  return request({
    url: '/notices',
    method: 'post',
    data
  })
}

export function edit(data) {
  return request({
    url: '/notices',
    method: 'put',
    data
  })
}

export function del(ids) {
  return request({
    url: '/notices',
    method: 'delete',
    data: ids
  })
}

export function getOverdueList() {
  return request({
    url: '/notices/noticeOverdue',
    method: 'get'
  })
}

export function getNoticeScope() {
  return request({
    url: '/notices/noticeScope',
    method: 'get'
  })
}

export function getDistinctUser() {
  return request({
    url: '/notices/distinctUser',
    method: 'get'
  })
}
