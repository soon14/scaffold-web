import zhTWLocale from 'element-ui/lib/locale/lang/zh-TW'

export default {
  global: {
    title: 'Scaffold - 管理系統',
    login: '登入',
    caseNumber: '粵ICP備XXXXXXXX號'
  },
  login: {
    title: 'Scaffold - 智慧物業管理系統',
    welcome: 'Scaffold - 歡迎登錄',
    placeholderUsername: '請輸入用戶名',
    placeholderPassword: '請輸入密碼',
    placeholderCode: '點擊圖片更換驗證碼',
    rememberMe: '記住我',
    loginButton: '登入',
    loginLoading: '登入中...',
    rules: {
      usernameMessage: '用戶名不能為空',
      passwordMessage: '密碼不能為空',
      codeMessage: '驗證碼不能為空'
    },
    errorMessage: '輸入的資訊有誤！'
  },
  dashboard: {
    title: '首頁'
  },
  center: {
    title: '個人中心'
  },
  navbar: {
    codeAddress: '源碼地址',
    screenFull: '全屏縮放',
    i18nSelect: '語言切換',
    sizeSelect: '佈局設定',
    systemLayoutSettings: '系統佈局設定',
    personalCenter: '個人中心',
    logout: '登出'
  },
  settings: {
    systemLayoutSettings: '系統佈局設定',
    themeColor: '主題顏色',
    isShowLabels: '顯示標籤',
    isFixedHead: '固定頭部',
    isShowLogo: '顯示LOGO',
    isShowOnceMenu: '只保持一個子選單的展開'
  },
  code: {
    frontCode: '前端源碼',
    backCode: '後端源碼'
  },
  logout: {
    message: '確定註銷並退出系統嗎？'
  },
  tagsView: {
    refresh: '重繪',
    close: '關閉',
    closeOther: '關閉其他',
    closeAll: '關閉全部'
  },
  headerSearch: '査詢',
  no: '暫無',
  nodata: '暫無數據',
  error: '錯誤',
  serverException: '服務器异常',
  networkTimeOut: '網絡請求超時',
  apiRequestFail: '介面請求失敗',
  message_401: '登入狀態已過期，您可以繼續留在該頁面，或者重新登入',
  title_401: '系統提示',
  confirmButtonText_401: '重新登入',
  confirmTips: '提示',
  ok: '確定',
  cancel: '取消',
  systemMonitor: {
    systemInfo: {
      title: '系統資訊',
      os: '作業系統',
      jdk: 'Java版本',
      runTime: '程式啟動時間',
      timeNow: '系統當前時間'
    },
    cpu: {
      title: 'CPU',
      cpuInfo: 'CPU資訊',
      cpuUseRate: 'CPU使用率'
    },
    ram: {
      title: '記憶體',
      ramTotal: '記憶體總量',
      ramUsed: '已用記憶體',
      ramUsedRate: '記憶體使用率'
    },
    disk: {
      title: '磁片',
      diskTotal: '磁片總量',
      diskUsed: '已用磁片',
      diskUsedRate: '磁片使用率'
    },
    jvm: {
      heapTitle: 'JVM堆記憶體',
      nonHeapTitle: 'JVM非堆記憶體',
      heapInit: '初始大小',
      heapMax: '最大可用',
      heapUsed: '已使用',
      heapCommitted: '已申請',
      noInfo: '暫無資訊'
    }
  },
  realTimeLog: {
    title: '後臺實时日誌',
    tips: '1秒重繪一次',
    closeText: '清屏',
    scrollBottom: '滾動至底部',
    openAutoScroll: '開啟自動滾動',
    closeAutoScroll: '關閉自動滾動'
  },
  crud: {
    js: {
      state: {
        add: '新增',
        edit: '編輯'
      },
      submit: '提交成功',
      add: '新增成功',
      edit: '編輯成功',
      del: '删除成功'
    },
    buttonOperation: {
      add: '新增',
      edit: '編輯',
      del: '删除',
      download: '匯出',
      chooseAll: '全選'
    },
    searchResetOperation: {
      search: '蒐索',
      reset: '重置'
    },
    searchDatePickerOperation: {
      placeholder: '請輸入你要搜索的內容',
      startTime: '開始日期',
      endTime: '結束日期'
    },
    updateDeleteOperation: {
      msg: '確定刪除本條數據嗎?'
    }
  },
  onlinePage: {
    title: '線上用戶',
    blurry: '模糊搜索',
    forcedOut: '强退',
    forcedOutSuccess: '强退成功!',
    tips: '確定強制退出該用戶嗎?',
    operation: '操作',
    title1: '確認强退選中的',
    title2: '個用戶嗎?'
  },
  playLogsPage: {
    title: '操作日誌',
    none: '無',
    delTitle: '確認清空所有操作日誌嗎?',
    empty: '清空'
  },
  tableHeader: {
    online: {
      username: '用戶名',
      ip: '登入IP',
      browser: '瀏覽器',
      address: '登入地點',
      loginTime: '登入時間'
    },
    playLogs: {
      logs: {
        username: '用戶名',
        requestIp: 'IP',
        address: 'IP來源',
        title: '操作',
        browser: '瀏覽器',
        businessType: '業務類型',
        time: '操作耗時',
        createTime: '操作時間'
      },
      expand: {
        requestMethod: '請求類型',
        requestUrl: '請求URL',
        status: '操作狀態',
        method: '請求方法',
        requestParams: '請求參數',
        responseResult: '響應結果'
      }
    },
    errorLogs: {
      logs: {
        username: '用戶名',
        requestIp: 'IP',
        address: 'IP來源',
        title: '操作',
        logType: '日誌等級',
        browser: '瀏覽器',
        businessType: '業務類型',
        createTime: '操作時間'
      },
      expand: {
        requestMethod: '請求類型',
        requestUrl: '請求URL',
        status: '操作狀態',
        method: '請求方法',
        requestParams: '請求參數',
        responseResult: '響應結果'
      }
    },
    center: {
      playLogs: {
        title: '操作',
        requestIp: 'IP',
        browser: '瀏覽器',
        address: 'IP來源',
        time: '耗時',
        createTime: '操作時間'
      },
      errorLogs: {
        title: '操作',
        requestIp: 'IP',
        browser: '瀏覽器',
        address: 'IP來源',
        createTime: '操作時間'
      }
    },
    user: {
      username: '用戶名',
      avatarPath: '頭像',
      sex: '性別',
      email: '郵箱',
      phone: '電話',
      enabled: '狀態',
      updateTime: '修改時間',
      createTime: '註冊時間'
    },
    avatar: {
      username: '用戶名',
      path: '頭像',
      realName: '檔名',
      size: '文件大小',
      enabled: '是否已稽核',
      updateTime: '修改時間',
      createTime: '創建時間'
    },
    role: {
      name: '角色',
      permission: '角色許可權',
      level: '角色等級',
      updateTime: '修改時間',
      createTime: '創建時間'
    }
  },
  scaffoldJsonViewer: {
    copyText: '複製',
    copiedText: '已復制'
  },
  errorLogsPage: {
    title: '錯誤日誌',
    none: '無',
    exceptionInfo: '異常詳情',
    lookInfo: '查看異常',
    delTitle: '確認清空所有操作日誌嗎?',
    empty: '清空',
    noUser: '未知用戶'
  },
  userCenter: {
    leftCard: {
      title: '個人信息(頭像需要審核通過後才能顯示)',
      avatarAlt: '點擊更換頭像',
      loginName: '登入帳號',
      sex: '性別',
      phone: '手機號碼',
      email: '郵箱',
      lastChangePass: '上一次修改密碼',
      lastChangeAvatar: '上一次修改頭像',
      resTime: '註冊時間',
      securitySetting: '安全設置',
      changePass: '修改密碼',
      changeEmail: '修改郵箱',
      no: '暫無'
    },
    rightCard: {
      playLogs: '操作日誌',
      errorLogs: '异常日誌'
    },
    avatar: {
      changeSuccess: '頭像修改成功！',
      changeFail: '頭像上傳失敗！',
      typeTip: '上傳的頭像只能是 JPG 或者 PNG格式！',
      sizeTip: '上傳的頭像圖片大小不能超過50MB！'
    },
    update: {
      pass: {
        oldPass: '舊密碼',
        newPass: '新密碼',
        confirmPass: '確認密碼',
        reset: '重置',
        confirmTip: '兩次輸入的密碼不一致',
        inputPassAgain: '請再次輸入密碼',
        newPassNotNull: '新密碼不能為空',
        tips: '必須以字母開頭，長度在6~18之間，只能包含字母、數位和底線',
        changePass: '修改密碼',
        inputOldPass: '請輸入舊密碼',
        toLogin: '密碼修改成功，請重新登入'
      },
      email: {
        newEmail: '新郵箱',
        prefix: '請輸入郵箱首碼',
        suffix: '請選擇尾碼',
        code: '驗證碼',
        codeTip: '請輸入驗證碼',
        password: '當前密碼',
        passwordTip: '請輸入密碼',
        changeEmail: '修改郵箱',
        getCode: '獲取驗證碼',
        passRule: '當前密碼不能為空',
        prefixRule: '郵箱首碼不能為空',
        codeRule: '驗證碼不能為空',
        suffixRule: '請選擇郵箱尾碼',
        codeSending: '驗證碼發送中',
        codeSendSuccess: '發送成功，驗證碼有效期5分鐘',
        codeBtnTip1: '秒後重新發送',
        codeBtnTip2: '重新發送',
        emailIsNull: '郵箱為空',
        emailError1: '郵箱不能為原郵箱',
        emailError2: '郵箱格式錯誤'
      }
    }
  },
  userPage: {
    placeholderInput: '請輸入郵箱或用戶名査詢',
    placeholderSelect: '狀態',
    form: {
      username: '用戶名',
      phone: '電話',
      email: '郵箱',
      sex: '性別',
      man: '男',
      woman: '女',
      status: '狀態',
      statusOk: '啟用',
      statusNo: '禁用',
      role: '角色',
      rolePlaceholder: '請選擇'
    },
    column: {
      operate: '操作'
    },
    title: '用戶',
    validPhone: {
      error1: '請輸入電話號碼',
      error2: '請輸入正確的11比特手機號碼'
    },
    validUsername: {
      error1: '請輸入用戶名',
      error2: '長度在 2 到 10 個字元'
    },
    validEmail: {
      error1: '請輸入郵箱地址',
      error2: '請輸入正確的郵箱地址'
    },
    validRoles: {
      error: '請選擇角色'
    },
    createdTip: '新增成功，默認密碼：123456',
    rolesIsNull: '角色不能為空',
    enabledTips: {
      tip1: '此操作將',
      tip2: '，是否繼續？',
      tip3: '成功'
    }
  },
  avatarPage: {
    placeholderInput: '請輸入用戶名査詢',
    placeholderState: '稽核狀態',
    operate: '操作',
    title: '頭像',
    enabledOK: '已稽核',
    enabledNo: '未稽核',
    enable: '啟用',
    disable: '禁用',
    enabledTips: {
      tip1: '此操作將',
      tip2: '用戶 [',
      tip3: '] 的頭像，是否繼續？',
      tip4: '成功'
    }
  },
  ...zhTWLocale
}
