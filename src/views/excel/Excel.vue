<template>
  <div class="excel">

    <el-input
        v-model="keyword"
        @keypress.enter.native.prevent="handleSearch"
        placeholder="请输入姓名搜索"/>
    <el-button @click="handleSearch" size="small" type="success">
      <i class="fa fa-search" aria-hidden="true"></i>
      搜索
    </el-button>

    <el-button size="small" type="primary" @click="export2Excel">
      <i class="fa fa-file-excel-o"></i>
      导出到excel
    </el-button>
    <el-button size="small" :disabled="!multipleSelection.length" type="danger">
      <i class="fa fa-trash"></i>
      批量删除
    </el-button>

    <el-table
        id="table"
        :data="smallAmountData"
        style="width: 100%"
        stripe
        highlight-current-row
        @selection-change="handleSelectionChange">
      <el-table-column
          type="selection"
          width="55">
      </el-table-column>
      <el-table-column
          label="序号"
          type="index"
          width="70">
      </el-table-column>
      <el-table-column
          fixed
          prop="date"
          label="日期"
          width="150">
      </el-table-column>
      <el-table-column
          prop="name"
          label="姓名"
          width="120">
      </el-table-column>
      <el-table-column
          prop="province"
          label="省份"
          width="120">
      </el-table-column>
      <el-table-column
          prop="city"
          label="市区"
          width="120">
      </el-table-column>
      <el-table-column
          prop="address"
          label="地址"
          width="300">
        <template slot-scope="scope">
          <el-popover
              placement="top-start"
              width="200"
              :content="scope.row.address">
            <el-link slot="reference">{{scope.row.address}}</el-link>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
          prop="zip"
          label="邮编"
          width="120">
      </el-table-column>
      <el-table-column
          prop="status"
          label="状态"
          width="120">
        <template slot-scope="scope">
          <el-tag :type="getStatus(scope.row.status)">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
          prop="position"
          label="职位"
          width="120">
        <template slot-scope="scope">
          <el-link :type="getPosition(scope.row.position)">{{ scope.row.position }}</el-link>
        </template>
      </el-table-column>
      <el-table-column
          fixed="right"
          label="操作"
          width="240">
        <template slot-scope="scope">
          <el-button
              @click="handleEditTable(scope)"
              icon="fa fa-pencil"
              size="mini">
            编辑
          </el-button>
          <el-button
              size="mini"
              type="danger"
              icon="fa fa-exclamation-triangle"
              @click.native.prevent="deleteRow(scope.$index, tableData)">
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
        @close="handleDialogClose"
        title="填写表单修改内容"
        :visible.sync="dialogVisible"
        width="30%">
      <el-form label-width="80px" :model="currentEditorData">
        <el-form-item label="日期">
          <el-date-picker
              @change="handleDateChange"
              v-model="currentEditorData.date"
              type="date"
              placeholder="选择日期">
          </el-date-picker>
        </el-form-item>

        <el-form-item label="姓名">
          <el-input v-model="currentEditorData.name"></el-input>
        </el-form-item>

        <el-form-item label="地区">
          <el-cascader :options="options" v-model="currentEditorAddress" @change="handleCascaderChange"
                       clearable></el-cascader>
        </el-form-item>

        <el-form-item label="邮编">
          <el-input v-model="currentEditorData.zip"></el-input>
        </el-form-item>

        <el-form-item label="职位">
          <el-select v-model="currentEditorData.position" placeholder="请选择">
            <el-option
                v-for="item in positionList"
                :key="item"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="currentEditorData.status" placeholder="请选择">
            <el-option
                v-for="item in statusList"
                :key="item"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </el-dialog>

    <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[3, 5, 8, 10, 20, 50, 100]"
        :page-size="currentPageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="searchAmountData ? searchAmountData.length : tableData.length">
    </el-pagination>

  </div>
</template>

<script>

import {options, dict} from '@/config/area'
import {formatTimestamp} from '@/utils/time'

