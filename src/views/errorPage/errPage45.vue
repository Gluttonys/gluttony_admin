<template>
  <div class="wrapper">
    <div class="title">OOP, 500!!</div>
    <P class="tip">
      <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
      服务器内部错误, 请尽快联系管理员小哥哥修理。
    </P>
  </div>
</template>

<script>
export default {
  name: 'errPage45'
}
</script>

<style lang="scss" scoped>

.wrapper {
  height:           100%;
  background-image: linear-gradient(45deg, #393b3a, #686968);
  padding-left:     50px;

  .title {
    font-size:           80px;
    line-height:         2.5em;
    font-weight:         900;
    color:               #cbab61;
    @include no_operating();
    @include inverted_image(-100px);
  }

  .tip {
    position:    absolute;
    top:         50%;
    left:        50%;
    transform:   translate(-50%, -50%);
    color:       #cbab61;
    line-height: 2em;
    font-size:   20px;
  }

}

</style>
