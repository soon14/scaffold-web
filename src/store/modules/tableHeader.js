import i18n from '@/i18n'

const state = {
  online: [
    { prop: 'username', label: String(i18n.t('tableHeader.online.username')), sortable: false },
    { prop: 'ip', label: String(i18n.t('tableHeader.online.ip')), sortable: false },
    { prop: 'browser', label: String(i18n.t('tableHeader.online.browser')), sortable: false },
    { prop: 'address', label: String(i18n.t('tableHeader.online.address')), sortable: false },
    { prop: 'loginTime', label: String(i18n.t('tableHeader.online.loginTime')), sortable: true }
  ],
  playLogs: {
    logs: [
      { prop: 'username', label: String(i18n.t('tableHeader.playLogs.logs.username')), sortable: false, width: '100', showOverflowTooltip: false },
      { prop: 'requestIp', label: String(i18n.t('tableHeader.playLogs.logs.requestIp')), sortable: false, width: '150', showOverflowTooltip: false },
      { prop: 'address', label: String(i18n.t('tableHeader.playLogs.logs.address')), sortable: false, width: '200', showOverflowTooltip: true },
      { prop: 'title', label: String(i18n.t('tableHeader.playLogs.logs.title')), sortable: false, width: '200', showOverflowTooltip: false },
      { prop: 'browser', label: String(i18n.t('tableHeader.playLogs.logs.browser')), sortable: false, width: '', showOverflowTooltip: false },
      { prop: 'businessType', label: String(i18n.t('tableHeader.playLogs.logs.businessType')), sortable: false, width: '', showOverflowTooltip: false },
      { prop: 'time', label: String(i18n.t('tableHeader.playLogs.logs.time')), sortable: true, width: '150', showOverflowTooltip: false },
      { prop: 'createTime', label: String(i18n.t('tableHeader.playLogs.logs.createTime')), sortable: true, width: '200', showOverflowTooltip: false }
    ],
    expand: [
      { prop: 'requestMethod', label: String(i18n.t('tableHeader.playLogs.expand.requestMethod')) },
      { prop: 'requestUrl', label: String(i18n.t('tableHeader.playLogs.expand.requestUrl')) },
      { prop: 'status', label: String(i18n.t('tableHeader.playLogs.expand.status')) },
      { prop: 'method', label: String(i18n.t('tableHeader.playLogs.expand.method')) },
      { prop: 'requestParams', label: String(i18n.t('tableHeader.playLogs.expand.requestParams')) },
      { prop: 'responseResult', label: String(i18n.t('tableHeader.playLogs.expand.responseResult')) }
    ]
  },
  errorLogs: {
    logs: [
      { prop: 'username', label: String(i18n.t('tableHeader.errorLogs.logs.username')), sortable: false, width: '100', showOverflowTooltip: false },
      { prop: 'requestIp', label: String(i18n.t('tableHeader.errorLogs.logs.requestIp')), sortable: false, width: '150', showOverflowTooltip: false },
      { prop: 'address', label: String(i18n.t('tableHeader.errorLogs.logs.address')), sortable: false, width: '200', showOverflowTooltip: true },
      { prop: 'title', label: String(i18n.t('tableHeader.errorLogs.logs.title')), sortable: false, width: '200', showOverflowTooltip: false },
      { prop: 'logType', label: String(i18n.t('tableHeader.errorLogs.logs.logType')), sortable: false, width: '', showOverflowTooltip: false },
      { prop: 'browser', label: String(i18n.t('tableHeader.errorLogs.logs.browser')), sortable: false, width: '', showOverflowTooltip: false },
      { prop: 'businessType', label: String(i18n.t('tableHeader.errorLogs.logs.businessType')), sortable: false, width: '', showOverflowTooltip: false },
      { prop: 'createTime', label: String(i18n.t('tableHeader.errorLogs.logs.createTime')), sortable: true, width: '200', showOverflowTooltip: false }
    ],
    expand: [
      { prop: 'requestMethod', label: String(i18n.t('tableHeader.errorLogs.expand.requestMethod')) },
      { prop: 'requestUrl', label: String(i18n.t('tableHeader.errorLogs.expand.requestUrl')) },
      { prop: 'status', label: String(i18n.t('tableHeader.errorLogs.expand.status')) },
      { prop: 'method', label: String(i18n.t('tableHeader.errorLogs.expand.method')) },
      { prop: 'requestParams', label: String(i18n.t('tableHeader.errorLogs.expand.requestParams')) },
      { prop: 'responseResult', label: String(i18n.t('tableHeader.errorLogs.expand.responseResult')) }
    ]
  },
  center: {
    playLogs: [
      { prop: 'title', label: String(i18n.t('tableHeader.center.playLogs.title')), sortable: false, width: '200', showOverflowTooltip: false },
      { prop: 'requestIp', label: String(i18n.t('tableHeader.center.playLogs.requestIp')), sortable: false, width: '150', showOverflowTooltip: false },
      { prop: 'browser', label: String(i18n.t('tableHeader.center.playLogs.browser')), sortable: false, width: '', showOverflowTooltip: false },
      { prop: 'address', label: String(i18n.t('tableHeader.center.playLogs.address')), sortable: false, width: '', showOverflowTooltip: true },
      { prop: 'time', label: String(i18n.t('tableHeader.center.playLogs.time')), sortable: true, width: '100', showOverflowTooltip: false },
      { prop: 'createTime', label: String(i18n.t('tableHeader.center.playLogs.createTime')), sortable: true, width: '200', showOverflowTooltip: false }
    ],
    errorLogs: [
      { prop: 'title', label: String(i18n.t('tableHeader.center.errorLogs.title')), sortable: false, width: '200', showOverflowTooltip: false },
      { prop: 'requestIp', label: String(i18n.t('tableHeader.center.errorLogs.requestIp')), sortable: false, width: '150', showOverflowTooltip: false },
      { prop: 'browser', label: String(i18n.t('tableHeader.center.errorLogs.browser')), sortable: false, width: '', showOverflowTooltip: false },
      { prop: 'address', label: String(i18n.t('tableHeader.center.errorLogs.address')), sortable: false, width: '', showOverflowTooltip: true },
      { prop: 'createTime', label: String(i18n.t('tableHeader.center.errorLogs.createTime')), sortable: true, width: '200', showOverflowTooltip: false }
    ]
  },
  users: [
    { prop: 'username', label: '用户名', sortable: false, width: '' },
    { prop: 'avatar.path', label: '头像', sortable: false, width: '' },
    { prop: 'sex', label: '性别', sortable: false, width: '' },
    { prop: 'email', label: '邮箱', sortable: false, width: '200' },
    { prop: 'phone', label: '电话', sortable: false, width: '' },
    { prop: 'enabled', label: '状态', sortable: false, width: '' },
    { prop: 'createTime', label: '注册时间', sortable: true, width: '200' }
  ]
}

export default { state }
