/*
* 该指令检查 storage 中是否存在 token， 如果没有token
* 则跳转到登录页面
* */
import Vue from 'vue'
// https://zhuanlan.zhihu.com/p/26600198

/*
Vue2 cb name
bind: 一旦指令附加到元素时触发
inserted: 一旦元素被添加到父元素时触发
update: 每当元素本身更新(但是子元素还未更新)时触发
componentUpdate: 每单组件和子组件被更新时触发
unbind: 一旦指令被移除时触发
*/

/*
Vue3 cb name
// 在绑定元素的父组件挂载之前调用
beforeMount() {},
// 绑定元素的父组件挂载时调用
mounted() {},
// 在包含组件的 VNode 更新之前调用
beforeUpdate() {},
// 在包含组件的 VNode 及其子组件的 VNode 更新之后调用
updated() {},
// 在绑定元素的父组件卸载之前调用
beforeUnmount() {},
// 卸载绑定元素的父组件时调用
unmounted() {}*/

Vue.directive('permissions', {
  bind() {
    if (!localStorage.getItem('token')) {
      console.log('您还没有登录')
    } else {
      console.log(localStorage.getItem('token'))
    }
  }
})
