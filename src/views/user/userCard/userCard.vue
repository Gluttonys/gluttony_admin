<template>
  <div class="user_card">
    <div class="header">About me</div>

    <div class="info_area">
      <div class="avatar">
        <el-image fit="cover" :src="userinfo ? userinfo['avatar']: ''"></el-image>
        <div class="stress">早上好啊！</div>
        <div class="light">管理员</div>
      </div>
      <div class="stress" v-text="userinfo ? userinfo['nickname']: ''"></div>
      <div class="light" v-text="userinfo ? userinfo['username']: ''"></div>
    </div>

    <div class="section">
      <div class="part">
        <div class="stress">
          <i class="fa fa-graduation-cap" aria-hidden="true"></i> 教育
        </div>
        <hr>
        <p class="light" v-text="userinfo ? userinfo['desc']: ''"></p>
      </div>
      <br>
      <br>
      <div class="part">
        <div class="stress">
          <i class="fa fa-paint-brush" aria-hidden="true"></i> 技能
        </div>
        <hr>
        <div class="light">Vue</div>
        <el-progress :percentage="50" status="warning"></el-progress>
        <div class="light">Javascript</div>
        <el-progress :percentage="60" status="warning"></el-progress>
        <div class="light">HTML</div>
        <el-progress :percentage="90" status="success"></el-progress>
        <div class="light">CSS</div>
        <el-progress :percentage="70"></el-progress>
        <div class="light">JAVA</div>
        <el-progress :percentage="30" status="exception"></el-progress>
        <div class="light">Python</div>
        <el-progress :percentage="70"></el-progress>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters(['userinfo', 'isLogin']),
  }
}
</script>

<style lang="scss" scoped>
@import "userCard";
</style>
