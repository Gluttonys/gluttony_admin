<template>
  <div class="card_mess">
    <el-avatar :src="data.avatar"></el-avatar>
    <div class="content">
      <div class="title" v-text="data.title"></div>
      <div class="detail" v-text="data.content"></div>
      <div class="time" v-text="data.date"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardMess',
  props: {
    data: {
      type: Object,
      require: true
    }
  },

}
</script>

<style lang="scss" scoped>
@import "cardMess";
</style>