export default {
  name: 'Excel',
  data() {
    return {
      options,
      tableData: [],            // 全部数据列表
      smallAmountData: [],      // 当前页数据列表
      searchAmountData: null,   // 搜索结果列表
      multipleSelection: [],    // 多选列表
      dialogVisible: false,
      currentEditorData: {},
      currentEditorIndex: 0,
      currentEditorAddress: '',
      currentPage: 1,
      currentPageSize: 10,
      keyword: '',
      positionList: ['总经理', '产品经理', '测试工程师', '前端工程师', '后端工程师', 'HR'],
      statusList: ['在职', '离职', '出差']
    }
  },
  mounted() {
    let loadingInstance = this.$loading({
      /* https://element.eleme.cn/#/zh-CN/component/loading */
      target: '#table',
      text: '正在加载数据， 请稍后~',
      // text	显示在加载图标下方的加载文案
      // spinner	自定义加载图标类名
      // background	遮罩背景色
    })

    setTimeout(() => {
      for (let i = 1; i < 31; i++) {
        this.tableData.push(
            {
              date: `2020-11-${i}`,
              name: '谢先生',
              province: '辽宁',
              city: '大连',
              address: '甘井子区',
              zip: 200333,
              position: this.positionList[Math.floor(Math.random() * 6)],
              status: this.statusList[Math.floor(Math.random() * 3)]
            }
        )
      }
      this.handleCurrentChange(1)

      this.$nextTick(() => {
        loadingInstance.close()
      })
    }, 1000)
  },
  methods: {
    /* 生成 excel 表格 */
    formatJson: (filterVal, jsonData) => jsonData.map(strip => filterVal.map(key => strip[key])),
    export2Excel() {
      /*
      * require.ensure 方法
      * https://zhuanlan.zhihu.com/p/82918552
      * webpack使用require.ensure将vue页面打包成独立的chunk文件，也可以将多个vue页面合并成一个chunk文件，以实现生产环境按需加载。
      * */
      require.ensure([], () => {
        const {export_json_to_excel} = require('@/plugins/2Excel/Export2Excel')
        const tHeader = ['日期', '姓名', '省', '市', '地区', '邮编', '职位', '状态']
        const filterVal = ['date', 'name', 'province', 'city', 'address', 'zip', 'position', 'status']
        const data = this.formatJson(filterVal, this.tableData)
        export_json_to_excel(tHeader, data, '员工表')
      })
    },

    deleteRow(index, rows) {
      rows.splice(index, 1);
    },

    handleSelectionChange(val) {
      this.multipleSelection = val;
    },

    handleSearch() {
      // 单机搜索按钮
      if (this.keyword.trim()) {
        this.searchAmountData = []
        this.tableData.forEach(item => {
          if (item.name.includes(this.keyword)) {
            this.searchAmountData.push(item)
          }
        })
        this.handleCurrentChange(1)
        this.$notify({
          title: '提示',
          message: `搜索查询结束， 共搜索到${this.searchAmountData.length}条数据~`,
          type: 'success'
        })
      } else {
        this.searchAmountData = null
        this.$notify({
          title: '警告',
          message: '请输入关键字查询~',
          type: 'warning'
        })
      }
    },

    getPosition(position) {
      if (position === '总经理') {
        return 'success'
      } else if (position === '测试工程师') {
        return 'info'
      } else if (position === '产品经理') {
        return 'warning'
      } else if (position === '前端工程师') {
        return ''
      } else {
        return 'danger'
      }
    },

    getStatus(status) {
      if (status === '在职') {
        return 'success'
      } else if (status === '离职') {
        return 'danger'
      } else {
        return ''
      }
    },

    handleEditTable({$index, row}) {
      /*
      * 打击编辑按钮
      * */
      this.currentEditorIndex = $index
      this.currentEditorData = row
      this.dialogVisible = true
    },

    handleDateChange(load) {
      /*
      * 编辑数据
      * */
      this.currentEditorData.date = formatTimestamp(load, 'yyyy-MM-dd')
    },

    handleCascaderChange([pro, cit, add]) {
      /*
      * 多级选择器确定时回调
      * */
      // value ["anhui", "fuyang", "yingshang", __ob__: Observer]
      this.tableData[this.currentEditorIndex]['province'] = dict[pro]
      this.tableData[this.currentEditorIndex]['city'] = dict[cit]
      this.tableData[this.currentEditorIndex]['address'] = dict[add]
    },

    handleDialogClose() {
      /*
      * 关闭模态框回调
      * */
      console.log('dialog closed')
    },

    handleSizeChange(val) {
      this.currentPageSize = val
      this.handleCurrentChange(this.currentPage)
    },

    handleCurrentChange(val) {
      this.smallAmountData = this.searchAmountData
          ? this.searchAmountData.slice((val - 1) * this.currentPageSize, val * this.currentPageSize)
          : this.tableData.slice((val - 1) * this.currentPageSize, val * this.currentPageSize)
    }
  },

  watch: {
    currentEditorData({province, city, address}) {
      /*
      * 动态修改当前被修改数据form中的级联选择器
      * */
      let keysList = Object.keys(dict)
      Object.values(dict).forEach((val, index) => {
        if ([province, city, address].includes(val)) {
          if (val === province) {
            province = keysList[index]
          } else if (val === city) {
            city = keysList[index]
          } else {
            address = keysList[index]
          }
        }
      })
      this.currentEditorAddress = [province, city, address]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "excel";
</style>
