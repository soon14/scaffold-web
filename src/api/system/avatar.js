// 删除头像
import request from '@/utils/request'

export function del(ids) {
  return request({
    url: '/avatars',
    method: 'delete',
    data: ids
  })
}

export function editEnabled(id, enabled) {
  return request({
    url: '/avatars',
    method: 'put',
    data: {
      id: id,
      enabled: enabled
    }
  })
}
