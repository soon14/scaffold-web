import i18n from '@/i18n'

const state = {
  online: [
    { prop: 'username', label: String(i18n.t('tableHeader.online.username')), sortable: false, slot: true },
    { prop: 'ip', label: String(i18n.t('tableHeader.online.ip')), sortable: false },
    { prop: 'browser', label: String(i18n.t('tableHeader.online.browser')), sortable: false, slot: true },
    { prop: 'address', label: String(i18n.t('tableHeader.online.address')), sortable: false },
    { prop: 'loginTime', label: String(i18n.t('tableHeader.online.loginTime')), sortable: true }
  ],
  playLogs: {
    logs: [
      { prop: 'username', label: String(i18n.t('tableHeader.playLogs.logs.username')), width: '100', slot: true },
      { prop: 'requestIp', label: String(i18n.t('tableHeader.playLogs.logs.requestIp')), width: '150' },
      { prop: 'address', label: String(i18n.t('tableHeader.playLogs.logs.address')), width: '200', showOverflowTooltip: true },
      { prop: 'title', label: String(i18n.t('tableHeader.playLogs.logs.title')), width: '200' },
      { prop: 'browser', label: String(i18n.t('tableHeader.playLogs.logs.browser')) },
      { prop: 'businessType', label: String(i18n.t('tableHeader.playLogs.logs.businessType')), slot: true },
      { prop: 'time', label: String(i18n.t('tableHeader.playLogs.logs.time')), sortable: true, width: '150', slot: true },
      { prop: 'createTime', label: String(i18n.t('tableHeader.playLogs.logs.createTime')), sortable: true, width: '200' }
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
      { prop: 'username', label: String(i18n.t('tableHeader.errorLogs.logs.username')), width: '100', slot: true },
      { prop: 'requestIp', label: String(i18n.t('tableHeader.errorLogs.logs.requestIp')), width: '150' },
      { prop: 'address', label: String(i18n.t('tableHeader.errorLogs.logs.address')), width: '200', showOverflowTooltip: true },
      { prop: 'title', label: String(i18n.t('tableHeader.errorLogs.logs.title')), width: '200' },
      { prop: 'logType', label: String(i18n.t('tableHeader.errorLogs.logs.logType')), slot: true },
      { prop: 'browser', label: String(i18n.t('tableHeader.errorLogs.logs.browser')) },
      { prop: 'businessType', label: String(i18n.t('tableHeader.errorLogs.logs.businessType')), slot: true },
      { prop: 'createTime', label: String(i18n.t('tableHeader.errorLogs.logs.createTime')), sortable: true, width: '200' }
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
      { prop: 'title', label: String(i18n.t('tableHeader.center.playLogs.title')), width: '200' },
      { prop: 'requestIp', label: String(i18n.t('tableHeader.center.playLogs.requestIp')), width: '150' },
      { prop: 'browser', label: String(i18n.t('tableHeader.center.playLogs.browser')) },
      { prop: 'address', label: String(i18n.t('tableHeader.center.playLogs.address')), showOverflowTooltip: true },
      { prop: 'time', label: String(i18n.t('tableHeader.center.playLogs.time')), sortable: true, width: '100', slot: true },
      { prop: 'createTime', label: String(i18n.t('tableHeader.center.playLogs.createTime')), sortable: true, width: '200' }
    ],
    errorLogs: [
      { prop: 'title', label: String(i18n.t('tableHeader.center.errorLogs.title')), width: '200' },
      { prop: 'requestIp', label: String(i18n.t('tableHeader.center.errorLogs.requestIp')), width: '150' },
      { prop: 'browser', label: String(i18n.t('tableHeader.center.errorLogs.browser')) },
      { prop: 'address', label: String(i18n.t('tableHeader.center.errorLogs.address')), showOverflowTooltip: true },
      { prop: 'createTime', label: String(i18n.t('tableHeader.center.errorLogs.createTime')), sortable: true, width: '200' }
    ]
  },
  users: [
    { prop: 'username', label: String(i18n.t('tableHeader.user.username')), width: '100', fixed: 'left', slot: true },
    { prop: 'avatar.path', label: String(i18n.t('tableHeader.user.avatarPath')), slot: true },
    { prop: 'sex', label: String(i18n.t('tableHeader.user.sex')) },
    { prop: 'email', label: String(i18n.t('tableHeader.user.email')), width: '200', slot: true },
    { prop: 'phone', label: String(i18n.t('tableHeader.user.phone')), width: '150', slot: true },
    { prop: 'enabled', label: String(i18n.t('tableHeader.user.enabled')), slot: true },
    { prop: 'updateTime', label: String(i18n.t('tableHeader.user.updateTime')), sortable: true, width: '200', slot: true },
    { prop: 'createTime', label: String(i18n.t('tableHeader.user.createTime')), sortable: true, width: '200' }
  ],
  avatars: [
    { prop: 'username', label: String(i18n.t('tableHeader.avatar.username')), width: '150', fixed: 'left', slot: true },
    { prop: 'path', label: String(i18n.t('tableHeader.avatar.path')), width: '150', slot: true },
    { prop: 'realName', label: String(i18n.t('tableHeader.avatar.realName')), showOverflowTooltip: true },
    { prop: 'size', label: String(i18n.t('tableHeader.avatar.size')), width: '150' },
    { prop: 'enabled', label: String(i18n.t('tableHeader.avatar.enabled')), width: '150', slot: true },
    { prop: 'updateTime', label: String(i18n.t('tableHeader.avatar.updateTime')), sortable: true, width: '200' },
    { prop: 'createTime', label: String(i18n.t('tableHeader.avatar.createTime')), sortable: true, width: '200' }
  ],
  roles: [
    { prop: 'name', label: String(i18n.t('tableHeader.role.name')), width: '100', fixed: 'left' },
    { prop: 'nameZhCn', label: 'zh-CN', width: '100' },
    { prop: 'nameZhHk', label: 'zh-HK', width: '100' },
    { prop: 'nameZhTw', label: 'zh-TW', width: '100' },
    { prop: 'nameEnUs', label: 'en-US', width: '100' },
    { prop: 'permission', label: String(i18n.t('tableHeader.role.permission')), width: '100' },
    { prop: 'level', label: String(i18n.t('tableHeader.role.level')), sortable: true, width: '100' },
    { prop: 'updateTime', label: String(i18n.t('tableHeader.role.updateTime')), sortable: true, width: '200', slot: true },
    { prop: 'createTime', label: String(i18n.t('tableHeader.role.createTime')), sortable: true, width: '200' }
  ],
  menus: [
    { prop: 'name', label: String(i18n.t('tableHeader.menu.name')), width: '200', showOverflowTooltip: true, fixed: 'left', align: 'left' },
    { prop: 'iconCls', label: String(i18n.t('tableHeader.menu.iconCls')), width: '100', slot: true },
    { prop: 'sort', label: String(i18n.t('tableHeader.menu.sort')), sortable: true, width: '100', slot: true },
    { prop: 'componentName', label: String(i18n.t('tableHeader.menu.componentName')), width: '150', showOverflowTooltip: true },
    { prop: 'url', label: String(i18n.t('tableHeader.menu.url')), showOverflowTooltip: true },
    { prop: 'permission', label: String(i18n.t('tableHeader.menu.permission')), width: '200' },
    { prop: 'hidden', label: String(i18n.t('tableHeader.menu.hidden')), slot: true },
    { prop: 'enabled', label: String(i18n.t('tableHeader.menu.enabled')), slot: true },
    { prop: 'type', label: String(i18n.t('tableHeader.menu.type')), width: '100', slot: true },
    { prop: 'createTime', label: String(i18n.t('tableHeader.menu.createTime')), sortable: true, width: '200' }
  ],
  ownerInfo: [
    { prop: 'name', label: String(i18n.t('tableHeader.owner.name')), fixed: 'left', width: '150' },
    { prop: 'sex', label: String(i18n.t('tableHeader.owner.sex')) },
    { prop: 'phone', label: String(i18n.t('tableHeader.owner.phone')), width: '150', slot: true },
    { prop: 'identityId', label: String(i18n.t('tableHeader.owner.identityId')), width: '250' },
    { prop: 'email', label: String(i18n.t('tableHeader.owner.email')), width: '200', slot: true },
    { prop: 'createTime', label: String(i18n.t('tableHeader.owner.createTime')), width: '200', sortable: true },
    { prop: 'updateTime', label: String(i18n.t('tableHeader.owner.updateTime')), width: '200', sortable: true }
  ],
  localStorage: [
    { prop: 'serverUrl', label: String(i18n.t('tableHeader.localStorage.serverUrl')), fixed: 'left', width: '150', slot: true },
    { prop: 'fileName', label: String(i18n.t('tableHeader.localStorage.fileName')), showOverflowTooltip: true },
    { prop: 'suffix', label: String(i18n.t('tableHeader.localStorage.suffix')), slot: true },
    { prop: 'type', label: String(i18n.t('tableHeader.localStorage.type')), slot: true },
    { prop: 'size', label: String(i18n.t('tableHeader.localStorage.size')), slot: true },
    { prop: 'createTime', label: String(i18n.t('tableHeader.localStorage.creteTime')), width: '200', sortable: true }
  ]
}

export default { state }
