<template>
  <div class="excel">
    <el-table
        :data="tableData"
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
          <el-cascader :options="options" clearable></el-cascader>
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
  </div>
</template>

<script>

import {options} from '@/config/area'
import {formatTimestamp} from '@/utils/time'

export default {
  name: 'Excel',
  data() {
    return {
      options,
      tableData: [],
      dialogVisible: false,
      currentEditorData: {},
      positionList: ['总经理', '产品经理', '测试工程师', '前端工程师', '后端工程师', 'HR'],
      statusList: ['在职', '离职', '出差']
    }
  },
  mounted() {
    for (let i = 1; i < 31; i++) {
      this.tableData.push(
          {
            date: `2020-11-${i}`,
            name: '谢先生',
            province: '安徽',
            city: '阜阳市',
            address: '阜南县方集镇大张湾村吴庄31号',
            zip: 200333,
            position: this.positionList[Math.floor(Math.random() * 6)],
            status: this.statusList[Math.floor(Math.random() * 3)]
          }
      )
    }
  },
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
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
    handleEditTable({row}) {
      this.currentEditorData = row
      this.dialogVisible = true
    },
    handleDateChange(load) {
      this.currentEditorData.date = formatTimestamp(load, 'yyyy-MM-dd')
    }
  },
}
</script>

<style lang="scss" scoped>
@import "excel";
</style>
