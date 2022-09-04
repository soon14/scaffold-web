import Cookies from 'js-cookie'
import Global from '@/global'

const TokenKey = Global.TokenKey

// 从Cookies中获取Token
export function getToken() {
  return Cookies.get(TokenKey)
}

// 将token放入Cookies中
export function setToken(token, rememberMe) {
  // 用户如果选了记住我则保存Cookies，时间为1天
  if (rememberMe) {
    return Cookies.set(TokenKey, token, { expires: Global.tokenCookieExpires })
  } else return Cookies.set(TokenKey, token)
}

// 移除Token
export function removeToken() {
  return Cookies.remove(TokenKey)
}
