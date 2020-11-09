<template>
  <div class="content">
    <div class="tip">Oops,  404 !!</div>
    <p class="mess">We can't seem to find the page</p>
    <br>
    <br>
    <br>
    <br>
    <br>
    <p class="mess">you can go to the following website</p>
    <ul class="list">
      <li>
        <router-link :to="{name: 'profile'}">个人中心</router-link>
      </li>
      <li>
        <router-link :to="{name: 'dashboard'}">仪表盘</router-link>
      </li>
    </ul>

    <el-image :src="require('@/assets/publicImage/errorImage/401.gif')"></el-image>
  </div>
</template>

<script>
export default {
  name: 'errPage44'
}
</script>

<style lang="scss" scoped>
.content {
  background-color: $base-color-white;
  padding:          50px;
  position:         relative;

  .tip {
    font-weight: 700;
    font-size:   $font-size-huge * 3;
  }

  .mess {
    margin-top: 30px;
    font-size:  $font-size-huge * 2;
  }

  .el-image {
    position: absolute;
    right:    300px;
    bottom:   50px;
  }

  .list {
    font-size: 24px;
    line-height: 1.5em;
  }

}

</style>
