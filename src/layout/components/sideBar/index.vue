<template>
  <el-aside width="200px">
    <el-menu>
      <el-menu-item index="1" @click="$router.push({name: 'dashboard'})">
        <i class="fa fa-tachometer"></i> 仪表盘
      </el-menu-item>
      <el-menu-item index="2" @click="$router.push({name: 'document'})">
        <i class="fa fa-clipboard"></i> 文档
      </el-menu-item>
      <el-menu-item index="3" @click="$router.push({name: 'guide'})">
        <i class="fa fa-american-sign-language-interpreting"></i> 引导
      </el-menu-item>

      <el-submenu index="4">
        <template slot="title">
          <i class="fa fa-th-large"></i> 组件
        </template>
        <el-menu-item index="2-1" @click="$router.push({name: 'tinymce'})">
          富文本TinyMce
        </el-menu-item>
        <el-menu-item index="2-2" @click="$router.push({name: 'markdown'})">
          Markdown
        </el-menu-item>
        <el-menu-item index="2-2">
          Json编辑器
        </el-menu-item>
        <el-menu-item index="2-2">
          上传文件
        </el-menu-item>
        <el-menu-item index="2-2">
          动画
        </el-menu-item>
      </el-submenu>

      <el-submenu index="5">
        <template slot="title">
          <i class="fa fa-th-large"></i> 图表
        </template>
        <el-menu-item index="2-2" @click="$router.push({name: 'charts01'})">
          图表-01
        </el-menu-item>
        <el-menu-item index="2-2" @click="$router.push({name: 'charts02'})">
          图表-02
        </el-menu-item>
        <el-menu-item index="2-2">
          图表-03
        </el-menu-item>
      </el-submenu>

      <el-submenu index="6">
        <template slot="title">
          <i class="fa fa-th-large"></i> 错误页面
        </template>
        <el-menu-item @click="$router.push({name: 'error404'})">
          >= 400
        </el-menu-item>
        <el-menu-item @click="$router.push({name: 'error500'})">
          >= 500
        </el-menu-item>
      </el-submenu>

      <el-menu-item index="7">
        <i class="fa fa-file-excel-o"></i> Excel
      </el-menu-item>
      <el-menu-item index="8">
        <i class="fa fa-file-archive-o"></i> 压缩
      </el-menu-item>
      <el-menu-item index="9" @click="$router.push({name: 'workflow'})">
        <i class="fa fa-file-archive-o"></i> 工作流
      </el-menu-item>
      <el-menu-item index="10">
        <i class="fa fa-file-archive-o"></i> lodop报表工具
      </el-menu-item>
      <el-menu-item index="11" @click="$router.push({name: 'map'})">
        <i class="fa fa-file-archive-o"></i> 地图
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style lang="scss" scoped>
@import "index";
</style>
