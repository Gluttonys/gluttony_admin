import request from '@/utils/request'
import Vue from 'vue'
import Vuex from '../store'

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
async function checkAllUser() {
  if (!Vuex.getters.allUser) {
    let {data} = await getAllUser()
    Vuex.commit('user/setAllUser', data)
  }
}


export function getAllUser() {
  /*
  * 获取所有的用户列表
  * */
  return request({
    url: '/user',
    method: 'get'
  })
}


// Easy mock 所有关于用户的操作都要依赖 getAllUser 接口
export async function login(username, password) {
  await checkAllUser()
  let isVerification = false
  Vuex.getters.allUser.forEach(({username: un, password: pwd}, index) => {
    if (un === username && pwd === password) {
      isVerification = true
      Vue.prototype.$message.success('登陆成功~~')
      return Promise.resolve(Object.assign(Vuex.getters.allUser[index], {message: '登录成功', status: 200}))
    }
  })

  if (!isVerification) {
    Vue.prototype.$message('账号或者密码错误')
    return Promise.reject({message: '登录失败', status: 401})
  }
}


