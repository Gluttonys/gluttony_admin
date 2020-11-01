<template>
  <div ref="charts" class="charts"></div>
</template>

<script>
import {getOption} from '@/views/charts/charts02/option'
const echarts = require('echarts')
export default {
  name: 'chartsTwo',
  data() {
    let xAxisData = [];
    let data = [];
    let data2 = [];
    for (let i = 0; i < 100; i++) {
      xAxisData.push(i);
      data.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      data2.push((Math.sin(i / 5) * (i / 5 + 10) + i / 6) * 3);
    }
    return {
      xAxisData,
      data,
      data2
    }
  },
  mounted() {
    echarts.init(this.$refs.charts).setOption(getOption(this.data, this.data2, this.xAxisData));
  }
}
</script>

<style lang="scss" scoped>
  .charts {
    height: 100%;
  }
</style>
