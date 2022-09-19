import Vue from 'vue'

// 手机号脱敏
Vue.filter('phone', function (value) {
  if (value !== null && value !== undefined) {
    const pat = /(\d{3})\d*(\d{4})/
    return value.replace(pat, '$1****$2')
  } else {
    return value
  }
})

// 邮箱脱敏
Vue.filter('email', function (value) {
  let new_email = value
  if (String(value).indexOf('@') > 0) {
    const str = value.split('@')
    let _s = ''
    if (str[0].length > 3) {
      for (let i = 3; i < str[0].length; i++) {
        _s += '*'
      }
      new_email = str[0].substring(0, 3) + _s + '@' + str[1]
    } else {
      for (let i = 1; i < str[0].length; i++) {
        _s += '*'
      }
      new_email = str[0].substring(0, 1) + _s + '@' + str[1]
    }
  }
  return new_email
})

// 身份证脱敏
Vue.filter('idCard', function (value) {
  if (value !== null && value !== undefined) {
    const pat = /(\d{4})\d*(\d{4})/
    return value.replace(pat, '$1***********$2')
  } else {
    return value
  }
})

// 姓名脱敏
Vue.filter('name', function (value) {
  // 3个字以内脱敏第一个字，4—6个字脱敏前两个字，大于6个字脱敏第3—6个字
  if (value !== null && value !== undefined) {
    if (value.length < 3) {
      return value.substring(0, 1) + '*'
    } else if (value.length === 3) {
      return value.substring(0, 1) + '*' + value.substring(2)
    } else if (value.length > 3 && value.length <= 6) {
      return value.substring(0, 2) + '*' + value.substring(value.length - 1, value.length)
    } else if (value.length > 6) {
      return value.substring(0, 2) + '****' + value.substring(6, value.length)
    }
  } else {
    return value
  }
})
