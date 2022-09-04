import i18n from '@/i18n'

const state = {
  online: [
    {prop: 'username', label: String(i18n.t('tableHeader.online.username')), sortable: false},
    {prop: 'ip', label: String(i18n.t('tableHeader.online.ip')), sortable: false},
    {prop: 'browser', label: String(i18n.t('tableHeader.online.browser')), sortable: false},
    {prop: 'address', label: String(i18n.t('tableHeader.online.address')), sortable: false},
    {prop: 'loginTime', label: String(i18n.t('tableHeader.online.loginTime')), sortable: true}
  ],
  playLogs: {
    logs: [
      {prop: 'username', label: '用户名', sortable: false, width: '100', showOverflowTooltip: false},
      {prop: 'requestIp', label: 'IP', sortable: false, width: '150', showOverflowTooltip: false},
      {prop: 'address', label: 'IP来源', sortable: false, width: '200', showOverflowTooltip: true},
      {prop: 'title', label: '操作', sortable: false, width: '200', showOverflowTooltip: false},
      {prop: 'browser', label: '浏览器', sortable: false, width: '', showOverflowTooltip: false},
      {prop: 'businessType', label: '业务类型', sortable: false, width: '', showOverflowTooltip: false},
      {prop: 'time', label: '操作用时', sortable: true, width: '', showOverflowTooltip: false},
      {prop: 'createTime', label: '操作时间', sortable: true, width: '200', showOverflowTooltip: false}
    ],
    expand: [
      {prop: 'requestMethod', label: '请求类型'},
      {prop: 'requestUrl', label: '请求URL'},
      {prop: 'status', label: '操作状态'},
      {prop: 'method', label: '请求方法'},
      {prop: 'requestParams', label: '请求参数'},
      {prop: 'responseResult', label: '响应结果'}
    ]
  },
  errorLogs: {
    logs: [
      {prop: 'username', label: '用户名', sortable: false, width: '100', showOverflowTooltip: false},
      {prop: 'requestIp', label: 'IP', sortable: false, width: '150', showOverflowTooltip: false},
      {prop: 'address', label: 'IP来源', sortable: false, width: '200', showOverflowTooltip: true},
      {prop: 'title', label: '操作', sortable: false, width: '200', showOverflowTooltip: false},
      {prop: 'logType', label: '日志等级', sortable: false, width: '', showOverflowTooltip: false},
      {prop: 'browser', label: '浏览器', sortable: false, width: '', showOverflowTooltip: false},
      {prop: 'businessType', label: '业务类型', sortable: false, width: '', showOverflowTooltip: false},
      {prop: 'createTime', label: '操作时间', sortable: true, width: '200', showOverflowTooltip: false}
    ],
    expand: [
      {prop: 'requestMethod', label: '请求类型'},
      {prop: 'requestUrl', label: '请求URL'},
      {prop: 'status', label: '操作状态'},
      {prop: 'method', label: '请求方法'},
      {prop: 'requestParams', label: '请求参数'},
      {prop: 'responseResult', label: '响应结果'}
    ]
  }
}

export default {state}
