import request from '@/utils/request'

export function edit(data) {
  return request({
    url: '/feedbacks',
    method: 'put',
    data
  })
}

export function del(ids) {
  return request({
    url: '/feedbacks',
    method: 'delete',
    data: ids
  })
}

export function getFeedbackResult() {
  return request({
    url: '/feedbacks/feedbackResult',
    method: 'get'
  })
}

export function getFeedbackTypes() {
  return request({
    url: '/feedbacks/feedbackTypes',
    method: 'get'
  })
}
