<template>
  <div class="card_wrapper" :class="{required: isRequire}" @click="handleEmitClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CardWrapper',
  data() {
    return {
      isRequire: false
    }
  },
  methods: {
    handleEmitClick() {
      this.isRequire = true
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "cardWrapper";
</style>
