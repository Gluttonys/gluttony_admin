<template>
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped lang="scss">
.content {
  height:           100%;
  overflow-y:       auto;
  background-color: darken($base-menu-color, 5%);
  box-shadow: $base-box-shadow-plane;
}
</style>
