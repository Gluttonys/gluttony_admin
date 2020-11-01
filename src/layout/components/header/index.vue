<template>
  <div class="header">
    <el-row class="tools">
      <el-col :span="1" class="left bg_shadow">
        <i class="el-icon-s-fold"></i>
      </el-col>
      <el-col :span="9" class="center">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/' }">活动管理</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/' }">活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
      <el-col :span="14" class="right">
        <el-row justify="space-around">
          <el-col :span="18">
            <el-input
                placeholder="请输入内容"
                suffix-icon="el-icon-search"
                v-model="keyword">
            </el-input>
          </el-col>
          <el-col :span="2" class="bg_shadow">
            <i class="fa fa-arrows-alt" aria-hidden="true" @click="toggleScreenFull"></i>
          </el-col>
          <el-col :span="2" class="bg_shadow">
            <i class="fa fa-text-height" aria-hidden="true"></i>
          </el-col>
          <el-col :span="2" class="bg_shadow">
            <el-dropdown @command="handleCommand">
              <el-image class="avatar" fit="cover" :src="avatar_path">
              </el-image>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="profile">个人中心</el-dropdown-item>
                <el-dropdown-item command="github">github</el-dropdown-item>
                <el-dropdown-item command="gitee">码云</el-dropdown-item>
                <el-dropdown-item command="document">文档</el-dropdown-item>
                <el-dropdown-item command="logout">退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

    <el-row class="nav">
      <el-col :span="24">
        <el-tag
            v-for="(tag, index) in tagList"
            :key="index"
            size="small"
            :type="tag[0] === currentTag ? 'success' : 'info'"
            @close="handleDelTag(tag[0])"
            @click="$router.replace({name: tag[1]})"
            :closable="$store.getters.tagList.length !== 1"
            >
          {{tag[0] }}
        </el-tag>
      </el-col>
    </el-row>
  </div>
</template>

<script>

import {HEADER_OPTION} from '@/config/settings'
import {avatar_path} from '../../../../mockData/const'

import screenfull from 'screenfull'         /* 网页最大化插件 */
import {removeToken} from '@/utils/auth'
import {mapGetters} from 'vuex'

export default {
  name: 'index',
  data() {
    return {
      avatar_path,
      keyword: '',
    }
  },
  created() {
    console.log(this.tagList)
  },

  computed: {
    ...mapGetters(['tagList', 'currentTag'])
  },

  methods: {
    handleDelTag(tag) {
      this.$store.commit('global/toRemoveTag', tag)
    },
    handleCommand(command) {
      switch (command) {
        case HEADER_OPTION.profile:
          this.$router.push({name: HEADER_OPTION.profile})
          break
        case HEADER_OPTION.github:
          break
        case HEADER_OPTION.gitee:
          break
        case HEADER_OPTION.document:
          break
        case HEADER_OPTION.logout:
          removeToken()
          this.$router.push({name: 'login'})
          break
      }
    },
    toggleScreenFull() {
      screenfull.toggle();
    }
  }
}
</script>

<style lang="scss" scoped>
@import "index";
</style>
