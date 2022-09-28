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
    { prop: 'username', label: String(i18n.t('tableHeader.user.username')), sortable: false, width: '100', fixed: 'left' },
    { prop: 'avatar.path', label: String(i18n.t('tableHeader.user.avatarPath')), sortable: false, width: '' },
    { prop: 'sex', label: String(i18n.t('tableHeader.user.sex')), sortable: false, width: '' },
    { prop: 'email', label: String(i18n.t('tableHeader.user.email')), sortable: false, width: '200' },
    { prop: 'phone', label: String(i18n.t('tableHeader.user.phone')), sortable: false, width: '150' },
    { prop: 'enabled', label: String(i18n.t('tableHeader.user.enabled')), sortable: false, width: '' },
    { prop: 'updateTime', label: String(i18n.t('tableHeader.user.updateTime')), sortable: true, width: '200' },
    { prop: 'createTime', label: String(i18n.t('tableHeader.user.createTime')), sortable: true, width: '200' }
  ],
  avatars: [
    { prop: 'username', label: String(i18n.t('tableHeader.avatar.username')), showOverflowTooltip: false, sortable: false, width: '150', fixed: 'left' },
    { prop: 'path', label: String(i18n.t('tableHeader.avatar.path')), showOverflowTooltip: false, sortable: false, width: '150' },
    { prop: 'realName', label: String(i18n.t('tableHeader.avatar.realName')), showOverflowTooltip: true, sortable: false, width: '' },
    { prop: 'size', label: String(i18n.t('tableHeader.avatar.size')), showOverflowTooltip: false, sortable: false, width: '150' },
    { prop: 'enabled', label: String(i18n.t('tableHeader.avatar.enabled')), showOverflowTooltip: false, sortable: false, width: '150' },
    { prop: 'updateTime', label: String(i18n.t('tableHeader.avatar.updateTime')), showOverflowTooltip: false, sortable: true, width: '200' },
    { prop: 'createTime', label: String(i18n.t('tableHeader.avatar.createTime')), showOverflowTooltip: false, sortable: true, width: '200' }
  ],
  roles: [
    { prop: 'name', label: String(i18n.t('tableHeader.role.name')), sortable: false, width: '100', fixed: 'left' },
    { prop: 'nameZhCn', label: 'zh-CN', sortable: false, width: '100' },
    { prop: 'nameZhHk', label: 'zh-HK', sortable: false, width: '100' },
    { prop: 'nameZhTw', label: 'zh-TW', sortable: false, width: '100' },
    { prop: 'nameEnUs', label: 'en-US', sortable: false, width: '100' },
    { prop: 'permission', label: String(i18n.t('tableHeader.role.permission')), sortable: false, width: '100' },
    { prop: 'level', label: String(i18n.t('tableHeader.role.level')), sortable: true, width: '100' },
    { prop: 'updateTime', label: String(i18n.t('tableHeader.role.updateTime')), sortable: true, width: '200' },
    { prop: 'createTime', label: String(i18n.t('tableHeader.role.createTime')), sortable: true, width: '200' }
  ]
}

export default { state }
