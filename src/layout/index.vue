<template>
  <el-container>
    <layout-sidebar></layout-sidebar>
    <el-container>
      <el-header height="80px">
        <layout-header></layout-header>
      </el-header>
      <el-main>
        <layout-main></layout-main>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import layoutSidebar from '@/layout/components/sideBar'
import layoutHeader from '@/layout/components/header'
import layoutMain from '@/layout/components/main'

export default {
  name: 'index',
  components: {
    layoutSidebar,
    layoutHeader,
    layoutMain
  }
}
</script>

<style lang="scss" scoped>
@import "index";
</style>
