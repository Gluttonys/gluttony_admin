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

    <!-- 杂项 开始 -->
    <div class="sundry">
      <div class="employee">
        <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">

          <el-table-column type="selection" width="55"></el-table-column>

          <el-table-column label="日期" width="120">
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
          </el-table-column>

          <el-table-column label="姓名" width="80">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top">
                <p>姓名: {{ scope.row.name }}</p>
                <p>住址: {{ scope.row.address }}</p>
                <div slot="reference" class="name-wrapper">
                  <el-tag :type="computedStatus(scope.row.status)" size="medium">{{ scope.row.name }}</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>

          <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>

          <el-table-column prop="status" width="80" label="状态">
            <template slot-scope="scope">
              <el-tag :type="computedStatus(scope.row.status)" size="medium">{{ scope.row.status }}</el-tag>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <div class="todo_list">

      </div>

      <div class="post_card">


      </div>
    </div>
    <!-- 杂项 结束 -->
  </div>
</template>

<script>
import {option} from '@/config/echarts/dashboardLineCharts'
import {roseOption} from '@/config/echarts/roseCharts'
import {galleryOption} from '@/config/echarts/galleryCharts'
import {dottedOption} from '@/config/echarts/dottedCharts'
import {tableData} from '../../../mockData/tableData'

const echarts = require('echarts')

export default {
  name: 'dashboard',
  data() {
    return {
      // drip: 5,
      tableData,
      multipleSelection: []
    }
  },
  mounted() {
    this.initCharts()  /* 初始化图表 */
  },
  methods: {
    initCharts() {
      echarts.init(this.$refs.sales).setOption(option);
      echarts.init(this.$refs.rose).setOption(roseOption)
      echarts.init(this.$refs.gallery).setOption(galleryOption)
      echarts.init(this.$refs.dotted).setOption(dottedOption)
    },
    handleSelectionChange(val) {
      /* 表格选项发生变化时的回调 */
      this.multipleSelection = val;
    },
    computedStatus(status) {
      /*
      * 计算员工状态， 返回合理的 tag 颜色值 （type）
      * */
      let result = "success"
      switch (status) {
        case "在岗":
          break
        case "出差":
          result = "wraning"
          break
        case "离职":
          result = "danger"
          break
      }
      return result
    }
  }
}
</script>

<style lang="scss" scoped>
@import "dashboard";
</style>
