<template>
  <div class="profile">
    <el-row>
      <el-col :span="6">
        <user-card></user-card>
      </el-col>
      <el-col :span="18">
        <info-panel></info-panel>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import userCard from '@/views/user/userCard/userCard'
import infoPanel from '@/views/user/infoPanel/infoPanel'

export default {
  name: 'profile',
  components: {
    userCard, infoPanel
  }
}
</script>

<style lang="scss" scoped>
@import "profile";
</style>
