import zhHKLocale from 'element-ui/lib/locale/lang/zh-TW'

export default {
  global: {
    title: "Scaffold - 管理系統",
    login: "登入",
    caseNumber: "粵ICP備XXXXXXXX號"
  },
  login: {
    title: "Scaffold - 智慧物業管理系統",
    welcome: "Scaffold - 歡迎登錄",
    placeholderUsername: "請輸入用戶名",
    placeholderPassword: "請輸入密碼",
    placeholderCode: "點擊圖片更換驗證碼",
    rememberMe: "記住我",
    loginButton: "登入",
    loginLoading: "登入中...",
    rules: {
      usernameMessage: "用戶名不能為空",
      passwordMessage: "密碼不能為空",
      codeMessage: "驗證碼不能為空"
    },
    errorMessage: "輸入的資訊有誤！"
  },
  dashboard: {
    title: "首頁"
  },
  logo: {
    title: "Scaffold - 管理系統"
  },
  navbar: {
    codeAddress: "源碼地址",
    screenFull: "全屏縮放",
    i18nSelect: "語言切換",
    sizeSelect: "佈局設定",
    systemLayoutSettings: "系統佈局設定",
    personalCenter: "個人中心",
    logout: "登出"
  },
  settings: {
    systemLayoutSettings: "系統佈局設定",
    themeColor: "主題顏色",
    isShowLabels: "顯示標籤",
    isFixedHead: "固定頭部",
    isShowLogo: "顯示LOGO",
    isShowOnceMenu: "只保持一個子選單的展開"
  },
  code: {
    frontCode: "前端源碼",
    backCode: "後端源碼"
  },
  logout: {
    message: "確定註銷並退出系統嗎？",
    title: "提示"
  },
  tagsView: {
    refresh: "重繪",
    close: "關閉",
    closeOther: "關閉其他",
    closeAll: "關閉全部"
  },
  headerSearch: "査詢",
  error: "錯誤",
  serverException: "服務器异常",
  networkTimeOut: "網絡請求超時",
  apiRequestFail: "介面請求失敗",
  message_401: "登入狀態已過期，您可以繼續留在該頁面，或者重新登入",
  title_401: "系統提示",
  confirmButtonText_401: "重新登入",
  ok: "確定",
  cancel: "取消",
  systemMonitor: {
    systemInfo: {
      title: "系統資訊",
      os: "作業系統",
      jdk: "Java版本",
      runTime: "程式啟動時間",
      timeNow: "系統當前時間"
    },
    cpu: {
      title: "CPU",
      cpuInfo: "CPU資訊",
      cpuUseRate: "CPU使用率"
    },
    ram: {
      title: "記憶體",
      ramTotal: "記憶體總量",
      ramUsed: "已用記憶體",
      ramUsedRate: "記憶體使用率"
    },
    disk: {
      title: "磁片",
      diskTotal: "磁片總量",
      diskUsed: "已用磁片",
      diskUsedRate: "磁片使用率"
    },
    jvm: {
      heapTitle: "JVM堆記憶體",
      nonHeapTitle: "JVM非堆記憶體",
      heapInit: "初始大小",
      heapMax: "最大可用",
      heapUsed: "已使用",
      heapCommitted: "已申請",
      noInfo: "暫無資訊"
    }
  },
  realTimeLog: {
    title: "後臺實时日誌",
    tips: "1秒重繪一次",
    closeText: "清屏",
    scrollBottom: "滾動至底部",
    openAutoScroll: "開啟自動滾動",
    closeAutoScroll: "關閉自動滾動"
  },
  ...zhHKLocale
}
