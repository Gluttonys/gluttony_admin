import Cookies from 'js-cookie'
import VueRouter from 'vue-router'

const TokenKey = 'admin_token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}




export function toLogin() {
  if (getToken()) {
    /* 发送请求登录 */

    VueRouter.prototype.push({name: '/'})
  } else {
    VueRouter.prototype.push({name: 'login'})
  }
}
