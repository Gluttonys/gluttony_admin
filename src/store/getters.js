const getters = {
  tagList: state => state.tags.tagList,
  currentTag: state => state.tags.currentTag,
  isCollapse: state => state.header.isCollapse,
  allUser: state => state.user.allUser,
  userinfo: state => state.user.userinfo,
  isLogin: state => state.user.isLogin,
}
export default getters
