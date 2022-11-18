import zhCNLocale from 'element-ui/lib/locale/lang/zh-CN'

export default {
  ...zhCNLocale,
  global: {
    title: 'Scaffold - 管理系统',
    login: '登录',
    caseNumber: '粤ICP备XXXXXXXX号'
  },
  login: {
    title: 'Scaffold - 智慧物业管理系统',
    welcome: 'Scaffold - 欢迎登录',
    placeholderUsername: '请输入用户名',
    placeholderPassword: '请输入密码',
    placeholderCode: '点击图片更换验证码',
    rememberMe: '记住我',
    loginButton: '登录',
    loginLoading: '登录中...',
    rules: {
      usernameMessage: '用户名不能为空',
      passwordMessage: '密码不能为空',
      codeMessage: '验证码不能为空'
    },
    errorMessage: '输入的信息有误！'
  },
  dashboard: {
    title: '首页'
  },
  center: {
    title: '个人中心'
  },
  navbar: {
    codeAddress: '源码地址',
    screenFull: '全屏缩放',
    i18nSelect: '语言切换',
    sizeSelect: '布局设置',
    systemLayoutSettings: '系统布局设置',
    personalCenter: '个人中心',
    logout: '退出登录'
  },
  settings: {
    systemLayoutSettings: '系统布局设置',
    themeColor: '主题颜色',
    isShowLabels: '显示标签',
    isFixedHead: '固定头部',
    isShowLogo: '显示LOGO',
    isShowOnceMenu: '菜单手风琴模式',
    showFooter: '是否开启页脚'
  },
  code: {
    frontCode: '前端源码',
    backCode: '后端源码'
  },
  logout: {
    message: '确定注销并退出系统吗？'
  },
  tagsView: {
    refresh: '刷新',
    close: '关闭',
    closeOther: '关闭其他',
    closeAll: '关闭全部'
  },
  headerSearch: '查询',
  no: '暂无',
  nodata: '暂无数据',
  error: '错误',
  serverException: '服务器异常',
  networkTimeOut: '网络请求超时',
  apiRequestFail: '接口请求失败',
  message_401: '登录状态已过期，您可以继续留在该页面，或者重新登录',
  title_401: '系统提示',
  confirmButtonText_401: '重新登录',
  confirmTips: '提示',
  ok: '确定',
  cancel: '取消',
  systemMonitor: {
    systemInfo: {
      title: '系统信息',
      os: '操作系统',
      jdk: 'Java版本',
      runTime: '程序启动时间',
      timeNow: '系统当前时间'
    },
    cpu: {
      title: 'CPU',
      cpuInfo: 'CPU信息',
      cpuUseRate: 'CPU使用率'
    },
    ram: {
      title: '内存',
      ramTotal: '内存总量',
      ramUsed: '已用内存',
      ramUsedRate: '内存使用率'
    },
    disk: {
      title: '磁盘',
      diskTotal: '磁盘总量',
      diskUsed: '已用磁盘',
      diskUsedRate: '磁盘使用率'
    },
    jvm: {
      heapTitle: 'JVM堆内存',
      nonHeapTitle: 'JVM非堆内存',
      heapInit: '初始大小',
      heapMax: '最大可用',
      heapUsed: '已使用',
      heapCommitted: '已申请',
      noInfo: '暂无信息'
    }
  },
  realTimeLog: {
    title: '后台实时日志',
    tips: '1秒刷新一次',
    closeText: '清屏',
    scrollBottom: '滚动至底部',
    openAutoScroll: '开启自动滚动',
    closeAutoScroll: '关闭自动滚动'
  },
  crud: {
    js: {
      state: {
        add: '新增',
        edit: '编辑'
      },
      submit: '提交成功',
      add: '新增成功',
      edit: '编辑成功',
      del: '删除成功'
    },
    buttonOperation: {
      add: '新增',
      edit: '编辑',
      del: '删除',
      download: '导出',
      chooseAll: '全选',
      tip1: '确认删除选中的',
      tip2: '条数据?',
      tip3: '请至少选择一列'
    },
    searchResetOperation: {
      search: '搜索',
      reset: '重置'
    },
    searchDatePickerOperation: {
      placeholder: '请输入你要搜索的内容',
      startTime: '开始日期',
      endTime: '结束日期'
    },
    updateDeleteOperation: {
      msg: '确定删除本条数据吗?'
    }
  },
  onlinePage: {
    title: '在线用户',
    blurry: '模糊搜索',
    forcedOut: '强退',
    forcedOutSuccess: '强退成功!',
    tips: '确定强制退出该用户吗?',
    operation: '操作',
    title1: '确认强退选中的',
    title2: '个用户吗?'
  },
  playLogsPage: {
    title: '操作日志',
    none: '无',
    delTitle: '确认清空所有操作日志吗?',
    empty: '清空'
  },
  tableHeader: {
    online: {
      username: '用户名',
      ip: '登录IP',
      browser: '浏览器',
      address: '登录地点',
      loginTime: '登录时间'
    },
    playLogs: {
      logs: {
        username: '用户名',
        requestIp: 'IP',
        address: 'IP来源',
        title: '操作',
        browser: '浏览器',
        businessType: '业务类型',
        time: '操作耗时',
        createTime: '操作时间'
      },
      expand: {
        requestMethod: '请求类型',
        requestUrl: '请求URL',
        status: '操作状态',
        method: '请求方法',
        requestParams: '请求参数',
        responseResult: '响应结果'
      }
    },
    errorLogs: {
      logs: {
        username: '用户名',
        requestIp: 'IP',
        address: 'IP来源',
        title: '操作',
        logType: '日志等级',
        browser: '浏览器',
        businessType: '业务类型',
        createTime: '操作时间'
      },
      expand: {
        requestMethod: '请求类型',
        requestUrl: '请求URL',
        status: '操作状态',
        method: '请求方法',
        requestParams: '请求参数',
        responseResult: '响应结果'
      }
    },
    center: {
      playLogs: {
        title: '操作',
        requestIp: 'IP',
        browser: '浏览器',
        address: 'IP所在地',
        time: '耗时',
        createTime: '操作时间'
      },
      errorLogs: {
        title: '操作',
        requestIp: 'IP',
        browser: '浏览器',
        address: 'IP所在地',
        createTime: '操作时间'
      }
    },
    user: {
      username: '用户名',
      avatarPath: '头像',
      sex: '性别',
      email: '邮箱',
      phone: '电话',
      enabled: '状态',
      updateTime: '修改时间',
      createTime: '注册时间'
    },
    avatar: {
      username: '用户名',
      path: '头像',
      realName: '文件名',
      size: '文件大小',
      enabled: '是否已审核',
      updateTime: '修改时间',
      createTime: '创建时间'
    },
    role: {
      name: '角色',
      permission: '角色权限',
      level: '角色等级',
      updateTime: '修改时间',
      createTime: '创建时间'
    },
    menu: {
      name: '菜单名称',
      iconCls: '图标',
      sort: '排序',
      componentName: '组件名',
      url: '路径',
      permission: '权限',
      hidden: '可见',
      enabled: '状态',
      type: '菜单类型',
      createTime: '创建时间'
    },
    owner: {
      name: '业主姓名',
      sex: '性别',
      phone: '手机',
      identityId: '身份证',
      email: '邮箱',
      createTime: '创建时间',
      updateTime: '修改时间'
    },
    localStorage: {
      serverUrl: '预览图',
      fileName: '文件名',
      suffix: '文件后缀',
      type: '文件类型',
      size: '文件大小',
      creteTime: '上传时间'
    },
    feedback: {
      ownerName: '业主名称',
      title: '标题',
      feedbackType: '反馈类型',
      content: '内容',
      feedbackImage: '反馈图片',
      answer: '回复',
      username: '处理人',
      result: '处理结果',
      remarks: '备注',
      answerTime: '回复时间',
      createTime: '反馈时间'
    },
    building: {
      buildingNum: '楼宇栋号',
      floor: '楼宇层数',
      floorNum: '一梯几户',
      number: '总户数',
      createTime: '创建时间',
      updateTime: '修改时间'
    }
  },
  scaffoldJsonViewer: {
    copyText: '复制',
    copiedText: '已复制'
  },
  errorLogsPage: {
    title: '错误日志',
    none: '无',
    exceptionInfo: '异常详情',
    lookInfo: '查看异常',
    delTitle: '确认清空所有操作日志吗?',
    empty: '清空',
    noUser: '未知用户'
  },
  userCenter: {
    leftCard: {
      title: '个人信息(头像需要审核通过后才能显示)',
      avatarAlt: '点击更换头像',
      loginName: '登录账号',
      sex: '性别',
      phone: '手机号码',
      email: '邮箱',
      lastChangePass: '上一次修改密码',
      lastChangeAvatar: '上一次修改头像',
      resTime: '注册时间',
      securitySetting: '安全设置',
      changePass: '修改密码',
      changeEmail: '修改邮箱',
      no: '暂无'
    },
    rightCard: {
      playLogs: '操作日志',
      errorLogs: '异常日志'
    },
    avatar: {
      changeSuccess: '头像修改成功！',
      changeFail: '头像上传失败！',
      typeTip: '上传的头像只能是 JPG 或者 PNG格式！',
      sizeTip: '上传的头像图片大小不能超过50MB！'
    },
    update: {
      pass: {
        oldPass: '旧密码',
        newPass: '新密码',
        confirmPass: '确认密码',
        reset: '重置',
        confirmTip: '两次输入的密码不一致',
        inputPassAgain: '请再次输入密码',
        newPassNotNull: '新密码不能为空',
        tips: '必须以字母开头，长度在6~18之间，只能包含字母、数字和下划线',
        changePass: '修改密码',
        inputOldPass: '请输入旧密码',
        toLogin: '密码修改成功,请重新登录'
      },
      email: {
        newEmail: '新邮箱',
        prefix: '请输入邮箱前缀',
        suffix: '请选择后缀',
        code: '验证码',
        codeTip: '请输入验证码',
        password: '当前密码',
        passwordTip: '请输入密码',
        changeEmail: '修改邮箱',
        getCode: '获取验证码',
        passRule: '当前密码不能为空',
        prefixRule: '邮箱前缀不能为空',
        codeRule: '验证码不能为空',
        suffixRule: '请选择邮箱后缀',
        codeSending: '验证码发送中',
        codeSendSuccess: '发送成功，验证码有效期5分钟',
        codeBtnTip1: '秒后重新发送',
        codeBtnTip2: '重新发送',
        emailIsNull: '邮箱为空',
        emailError1: '邮箱不能为原邮箱',
        emailError2: '邮箱格式错误'
      }
    }
  },
  userPage: {
    placeholderInput: '请输入用户名查询',
    placeholderPhone: '请输入手机号后四位',
    placeholderSelect: '状态',
    form: {
      username: '用户名',
      phone: '电话',
      email: '邮箱',
      sex: '性别',
      man: '男',
      woman: '女',
      status: '状态',
      statusOk: '启用',
      statusNo: '禁用',
      role: '角色',
      rolePlaceholder: '请选择'
    },
    column: {
      operate: '操作'
    },
    title: '用户',
    validPhone: {
      error1: '请输入电话号码',
      error2: '请输入正确的11位手机号码'
    },
    validUsername: {
      error1: '请输入用户名',
      error2: '长度在 2 到 10 个字符'
    },
    validEmail: {
      error1: '请输入邮箱地址',
      error2: '请输入正确的邮箱地址'
    },
    validRoles: {
      error: '请选择角色'
    },
    createdTip: '新增成功，默认密码：123456',
    rolesIsNull: '角色不能为空',
    enabledTips: {
      tip1: '此操作将',
      tip2: ', 是否继续?',
      tip3: '成功'
    }
  },
  avatarPage: {
    placeholderInput: '请输入用户名查询',
    placeholderState: '审核状态',
    operate: '操作',
    title: '头像',
    enabledOK: '已审核',
    enabledNo: '未审核',
    enable: '启用',
    disable: '禁用',
    enabledTips: {
      tip1: '此操作将',
      tip2: '用户 [',
      tip3: '] 的头像, 是否继续?',
      tip4: '成功'
    }
  },
  menuPage: {
    title: '菜单',
    state: '状态',
    form: {
      type: '菜单类型',
      type_1: '顶级菜单',
      type_2: '子菜单',
      type_3: '权限菜单',
      iconCls: '菜单图标',
      iconSelect: '点击选择图标',
      parentId: '上级菜单',
      treeSelect: '点击选择上级菜单',
      name1: '菜单操作权限',
      name2: '菜单名称',
      path: '前端使用的Path',
      url: '后端使用的Url',
      permission: '权限标识',
      keepAlive: '保持激活',
      yes: '是',
      no: '否',
      sort: '排序',
      hidden: '菜单可见',
      enabled: '菜单是否可用',
      component: '组件路径',
      componentName: '组件名称'
    },
    operate: '操作',
    enable: '启用',
    disable: '禁用',
    rules: {
      name: '请输入菜单名称',
      name1: '请输入菜单操作权限',
      path: '请输入前端使用的Path',
      url: '请输入后端使用的Url',
      componentName: '请输入组件名称',
      component: '请输入组件路径',
      permission: '请输入权限标识'
    },
    topMenu: '顶级菜单',
    changeEnabled: {
      tip1: '此操作将',
      tip2: ' 菜单 [',
      tip3: '] , 是否继续?'
    },
    success: '成功'
  },
  scaffoldIconSelect: {
    placeholder: '请输入图标名称'
  },
  scaffoldScreenFull: {
    tip: '你的浏览器不支持该操作!'
  },
  scaffoldSizeSelect: {
    tip: '布局设置成功!'
  },
  scaffoldThemePicker: {
    tip: '正在编译主题...'
  },
  scaffoldTreeSelect: {
    tip: '点击选择!'
  },
  scaffoldTable: {
    operate: '操作'
  },
  scaffoldRelativeTime: {
    just: '刚刚',
    minute: '分钟前',
    hour: '小时前',
    day: '天前'
  },
  rolePage: {
    title: '角色',
    inputPlaceholder: '请输入角色名称或权限等级搜索',
    form: {
      name: '角色名称',
      permission: '角色权限',
      level: '角色级别'
    },
    roleCardTitle: '角色列表 (修改菜单后该角色需要注销重新登录)',
    operate: '操作',
    tooltipContent: '选择指定角色分配菜单',
    menuCardTitle: '菜单分配',
    save: '保存',
    rules: {
      name: '请输入名称',
      permission: '请输入权限',
      nameZhCn: '请输入中国大陆名称',
      nameZhHk: '请输入中国香港名称',
      nameZhTw: '请输入中国台湾名称',
      nameEnUs: '请输入英文名称',
      saveSuccess: '保存成功!'
    }
  },
  validate: {
    ip: '请输入正确的IP地址',
    phoneTwo: '请输入正确的电话号码或者固话号码',
    telephone: '请输入正确的固话（格式：区号+号码,如010-1234567）',
    idNo: '请输入正确的身份证号码',
    phone1: '请输入手机号码!',
    phone2: '请输入正确的11位手机号码',
    email1: '请输入邮箱!',
    email2: '请输入正确的邮箱！',
    url1: '请输入URL',
    url2: '请输入正确的URL'
  },
  ownerPage: {
    title: '业主',
    inputPlaceholder: '请输入姓名或者手机号后四位搜索',
    form: {
      name: '业主姓名',
      phone: '业主电话',
      sex: '性别',
      male: '男',
      female: '女',
      identityId: '身份证',
      email: '邮箱'
    },
    dialog: {
      title: '验证密码',
      pass: '密码',
      passPlaceholder: '请输入密码'
    },
    operate: '操作',
    btnText: '重置密码',
    content1: '确认重置密码吗?',
    content2: '原始密码为身份证号后六位',
    rule: '请输入姓名',
    resetSuccess: '重置成功!',
    notify: {
      title: '错误',
      message: '密码错误！'
    }
  },
  localStoragePage: {
    title: '存储',
    upload: '上传',
    fileUpload: '文件上传',
    fileUpdate: '编辑文件',
    fileName: '文件名',
    fileNamePlaceholder: '文件名(不带后缀)',
    putFile: '添加文件',
    uploadTip: '可上传任意格式文件，且不超过20M',
    uploadErrorTip: '上传文件大小不能超过 20MB!',
    uploadSuccess: '上传成功！',
    uploadFail: '上传失败！',
    uploadFailTip: '文件上传失败！'
  },
  sysSetting: {
    sysName: '系统标题',
    sysNameZhCn: '系统标题zh-CN',
    sysNameZhHk: '系统标题zh-HK',
    sysNameZhTw: '系统标题zh-TW',
    sysNameEnUs: '系统标题en-US',
    sysLogo: '系统Logo地址',
    userInitPassword: '用户初始密码',
    form: {
      sysName: '请输入系统标题',
      sysNameZhCn: '请输入系统标题zh-CN',
      sysNameZhHk: '请输入系统标题zh-HK',
      sysNameZhTw: '请输入系统标题zh-TW',
      sysNameEnUs: '请输入系统标题en-US',
      userInitPassword: '请输入用户初始密码'
    },
    saveSuccess: '保存成功！',
    saveMessage: '系统参数保存成功！',
    saveBtn: '保存配置'
  },
  notice: {
    title: '通知',
    inputPlaceholder: '请输入通知标题和内容查询',
    isOverdue: '是否过期',
    sendScope: '发送范围',
    sender: '发送人',
    noticeScope: '通知范围',
    all: '全体业主',
    allP: '全体员工',
    allp: '全体人员',
    overdue: '已过期',
    noOverdue: '未过期',
    noticeTitle: '通知标题',
    noticeContent: '通知内容',
    delPopoverTip: '确认删除该通知吗?'
  },
  feedback: {
    placeholderInput: '请输入反馈标题,内容或备注进行搜索',
    type: '反馈类型',
    result: '处理结果',
    unResolved: '未解决',
    resolved: '已解决',
    other: '其他',
    ownerName: '反馈业主',
    title: '反馈标题',
    content: '反馈内容',
    image: '反馈图片',
    answer: '回复',
    remarks: '备注',
    noData: '暂无数据',
    feedback: '反馈',
    message: '回复不能为空!',
    no: '无'
  },
  building: {
    title: '楼宇',
    buildingNum: '建筑栋号',
    floor: '建筑层数',
    floorNum: '一梯几户',
    message1: '请输入建筑栋号',
    message2: '建筑层数必须是数字',
    message3: '该项必须是数字'
  },
  scaffoldLogoAlt: '首页',
  scaffoldSelect: {
    placeholder: '请选择'
  }
}
