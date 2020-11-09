<template>
  <div class="OAStateusCard">
    <header>
      <el-avatar :src="data.avatar"></el-avatar>
      <div>
        <p><i class="fa fa-user" aria-hidden="true"></i> {{data.name}}</p>
        <p><i class="fa fa-clock-o" aria-hidden="true"></i> {{data.time}}</p>
        <p><i class="fa fa-bookmark" aria-hidden="true"></i> {{data.type}}</p>
      </div>

      <el-popover
          placement="top-start"
          title="备注描述"
          width="200"
          trigger="hover"
          :content="data.desc">
        <p class="tip" slot="reference" v-text="data.desc"></p>
      </el-popover>

    </header>
    <el-steps :active="data.step" align-center finish-status="success">
      <el-step title="上级审核"></el-step>
      <el-step title="部门审核"></el-step>
      <el-step title="副总审核"></el-step>
      <el-step title="老总审核"></el-step>
    </el-steps>

    <div class="leftoverMaterial" v-if="Math.random() > 0.5">
      加急审批
    </div>
  </div>
</template>

<script>
export default {
  name: 'OAStateusCard',
  props: {
    data: {
      type: Object,
      require: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "OAStateusCard";
</style>
