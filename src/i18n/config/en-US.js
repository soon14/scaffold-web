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
  center: {
    title: 'Personal Center'
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
    },
    searchDatePickerOperation: {
      placeholder: 'Please enter to search',
      startTime: 'Start Time',
      endTime: 'End Time'
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
    title: 'Operation Log',
    none: 'None',
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
    },
    playLogs: {
      logs: {
        username: 'Username',
        requestIp: 'IP',
        address: 'IP Source',
        title: 'Operate',
        browser: 'Browser',
        businessType: 'Business Type',
        time: 'Time',
        createTime: 'Operation Time'
      },
      expand: {
        requestMethod: 'Request Type',
        requestUrl: 'Request URL',
        status: 'Operating State',
        method: 'Request Method',
        requestParams: 'Request Params',
        responseResult: 'Response Result'
      }
    },
    errorLogs: {
      logs: {
        username: 'Username',
        requestIp: 'IP',
        address: 'IP Source',
        title: 'Operate',
        logType: 'Log Level',
        browser: 'Browser',
        businessType: 'Business Type',
        createTime: 'Operation Time'
      },
      expand: {
        requestMethod: 'Request Type',
        requestUrl: 'Request URL',
        status: 'Operating State',
        method: 'Request Method',
        requestParams: 'Request Params',
        responseResult: 'Response Result'
      }
    },
    center: {
      playLogs: {
        title: 'Operate',
        requestIp: 'IP',
        browser: 'Browser',
        address: 'IP Location',
        time: 'Time',
        createTime: 'Operate Time'
      },
      errorLogs: {
        title: 'Operate',
        requestIp: 'IP',
        browser: 'Browser',
        address: 'IP Location',
        createTime: 'Operate Time'
      }
    }
  },
  scaffoldJsonViewer: {
    copyText: 'copy',
    copiedText: 'copied'
  },
  errorLogsPage: {
    title: 'Error Log',
    none: 'None',
    exceptionInfo: 'Exception Info',
    lookInfo: 'Exception',
    delTitle: 'Are you sure to clear all error logs?',
    empty: 'Empty',
    noUser: 'Unknown'
  },
  userCenter: {
    leftCard: {
      title: 'User Info',
      avatarAlt: 'Click Change Avatar',
      loginName: 'Login Account',
      sex: 'Sex',
      phone: 'Phone',
      email: 'E-mail',
      lastChangePass: 'Last password change',
      lastChangeAvatar: 'Last avatar change',
      resTime: 'Registration time',
      securitySetting: 'Modify',
      changePass: 'Password',
      changeEmail: 'E-mail',
      no: 'No'
    },
    rightCard: {
      playLogs: 'Operation log',
      errorLogs: 'Exception log'
    },
    avatar: {
      changeSuccess: 'Avatar modified successfully!',
      changeFail: 'Avatar upload failed!',
      typeTip: 'The uploaded avatar can only be in JPG or PNG format!',
      sizeTip: 'The size of the uploaded avatar image cannot exceed 50MB!'
    },
    update: {
      pass: {
        oldPass: 'Old Password',
        newPass: 'New Password',
        confirmPass: 'Confirm Password',
        reset: 'Reset',
        confirmTip: 'The passwords entered twice are inconsistent',
        inputPassAgain: 'Please enter the password again',
        newPassNotNull: 'New password cannot be empty',
        tips: 'It must start with a letter and be between 6 and 18 in length. It can only contain letters, numbers and underscores',
        changePass: 'Change Password',
        inputOldPass: 'Please enter the old password',
        toLogin: 'Password changed successfully, please login again'
      },
      email: {
        newEmail: 'New Email',
        prefix: 'Enter email prefix',
        suffix: 'Select a suffix',
        code: 'Verify code',
        codeTip: 'Enter Verify code',
        password: 'Password',
        passwordTip: 'Please Enter Password',
        changeEmail: 'Change E-mail',
        getCode: 'Get Code',
        passRule: 'The current password cannot be empty',
        prefixRule: 'Email prefix cannot be empty',
        codeRule: 'Verify code must be filled',
        suffixRule: 'Please select an email suffix',
        codeSending: 'Verify code is being sent',
        codeSendSuccess: 'Successfully sent, the Verify code is valid for 5 minutes',
        codeBtnTip1: 'Resend after ',
        codeBtnTip2: 'Resend',
        emailIsNull: 'Email is empty',
        emailError1: 'Email cannot be the original email',
        emailError2: 'Email format error'
      }
    }
  },
  ...enLocale
}
