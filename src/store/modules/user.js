// import router from '@/router'

const state = {          /* 状态管理 */
  allUser: null
}

const mutations = {       /* 同步方法 */
  setAllUser: (state, userList) => state.allUser = userList,
  removeAllUser: state => state.allUser = []
}

const actions = {         /* 异步方法 */

}


export default {
  namespaced: true,
  state,
  mutations,
  actions
}
