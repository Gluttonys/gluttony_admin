<template>
  <el-aside width="200px">
    <el-menu>
      <el-menu-item index="1" @click="$router.push({name: 'dashboard'})">
        <i class="fa fa-tachometer"></i> 仪表盘
      </el-menu-item>
      <el-menu-item index="2">
        <i class="fa fa-clipboard"></i> 文档
      </el-menu-item>
      <el-menu-item index="3">
        <i class="fa fa-american-sign-language-interpreting"></i> 引导
      </el-menu-item>
      <el-menu-item index="4">
        <i class="fa fa-th-large"></i> 组件
      </el-menu-item>
      <el-menu-item index="5">
        <i class="fa fa-bar-chart"></i> 图表
      </el-menu-item>
      <el-menu-item index="6">
        <i class="fa fa-chain-broken"></i> 错误页面
      </el-menu-item>
      <el-menu-item index="7">
        <i class="fa fa-file-excel-o"></i> Excel
      </el-menu-item>
      <el-menu-item index="8">
        <i class="fa fa-file-archive-o"></i> 压缩
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
