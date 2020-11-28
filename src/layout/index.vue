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
import Cookie from 'js-cookie'

import {loginWithToken} from '@/network/user'

export default {
  name: 'index',
  components: {
    layoutSidebar,
    layoutHeader,
    layoutMain
  },
  created() {
    this.initUserinfo()
  },
  methods: {
    async initUserinfo() {
      if (!this.$store.getters.isLogin) {
        let token = Cookie.get('token')
        if (Cookie.get('token')) {
          let {userinfo} = await loginWithToken(token)
          this.$store.commit('user/setUserinfo', userinfo)
          console.clear()
        }else {
          this.$router.push({name: 'login'})
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "index";
</style>
