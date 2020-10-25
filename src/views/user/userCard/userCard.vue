<template>
  <div class="user_card">
    <div class="header">About me</div>

    <div class="info_area">
      <div class="avatar">
        <el-image fit="cover" :src="avatar_path"></el-image>
        <div class="stress">早上好啊！</div>
        <div class="light">管理员</div>
      </div>
      <div class="stress">Super admin</div>
      <div class="light">admin</div>
    </div>

    <div class="section">
      <div class="part">
        <div class="stress">
          <i class="fa fa-graduation-cap" aria-hidden="true"></i> 教育
        </div>
        <hr>
        <p class="light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corporis cupiditate, debitis dolorem .</p>
      </div>
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

import {avatar_path} from '../../../../mockData/const'

export default {
  name: 'userCard',
  data() {
    return {
      avatar_path
    }
  }
}
</script>

<style lang="scss" scoped>
@import "userCard";
</style>
