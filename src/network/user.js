import request from '@/utils/request'
// import Vue from 'vue'
// import Vuex from '../store'

// export function login(data) {
//   return request({
//     url: '/vue-element-admin/user/login',
//     method: 'post',
//     data
//   })
// }

export function getInfo(token) {
  return request({
    url: '/vue-element-admin/user/info',
    method: 'get',
    params: {token}
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}

// ---------------------------------------------------------------


export function getAllUser() {
  /*
  * 获取所有的用户列表
  * */
  return request({
    url: '/user',
    method: 'get'
  })
}


export async function login(username, password) {
  /*
  * 登录并获取用户信息
  *
  * */
  return request({
    url: '/login',
    method: 'get',
    params: {username, password}
  })
}

export async function loginWithToken(token) {
  /*
  * 登录并获取用户信息
  *
  * */
  return request({
    url: '/login-with-token',
    method: 'get',
    params: {token}
  })
}
