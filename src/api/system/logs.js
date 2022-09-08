import request from '@/utils/request'

// 获取错误日志详细
export function getErrorDetails(id) {
  return request({
    url: '/errorLogs/' + id,
    method: 'get'
  })
}

// 删除所有的操作日志
export function delAllLogs() {
  return request({
    url: '/logs',
    method: 'delete'
  })
}

// 删除所有的错误日志
export function delAllErrorLogs() {
  return request({
    url: '/errorLogs',
    method: 'delete'
  })
}

