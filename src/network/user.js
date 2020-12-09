import {request2Get} from '@/utils/request'


export function getAllUser() {
  /*
  * 获取所有的用户列表
  * */
  return request2Get({
    url: '/user',
  })
}


export function login(username, password) {
  /*
  * 登录并获取用户信息
  *
  * */
  return request2Get({
    url: '/login',
    params: {username, password}
  })
}

export function loginWithToken(token) {
  /*
  * 登录并获取用户信息
  * */
  return request2Get({
    url: '/login-with-token',
    params: {token}
  })
}
