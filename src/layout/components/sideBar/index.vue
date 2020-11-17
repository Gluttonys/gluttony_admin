<template>
  <el-aside width="200">
    <el-menu
        @open="handleOpen"
        @close="handleClose"
        :collapse="$store.getters.isCollapse"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
      <el-menu-item index="1" @click="$router.push({name: 'dashboard'})">
        <i class="fa fa-tachometer"></i> <span slot="title">仪表盘</span>
      </el-menu-item>
      <el-menu-item index="2" @click="$router.push({name: 'document'})">
        <i class="fa fa-clipboard"></i> <span slot="title">文档</span>
      </el-menu-item>
      <el-menu-item index="3" @click="$router.push({name: 'guide'})">
        <i class="fa fa-american-sign-language-interpreting"></i> <span slot="title">引导</span>
      </el-menu-item>

      <el-submenu index="4">
        <template slot="title">
          <i class="fa fa-th-large"></i> <span slot="title">组件</span>
        </template>
        <el-menu-item index="4-1" @click="$router.push({name: 'tinymce'})">
          <span slot="title">富文本TinyMce</span>
        </el-menu-item>
        <el-menu-item index="4-2" @click="$router.push({name: 'markdown'})">
          <span slot="title">Markdown</span>
        </el-menu-item>
        <el-menu-item index="4-3" disabled>
          <span slot="title">Json编辑器</span>
        </el-menu-item>
        <el-menu-item index="4-4" disabled>
          <span slot="title">上传文件</span>
        </el-menu-item>
        <el-menu-item index="4-5" disabled>
          <span slot="title">动画</span>
        </el-menu-item>
      </el-submenu>

      <el-submenu index="5">
        <template slot="title">
          <i class="fa fa-th-large"></i> <span slot="title">图表</span>
        </template>
        <el-menu-item index="5-1" @click="$router.push({name: 'charts01'})">
          <span slot="title">图表-01</span>
        </el-menu-item>
        <el-menu-item index="5-2" @click="$router.push({name: 'charts02'})">
          <span slot="title">图表-02</span>
        </el-menu-item>
        <el-menu-item index="5-3" disabled>
          <span slot="title">图表-03</span>
        </el-menu-item>
      </el-submenu>

      <el-submenu index="6">
        <template slot="title">
          <i class="fa fa-th-large"></i> <span slot="title">错误页面</span>
        </template>
        <el-menu-item index="6-1" @click="$router.push({name: 'error404'})">
          <span slot="title">>= 400</span>
        </el-menu-item>
        <el-menu-item index="6-2" @click="$router.push({name: 'error500'})">
          <span slot="title">>= 500</span>
        </el-menu-item>
      </el-submenu>

      <el-menu-item index="7" @click="$router.push({name: 'excel'})">
        <i class="fa fa-file-excel-o"></i> <span slot="title">Excel</span>
      </el-menu-item>
      <el-menu-item index="8" disabled>
        <i class="fa fa-file-archive-o"></i> <span slot="title">压缩</span>
      </el-menu-item>
      <el-menu-item index="9" @click="$router.push({name: 'workflow'})">
        <i class="fa fa-file-archive-o"></i> <span slot="title">工作流</span>
      </el-menu-item>
      <el-menu-item index="10" disabled>
        <i class="fa fa-file-archive-o"></i> <span slot="title">lodop报表工具</span>
      </el-menu-item>
      <el-menu-item index="11" @click="$router.push({name: 'map'})">
        <i class="fa fa-file-archive-o"></i> <span slot="title">地图</span>
      </el-menu-item>

      <el-submenu index="12">
        <template slot="title">
          <i class="fa fa-th-large"></i> <span slot="title">图形编辑器</span>
        </template>
        <el-menu-item index="12-1" @click="$router.push({name: 'processEditor'})">
          <i class="fa fa-th-large"></i> <span slot="title">流程编辑器</span>
        </el-menu-item>
        <el-menu-item index="12-2" disabled>
          <i class="fa fa-th-large"></i> <span slot="title">脑图编辑器</span>
        </el-menu-item>
        <el-menu-item index="12-3" disabled>
          <i class="fa fa-th-large"></i> <span slot="title">拓扑编辑器</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      isCollapse: false
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "index";
</style>
