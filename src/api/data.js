import qs from 'qs'
import request from '@/utils/request'

// 用于CRUD初始化数据
function initData(url, params) {
  return request({
    url: url + '?' + qs.stringify(params, { indices: false }),
    method: 'get'
  })
}

// CRUD中进行下载
function download(url, params) {
  return request({
    url: url + '?' + qs.stringify(params, { indices: false }),
    method: 'get',
    responseType: 'blob'
  })
}

export { initData, download }
