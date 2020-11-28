// import router from '@/router'
import {login} from '@/network/user'
import Cookie from 'js-cookie'

const state = {          /* 状态管理 */
  allUser: null,         /* 暂时停用 */
  userinfo: null,        /* 用户信息 */
  isLogin: false,        /* 用户是否登录了 */
}

const mutations = {       /* 同步方法 */
  setAllUser: (state, userList) => state.allUser = userList,
  removeAllUser: state => state.allUser = [],

  setUserinfo: (state, userinfo) => state.userinfo = userinfo,
  removeUserinfo: state => state.userinfo = null,

  setIsLogin: (state, status) => state.isLogin = status,
}

const actions = {         /* 异步方法 */
  async toLogin(context, payload) {
    let {userinfo, status} = await login(payload.username, payload.password)
    /*
      状态码为 2 开头的， 表示请求成功
      这个操作可以放到 utils/request.js 文件中去做
    */
    if (status.toString().startsWith('2')) {
      context.commit('setUserinfo', userinfo)
      context.commit('setIsLogin', true)
      Cookie.set('token', userinfo.token)
      return true
    }
    return false
  }
}


export default {
  namespaced: true,
  state,
  mutations,
  actions
}
