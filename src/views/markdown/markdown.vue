<template>
  <mavon-editor class="editor" :toolbars="toolbars" v-model="content"></mavon-editor>
</template>

<script>
import {toolbars} from '@/config/markdownToolbars'

/*
* 事件回调
* change	String: value , String: render	编辑区发生变化的回调事件(render: value 经过markdown解析后的结果)
  save	String: value , String: render	ctrl + s 的回调事件(保存按键,同样触发该回调)
  fullScreen	Boolean: status , String: value	切换全屏编辑的回调事件(boolean: 全屏开启状态)
  readModel	Boolean: status , String: value	切换沉浸式阅读的回调事件(boolean: 阅读开启状态)
  htmlCode	Boolean: status , String: value	查看html源码的回调事件(boolean: 源码开启状态)
  subfieldToggle	Boolean: status , String: value	切换单双栏编辑的回调事件(boolean: 双栏开启状态)
  previewToggle	Boolean: status , String: value	切换预览编辑的回调事件(boolean: 预览开启状态)
  helpToggle	Boolean: status , String: value	查看帮助的回调事件(boolean: 帮助开启状态)
  navigationToggle	Boolean: status , String: value	切换导航目录的回调事件(boolean: 导航开启状态)
  imgAdd	String: filename, File: imgfile	图片文件添加回调事件(filename: 写在md中的文件名, File: File Object)
  imgDel	String: filename	图片文件删除回调事件(filename: 写在md中的文件名)
* */

export default {
  name: 'markdown',
  data() {
    return {
      toolbars,
      content: '编辑器插件地址 ： https://www.npmjs.com/package/mavon-editor'
    }
  }
}
</script>

<style lang="scss" scoped>
.editor {
  width:  100%;
  height: 600px;
}
</style>
