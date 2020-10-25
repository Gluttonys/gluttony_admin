<template>
  <div class="content">
    <transition
        enter-active-class="animate__animated animate__backInLeft animate__delay-1s"
        leave-active-class="animate__animated animate__fadeOutRight">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
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
  box-shadow:       $base-box-shadow-plane;
  padding:          10px;
  box-sizing:       border-box;
}
</style>
