<template>
  <div class="mess_card">
    <div class="card_header">
      <div class="avatar">
        <el-image fit="cover" :src="messData.avatarImagePath"></el-image>
      </div>
      <div class="info">
        <div class="name" v-text="messData.name"></div>
        <div class="time light" v-text="parseTime(messData.time, '{y}-{m}-{d} {h}:{i} 星期{a}')"></div>
      </div>
    </div>

    <div class="content" v-text="messData.mess"></div>

    <div class="operation">
      <div class="oper_item">
        <i class="fa fa-share-alt" aria-hidden="true"></i> 分享
      </div>
      <div class="oper_item">
        <i class="fa fa-thumbs-up" aria-hidden="true"></i> 点赞
      </div>
    </div>

  </div>
</template>

<script>
import {formatTime, parseTime} from '@/utils/time'

export default {
  name: 'messCard',
  props: {
    messData: {
      type: Object,
      require: true
    }
  },
  mounted() {
    console.log(this.messData)
  },
  methods: {
    formatTime,parseTime
  }
}
</script>

<style lang="scss" scoped>
@import 'messCard';
</style>
