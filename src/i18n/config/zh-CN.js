import zhCNLocale from 'element-ui/lib/locale/lang/zh-CN'

export default {
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
  logo: {
    title: 'Scaffold - 管理系统'
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
    isShowOnceMenu: '只保持一个子菜单的展开'
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
      chooseAll: '全选'
    },
    searchResetOperation: {
      search: '搜索',
      reset: '重置'
    },
    searchDatePickerOperation: {
      placeholder: '请输入你要搜索的内容',
      startTime: '开始日期',
      endTime: '结束日期'
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
      title: '个人信息',
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
  ...zhCNLocale
}
