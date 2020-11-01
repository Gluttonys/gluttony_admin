<template>
  <div ref="charts" class="charts"></div>
</template>

<script>

import {getOption} from '@/views/charts/charts01/option'

const echarts = require('echarts')

export default {
  name: 'chartsOne',
  data() {
    let lineData = [], stripData = [], xAxisData = []
    for (let i = 0; i < 24; i++) {   /* 填充假数据 */
      let data = ~~(Math.random() * 100)
      lineData.push(data)
      data += ~~(Math.random() * 20)
      stripData.push(100)
      xAxisData.push(`${i.toString().padStart(2, '0')}:00`)
    }
    return {
      lineData,
      stripData,
      xAxisData
    }
  },
  mounted() {
    echarts.init(this.$refs.charts).setOption(getOption(this.lineData, this.stripData, this.xAxisData));
  }
}
</script>

<style lang="scss" scoped>
.charts {
  height: 100%;
}
</style>
