<template>
  <div class="choose_OA_pro_index">
    <el-collapse v-model="activeNames">
      <el-radio-group v-model="localOAPro" size="small">
        <el-collapse-item title="采购相关" name="1">
          <el-radio label="purchase" border>采购申请</el-radio>
        </el-collapse-item>
        <el-collapse-item title="请假相关" name="2">
          <el-radio label="1" border>出差申请</el-radio>
          <el-radio label="4" border>请假申请</el-radio>
        </el-collapse-item>
        <el-collapse-item title="物品相关" name="3">
          <el-radio label="3" border>报销申请</el-radio>
          <el-radio label="5" border>物品领用</el-radio>
        </el-collapse-item>
        <el-collapse-item title="其他审批" name="4">
          <el-radio label="6" border>辞职申请</el-radio>
        </el-collapse-item>
      </el-radio-group>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: 'chooseOAProIndex',
  props: {
    oaPro: {
      type: String
    }
  },
  data() {
    return {
      /*
      * localOAPro 要和对应的oa vue 文件名相对应
      * el-radio 中的 label 属性
      * */
      localOAPro: '',
      activeNames: ['1', '2', '3', '4']
    }
  },
  mounted() {
    this.localOAPro = this.oaPro
  },
  watch: {
    localOAPro(value) {
      this.$emit('update:oaPro', value)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "chooseOAProIndex";
</style>
