import enLocale from 'element-ui/lib/locale/lang/en'

export default {
  global: {
    title: 'Scaffold - Management System',
    login: 'Login',
    caseNumber: 'Guangdong ICP No.XXXXXXXX'
  },
  login: {
    title: 'Scaffold - Smart Property Management System',
    welcome: 'Scaffold - Welcome',
    placeholderUsername: 'Please enter the Username',
    placeholderPassword: 'Please enter the Password',
    placeholderCode: 'Click to replace the code',
    rememberMe: 'Remember me',
    loginButton: 'Login',
    loginLoading: 'Logging...',
    rules: {
      usernameMessage: 'Username cannot be empty',
      passwordMessage: 'Password cannot be empty',
      codeMessage: 'Code cannot be empty'
    },
    errorMessage: 'Incorrect information entered!'
  },
  dashboard: {
    title: 'Home'
  },
  logo: {
    title: 'Scaffold - Management'
  },
  navbar: {
    codeAddress: 'Code Address',
    screenFull: 'Full Screen',
    i18nSelect: 'Language Switching',
    sizeSelect: 'Layout Settings',
    systemLayoutSettings: 'System Layout Settings',
    personalCenter: 'Personal Center',
    logout: 'Logout'
  },
  settings: {
    systemLayoutSettings: 'Layout Settings',
    themeColor: 'Theme Color',
    isShowLabels: 'Show Labels',
    isFixedHead: 'Fixed Head',
    isShowLogo: 'Show Logo',
    isShowOnceMenu: 'Menu Unique Opened'
  },
  code: {
    frontCode: 'Front Code',
    backCode: 'Back Code'
  },
  logout: {
    message: 'Are you sure to logout and exit the system?'
  },
  tagsView: {
    refresh: 'Refresh',
    close: 'Close',
    closeOther: 'Close Other',
    closeAll: 'Close All'
  },
  headerSearch: 'Search',
  error: 'error',
  serverException: 'Server Exception',
  networkTimeOut: 'Network Request Timeout',
  apiRequestFail: 'Interface Request Failed',
  message_401: 'The login status has expired.You can continue to stay on this page or log in again.',
  title_401: 'System Warning',
  confirmButtonText_401: 'Log in again',
  confirmTips: 'Tips',
  ok: 'OK',
  cancel: 'Cancel',
  systemMonitor: {
    systemInfo: {
      title: 'System Info',
      os: 'OS',
      jdk: 'Java Version',
      runTime: 'Start Time',
      timeNow: 'Current Time'
    },
    cpu: {
      title: 'CPU',
      cpuInfo: 'CPU Info',
      cpuUseRate: 'CPU Utilization'
    },
    ram: {
      title: 'Memory',
      ramTotal: 'Total Memory',
      ramUsed: 'Used Memory',
      ramUsedRate: 'Memory Utilization'
    },
    disk: {
      title: 'Disk',
      diskTotal: 'Total Disk',
      diskUsed: 'Used Disk',
      diskUsedRate: 'Disk Utilization'
    },
    jvm: {
      heapTitle: 'JVM Heap Memory',
      nonHeapTitle: 'JVM Non Heap Memory',
      heapInit: 'Initial Size',
      heapMax: 'Maximum Size',
      heapUsed: 'Used',
      heapCommitted: 'Applied',
      noInfo: 'No Info'
    }
  },
  realTimeLog: {
    title: 'Back Real Time Log',
    tips: 'Refresh Once Per Second',
    closeText: 'Clear Screen',
    scrollBottom: 'Scroll To Bottom',
    openAutoScroll: 'Turn On Auto Scroll',
    closeAutoScroll: 'Turn Off Auto Scroll'
  },
  crud: {
    js: {
      state: {
        add: 'Add',
        edit: 'Edit'
      },
      submit: 'Submit Success',
      add: 'Add Success',
      edit: 'Edit Success',
      del: 'Delete Success'
    },
    buttonOperation: {
      add: 'Add',
      edit: 'Edit',
      del: 'Delete',
      download: 'Download',
      chooseAll: 'Select All'
    },
    searchResetOperation: {
      search: 'Search',
      reset: 'Reset'
    }
  },
  onlinePage: {
    title: 'Online Users',
    blurry: 'Fuzzy Search',
    forcedOut: 'Out',
    forcedOutSuccess: 'Forced withdrawal succeeded!',
    tips: 'Are you sure to force the user to exit?',
    operation: 'Operation',
    title1: 'Are you sure you want to strongly deselect',
    title2: 'users?'
  },
  playLogsPage: {
    delTitle: 'Are you sure to clear all operation logs?',
    empty: 'Empty'
  },
  tableHeader: {
    online: {
      username: 'Username',
      ip: 'IP',
      browser: 'Browser',
      address: 'Login Address',
      loginTime: 'Login Time'
    }
  },
  scaffoldJsonViewer: {
    copyText: 'copy',
    copiedText: 'copied'
  },
  errorLogsPage: {
    delTitle: 'Are you sure to clear all error logs?',
    empty: 'Empty'
  },
  ...enLocale
}