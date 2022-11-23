import enLocale from 'element-ui/lib/locale/lang/en'
import enumEnUSLocale from '@/enums/lang/en-US'

export default {
  ...enLocale,
  ...enumEnUSLocale,
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
    loginLoading: 'Logging in...',
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
    isShowOnceMenu: 'Menu Accordion Mode',
    showFooter: 'Whether to open footer'
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
  no: 'No Data',
  nodata: 'No Data',
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
      chooseAll: 'Select All',
      tip1: 'Confirm to delete the selected ',
      tip2: ' pieces of Data?',
      tip3: 'Please select at least one column'
    },
    searchResetOperation: {
      search: 'Search',
      reset: 'Reset'
    },
    searchDatePickerOperation: {
      placeholder: 'Please enter to search',
      startTime: 'Start Time',
      endTime: 'End Time'
    },
    updateDeleteOperation: {
      msg: 'Are you sure you want to delete this data?'
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
    },
    user: {
      username: 'Username',
      avatarPath: 'Avatar',
      sex: 'Sex',
      email: 'Email',
      phone: 'Phone',
      enabled: 'State',
      updateTime: 'Update Time',
      createTime: 'Create Time'
    },
    avatar: {
      username: 'Username',
      path: 'Avatar',
      realName: 'RealName',
      size: 'Size',
      enabled: 'Enabled',
      updateTime: 'UpdateTime',
      createTime: 'CreateTime'
    },
    role: {
      name: 'Roles',
      permission: 'Permission',
      level: 'Level',
      updateTime: 'UpdateTime',
      createTime: 'CreateTime'
    },
    menu: {
      name: 'Name',
      iconCls: 'Icon',
      sort: 'Sort',
      componentName: 'Component Name',
      url: 'URL',
      permission: 'Permission',
      hidden: 'Hidden',
      enabled: 'State',
      type: 'Type',
      createTime: 'CreateTime'
    },
    owner: {
      name: 'OwnerName',
      sex: 'Sex',
      phone: 'Phone',
      identityId: 'ID Card',
      email: 'Email',
      createTime: 'Create Time',
      updateTime: 'Update Time'
    },
    localStorage: {
      serverUrl: 'Preview',
      fileName: 'File Name',
      suffix: 'File Suffix',
      type: 'File Type',
      size: 'File Size',
      creteTime: 'Upload Time'
    },
    feedback: {
      ownerName: 'Owner Name',
      title: 'Title',
      feedbackType: 'Type',
      content: 'Content',
      feedbackImage: 'Image',
      answer: 'Answer',
      username: 'Handled by',
      result: 'Result',
      remarks: 'Remarks',
      answerTime: 'AnswerTime',
      createTime: 'CreateTime'
    },
    building: {
      buildingNum: 'Building Num',
      floor: 'Floor',
      floorNum: 'Floor Num',
      number: 'Total',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime'
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
      title: 'User Info(Avatars need to be reviewed and approved before they can be displayed)',
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
  userPage: {
    placeholderInput: 'Please enter the username to query',
    placeholderPhone: 'Please enter the last four digits of your mobile number',
    placeholderSelect: 'State',
    form: {
      username: 'Username',
      phone: 'Phone',
      email: 'Email',
      sex: 'Sex',
      man: 'Male',
      woman: 'Female',
      status: 'State',
      statusOk: 'Enable',
      statusNo: 'Disable',
      role: 'Roles',
      rolePlaceholder: 'Please select'
    },
    column: {
      operate: 'Operate'
    },
    title: 'User',
    validPhone: {
      error1: 'Please enter a phone number',
      error2: 'Please enter the correct 11 digit mobile phone number'
    },
    validUsername: {
      error1: 'Enter one user name',
      error2: '2 to 10 characters in length'
    },
    validEmail: {
      error1: 'Please enter the email address',
      error2: 'Please enter the correct email address'
    },
    validRoles: {
      error: 'Please select a role'
    },
    createdTip: 'Successfully added. Default password: 123456',
    rolesIsNull: 'Role cannot be empty',
    enabledTips: {
      tip1: 'This action will ',
      tip2: ', Do you want to continue?',
      tip3: ' Success'
    }
  },
  avatarPage: {
    placeholderInput: 'Please enter the user name to query',
    placeholderState: 'Audit status',
    operate: 'Operate',
    title: 'Avatar',
    enable: 'Enable',
    disable: 'Disable',
    enabledTips: {
      tip1: 'This action will ',
      tip2: ' User [',
      tip3: '] \'s avatar, Do you want to continue?',
      tip4: ' Success'
    }
  },
  menuPage: {
    title: 'Menu',
    state: 'State',
    form: {
      type: 'Menu Type',
      type_1: 'TopMenu',
      type_2: 'SubMenu',
      type_3: 'PermissionMenu',
      iconCls: 'ICON',
      iconSelect: 'Click the select icon',
      parentId: 'Parent Menu',
      treeSelect: 'Click to select the parent menu',
      name1: 'Menu operation permission',
      name2: 'Menu Name',
      path: 'Vue Path',
      url: 'Backend Url',
      permission: 'Permission',
      keepAlive: 'Keep Alive',
      yes: 'Yes',
      no: 'No',
      sort: 'Sort',
      hidden: 'Hidden',
      enabled: 'Enabled',
      component: 'Component Path',
      componentName: 'Component Name'
    },
    operate: 'Operate',
    enable: 'Enabled',
    disable: 'Disabled',
    rules: {
      name: 'Please enter a menu name',
      name1: 'Please enter the menu operation permission',
      path: 'Please enter the Vue Path',
      url: 'Please enter the Backend Url',
      componentName: 'Please enter a component name',
      component: 'Please enter the component path',
      permission: 'Please enter a permission ID'
    },
    topMenu: 'Top Menu',
    changeEnabled: {
      tip1: 'This action will ',
      tip2: ' Menu [',
      tip3: '] , Do you want to continue?'
    },
    success: ' Success'
  },
  scaffoldIconSelect: {
    placeholder: 'Please enter the icon name'
  },
  scaffoldScreenFull: {
    tip: 'Your browser does not support this operation!'
  },
  scaffoldSizeSelect: {
    tip: 'Layout set successfully!'
  },
  scaffoldThemePicker: {
    tip: 'Compiling the theme...'
  },
  scaffoldTreeSelect: {
    tip: 'Click to select!'
  },
  scaffoldTable: {
    operate: 'Operate'
  },
  scaffoldRelativeTime: {
    just: 'Just Now',
    minute: ' Minutes Ago',
    hour: ' Hours Ago',
    day: ' Days Ago'
  },
  rolePage: {
    title: 'Role',
    inputPlaceholder: 'Please enter the role name or permission level to search',
    form: {
      name: 'Role Name',
      permission: 'Role Permission',
      level: 'Level'
    },
    roleCardTitle: 'Role list (after modifying the menu, the role needs to be logged out and logged in again)',
    operate: 'Operate',
    tooltipContent: 'Select the Assign Roles menu',
    menuCardTitle: 'Menu Assignment',
    save: 'Save',
    rules: {
      name: 'Please enter a name',
      permission: 'Please enter permission',
      nameZhCn: 'Please enter the name of Chinese Mainland',
      nameZhHk: 'Please enter the name of Hong Kong, China',
      nameZhTw: 'Please enter the name of Taiwan, China',
      nameEnUs: 'Please enter English name',
      saveSuccess: 'Saving succeeded!'
    }
  },
  validate: {
    ip: 'Please enter the correct IP address',
    phoneTwo: 'Please enter the correct phone number or fixed line number',
    telephone: 'Please enter the correct fixed line telephone (format: area code+number, such as 010-1234567)',
    idNo: 'Please enter the correct ID number',
    phone1: 'Please enter your mobile number!',
    phone2: 'Please enter the correct 11 bit mobile phone number',
    email1: 'Please enter your email!',
    email2: 'Please enter the correct email!',
    url1: 'Please enter the URL！',
    url2: 'Please enter the correct URL！'
  },
  ownerPage: {
    title: 'Owner',
    inputPlaceholder: 'Please enter the last four digits of your name or mobile number to search',
    form: {
      name: 'Owner Name',
      phone: 'Phone',
      sex: 'Sex',
      male: 'Male',
      female: 'Female',
      identityId: 'ID Card',
      email: 'Email'
    },
    dialog: {
      title: 'Verify Password',
      pass: 'Password',
      passPlaceholder: 'Please input a password',
      pwd: 'The Password is not null！'
    },
    operate: 'Operate',
    btnText: 'Reset',
    content1: 'Are you sure to reset the password?',
    content2: 'The original password is the last six digits of the ID number',
    rule: 'Please enter your name',
    resetSuccess: 'Reset succeeded!',
    notify: {
      title: 'Error',
      message: 'Password error！'
    }
  },
  localStoragePage: {
    title: 'LocalStorage',
    upload: 'Upload',
    fileUpload: 'File Upload',
    fileUpdate: 'Edit File',
    fileName: 'FileName',
    fileNamePlaceholder: 'File name (without suffix)',
    putFile: 'Add File',
    uploadTip: 'Files in any format can be uploaded, and the size shall not exceed 20M',
    uploadErrorTip: 'The size of the uploaded file cannot exceed 20MB!',
    uploadSuccess: 'Upload succeeded!',
    uploadFail: 'Upload failed!',
    uploadFailTip: 'File upload failed!'
  },
  sysSetting: {
    sysName: 'System Title',
    sysNameZhCn: 'System Title zh-CN',
    sysNameZhHk: 'System Title zh-HK',
    sysNameZhTw: 'System Title zh-TW',
    sysNameEnUs: 'System Title en-US',
    sysLogo: 'System Logo Address',
    userInitPassword: 'User initial password',
    form: {
      sysName: 'Please enter the system title',
      sysNameZhCn: 'Please enter the system title zh-CN',
      sysNameZhHk: 'Please enter the system title zh-HK',
      sysNameZhTw: 'Please enter the system title zh-TW',
      sysNameEnUs: 'Please enter the system title en-US',
      userInitPassword: 'Please enter the user\'s initial password'
    },
    saveSuccess: 'Saving succeeded！',
    saveMessage: 'System parameters saved successfully！',
    saveBtn: 'Save'
  },
  notice: {
    title: 'Notice',
    inputPlaceholder: 'Please enter the notification title and content query',
    isOverdue: 'Expired or not',
    sendScope: 'Sending range',
    sender: 'Sender',
    noticeScope: 'Scope of notification',
    all: 'All owners',
    allP: 'All hands',
    allp: 'All staff',
    overdue: 'Expired',
    noOverdue: 'Not expired',
    noticeTitle: 'Notification Title',
    noticeContent: 'Notice content',
    delPopoverTip: 'Are you sure to delete this notification?'
  },
  feedback: {
    placeholderInput: 'Please enter the feedback title, content',
    type: 'Feedback Type',
    result: 'Result',
    unResolved: 'Unresolved',
    resolved: 'Resolved',
    other: 'Other',
    ownerName: 'OwnerName',
    title: 'Title',
    content: 'Content',
    image: 'Image',
    answer: 'Answer',
    remarks: 'Remarks',
    noData: 'No Data',
    feedback: 'Feedback',
    message: 'Reply cannot be blank!',
    no: 'No'
  },
  building: {
    title: 'Building',
    buildingNum: 'Building Num',
    floor: 'Floor',
    floorNum: 'Floor Num',
    message1: 'Please enter building number',
    message2: 'The number of building floors must be a number',
    message3: 'The item must be a number'
  },
  scaffoldLogoAlt: 'Home',
  scaffoldSelect: {
    placeholder: 'Please Select'
  },
  data: 'Data'
}
