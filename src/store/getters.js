const getters = {
  tagList: state => state.tags.tagList,
  currentTag: state => state.tags.currentTag,
  isCollapse: state => state.header.isCollapse,
  allUser: state => state.user.allUser,
}
export default getters
