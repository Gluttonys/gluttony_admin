<template>
  <div class="dashboard">
    <el-row class="bg_white">
      <el-col :span="18">
        <div ref="sales" class="charts"></div>
        <p class="light">
          共产主义者同盟这个在当时条件下自然只能是秘密团体的国际工人组织，1847年11月在伦敦举行的代的详细的理论和实践的党纲
        </p>
      </el-col>
      <el-col :span="6">
        <div ref="drip" class="charts"></div>
        <el-button size="mini" @click="drip += 1">+</el-button>
        <el-button size="mini" @click="drip -= 1">-</el-button>
      </el-col>
    </el-row>

    <div class="charts_area">
      <div class="block bg_white">
        <div ref="rose" class="charts"></div>
      </div>
      <div class="block bg_white">
        <div ref="gallery" class="charts"></div>
      </div>
      <div class="block bg_white">
        <div ref="dotted" class="charts"></div>
      </div>
    </div>

  </div>
</template>

<script>
import {option} from '@/config/echarts/dashboardLineCharts'
import {dynamicOption} from '@/config/echarts/dripCharts'
import {roseOption} from '@/config/echarts/roseCharts'
import {galleryOption} from '@/config/echarts/galleryCharts'
import {dottedOption} from '@/config/echarts/dottedCharts'

const echarts = require('echarts')
// <component :is="currentRole" />  动态组件
export default {
  name: 'dashboard',
  data() {
    return {
      drip: 5
    }
  },
  mounted() {
    this.initCharts()  /* 初始化图表 */
  },
  methods: {
    initCharts() {
      echarts.init(this.$refs.sales).setOption(option);
      echarts.init(this.$refs.drip).setOption(dynamicOption(this.drip / 10))
      echarts.init(this.$refs.rose).setOption(roseOption)
      echarts.init(this.$refs.gallery).setOption(galleryOption)
      echarts.init(this.$refs.dotted).setOption(dottedOption)
    }
  },
  watch: {
    drip: {
      handler(value) {
        echarts.init(this.$refs.drip).setOption(dynamicOption(value / 10))
      },
      deep: true,       /* 深度监听 */
    }
  }
}
</script>

<style lang="scss" scoped>
@import "dashboard";
</style>
