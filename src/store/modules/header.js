// eslint-disable-next-line
import router from '@/router'

const state = {          /* 状态管理 */
  isCollapse: false,    // 是否收缩侧边导航栏 ， 默认不收缩
}

const mutations = {       /* 同步方法 */
  /*
   * value : Boolean : 将要设置的值
   * */
  setIsCollapse: (state, value) => state.isCollapse = value


}

const actions = {         /* 异步方法 */


}


export default {
  namespaced: true,
  state,
  mutations,
  actions
}
