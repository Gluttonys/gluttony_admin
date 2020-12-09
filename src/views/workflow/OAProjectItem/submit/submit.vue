<template>
  <div class="wrapper">
    <el-switch
        v-model="isUrgent"
        active-text="加急审批"
        inactive-text="常规通道">
    </el-switch>
  </div>
</template>

<script>
export default {
  name: 'submit',
  data() {
    return {
      isUrgent: false
    }
  }
}
</script>

<style lang="scss" scoped>

  .wrapper {
    margin-top: 100px;
    min-height: 200px;
    border-radius: 5px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, .3);
    padding: 20px;
  }
</style>
