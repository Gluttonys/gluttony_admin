import router from '@/router'

const state = {  /* 状态管理 */
  /*
  * tagList: [
  *   [title, name 路由],
  *   [title, name 路由],
  *   [title, name 路由],
  *   ...
  * ]
  * */
  tagList: [],
  currentTag: ''
}

const mutations = {                  /* 同步方法 */
  toAddTagList: (state, tag) => {
    let flag = false
    /* 如果有相同的 ， 就不需要添加了 */
    state.tagList.forEach(tagObg => {
      if (tagObg[0] === tag[0]) flag = true
    })
    if (!flag && tag[1] !== 'login') state.tagList.push(tag)
  },
  toRemoveTag: (state, tag) => {     /* 删除指定的tag */
    /*
    * tag : string : router.meta.title
    * */
    let targetIndex = 0
    state.tagList.forEach((tagObg, index) => {
      if (tagObg[0] === tag) targetIndex = index
    })

    if (tag === state.currentTag) {  /* 如果删除的是当前tag */
      state.tagList[targetIndex - 1] ?
        router.push({name: state.tagList[targetIndex - 1][1]}) :
        state.tagList[targetIndex + 1] ?
          router.push({name: state.tagList[targetIndex + 1][1]}) :
          router.push({name: 'dashboard'})
    }
    state.tagList.splice(targetIndex, 1)
    if (state.tagList.length === 0) {
      router.push({name: 'dashboard'})
    }
  },
  toSetCurrentTag: (state, tag) => state.currentTag = tag,

}


const actions = {   /* 异步方法 */


}


export default {
  namespaced: true,
  state,
  mutations,
  actions
}
