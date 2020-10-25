<template>
  <div class="guide">
    <el-alert
        title="这个导航使用了一个叫做 driver.js 的插件。 地址： https://github.com/kamranahmedse/driver.js"
        type="error">
    </el-alert>

    <el-button type="info" @click.prevent.stop="guide">开启引导</el-button>

    <div class="icon_area">
      <div :id="`icon-${item}`" class="icon_item" v-for="item in 100" :key="item">
        <i class="fa fa-address-card-o" aria-hidden="true"></i>
      </div>
    </div>
  </div>
</template>

<script>
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'
import steps from '@/views/guide/steps'

export default {
  name: 'guide',
  data() {
    return {
      driver: null
    }
  },
  mounted() {
    this.driver = new Driver()
  },
  methods: {
    guide() {
      this.driver.defineSteps(steps)
      this.driver.start()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "guide";
</style>
