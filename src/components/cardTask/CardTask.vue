<template>
  <div class="card_task">
    <header>
      <div class="title" v-text="data.title"></div>
      <el-tag :type="localStatus" v-text="data.status" size="mini" ></el-tag>
    </header>
    <p class="content" v-text="data.content"></p>
  </div>
</template>

<script>
export default {
  name: 'CardTask',
  props: {
    data: {
      type: Object,
      require: true
    }
  },
  data() {
    return {
      localStatus: ''
    }
  },
  mounted() {
    this.getType()
  },
  methods: {
    getType() {
      switch (this.data.status) {
        case '未开始':
          this.localStatus = 'info'
          break
        case '马上到期':
          this.localStatus = 'danger'
      }
      if (this.data.status.includes("已耗时")) {
        this.localStatus = 'warning'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "cardTask";
</style>
