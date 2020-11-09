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
          :open-delay="1000"
          trigger="hover"
          :content="data.desc">
        <p class="tip" slot="reference" v-text="data.desc"></p>
      </el-popover>

    </header>

    <div class="btn_wrapper" v-if="isExamineAndApprove">
      <div class="btn agree"><i class="fa fa-check" aria-hidden="true"></i> 同意</div>
      <div class="btn turnDown"><i class="fa fa-times" aria-hidden="true"></i> 驳回</div>
    </div>
    <el-steps :active="data.step" align-center finish-status="success" v-else>
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
    },
    isExamineAndApprove: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "OAStateusCard";
</style>
