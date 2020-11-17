<template>
  <div class="header">
    <el-row class="tools">
      <el-col :span="1" class="left bg_shadow">
        <i class="el-icon-s-fold" @click="handleToggleSidebar"></i>
      </el-col>
      <el-col :span="9" class="center">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/profile' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item v-for="(item, index) in breadcrumb" :key="index">
            {{item}}
          </el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
      <el-col :span="14" class="right">
        <el-row justify="space-around">
          <el-col :span="16">
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
            <el-popover placement="bottom" trigger="hover">
              <el-badge :value="16" :max="20" slot="reference">
                <i class="fa fa-bell-o" aria-hidden="true"></i>
              </el-badge>
              <Inform/>
            </el-popover>
          </el-col>
          <el-col :span="2" class="bg_shadow">
            <el-dropdown @command="handleCommand">
              <el-image class="avatar" fit="cover" :src="avatar_path">
              </el-image>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="profile" :disabled="this.$route.fullPath.includes('profile')">个人中心
                </el-dropdown-item>
                <a target="_blank" href="https://github.com/Gluttonys/gluttony_admin">
                  <el-dropdown-item command="github">github</el-dropdown-item>
                </a>
                <el-dropdown-item command="gitee" disabled>码云</el-dropdown-item>
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

import Inform from '@/components/inform/Inform'

export default {
  name: 'index',
  data() {
    return {
      avatar_path,
      keyword: '',
      breadcrumb: [],   /* 面包屑导航 */
    }
  },
  components: {
    Inform
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
          this.$router.push({name: HEADER_OPTION.document})
          break
        case HEADER_OPTION.logout:
          removeToken()
          this.$router.push({name: 'login'})
          break
      }
    },
    toggleScreenFull() {
      screenfull.toggle();
    },
    handleToggleSidebar() {
      this.$store.commit('header/setIsCollapse', !this.$store.getters.isCollapse)
    }
  },
  watch: {
    $route({meta}) {
      this.breadcrumb = meta.superior ? [meta.superior, meta.title] : [meta.title]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "index";
</style>
