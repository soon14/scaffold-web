import zhHKLocale from 'element-ui/lib/locale/lang/zh-TW'

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
  logo: {
    title: 'Scaffold - 管理系統'
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
    empty: '清空'
  },
  ...zhHKLocale
}
