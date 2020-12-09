<template>
  <el-tabs type="border-card">
    <el-tab-pane label="发起审批">
      <el-steps :active="active" align-center>
        <el-step title="选择OA项目"></el-step>
        <el-step title="填写必要信息"></el-step>
        <el-step title="添加审批人"></el-step>
        <el-step title="提交信息"></el-step>
      </el-steps>
      <keep-alive>
        <component :is="currentComponent" :oaPro.sync="oaPro"></component>
      </keep-alive>
      <el-button @click="stepsSub">上一步</el-button>
      <el-button @click="stepsAdd">{{btnMess}}</el-button>
    </el-tab-pane>
    <el-tab-pane class="css_status" label="OA 状态">
      <OAStateusCard v-for="item in 8" :key="item" :data="statusCardData"></OAStateusCard>
    </el-tab-pane>
    <el-tab-pane class="css_status" label="待我审批">
      <OAStateusCard v-for="item in 8" :key="item" is-examine-and-approve :data="statusCardData"></OAStateusCard>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import chooseOAProIndex from '@/views/workflow/OAProjectItem/chooseOAProIndex'
import purchase from '@/views/workflow/OAProjectItem/items/purchase/purchase'
import approver from '@/views/workflow/OAProjectItem/approver/approver'
import submit from '@/views/workflow/OAProjectItem/submit/submit'

import OAStateusCard from '@/components/OAStateusCard/OAStateusCard'

import {bus} from '@/globalBus/bus'
// import {OAProject} from '@/config/settings'

export default {
  name: 'workflow',
  components: {
    chooseOAProIndex,
    purchase,
    approver,
    submit,
    OAStateusCard
  },
  data() {
    return {
      formData: null,                        /* 提交的数据对象 */
      oaPro: '',                             /* 当前选择的 oa 项目 */
      active: 1,                             /* steps */
      currentComponent: 'chooseOAProIndex',  /* 动态组件 */
      statusCardData: {
        avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1791190915,4204258858&fm=26&gp=0.jpg',
        name: 'gluttony',
        time: '2020-11-08',
        type: '采购审批',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, totam!\n' +
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, totam!\n' +
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, totam!\n' +
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, totam!\n' +
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, totam!',
        step: Math.ceil(Math.random() * 4),
        urgent: Math.random() > 0.5
      },
      btnMess: '下一步'
    }
  },
  mounted() {
    bus.$on('informOAFormWithData', data => this.formData = data)
  },
  methods: {
    stepsAdd() {
      if (!this.oaPro.trim()) {
        this.$message.warning('请选择一个oa项目')
      }
      if (this.active++ === 4) {
        // this.$message.success("点击了提交")
        this.$notify({
          type: 'success',
          message: '项目已开始发起审批！'
        })
        this.active = 1

      }
    },
    stepsSub() {
      if (this.active > 1) this.active--
    }
  },
  watch: {
    active(value) {
      switch (value) {
        case 1:
          this.btnMess = '下一步'
          this.currentComponent = 'chooseOAProIndex'
          break
        case 2:
          this.btnMess = '下一步'
          this.currentComponent = this.oaPro
          break
        case 3:
          this.btnMess = '下一步'
          if (this.formData) {
            this.currentComponent = 'approver'
          } else {
            this.$message.error('单机下方审核按钮， 信息校验合法后， 再次点击下一步')
            this.active = 2
          }
          break
        case 4:
          this.currentComponent = 'submit'
          this.btnMess = '提交'
          break
      }
    }
  },
  destroyed() {
    bus.$off('informOAFormWithData')
  }
}
</script>

<style lang="scss" scoped>
@import "workflow";
</style>
