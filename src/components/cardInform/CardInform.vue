<template>
  <div class="card_inform">
    <div class="type" :class="data.type">
      <i class="fa" :class="type2icon"></i>
    </div>
    <div class="content">
      <div class="details" v-text="data.content"></div>
      <div class="time" v-text="data.date"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardInform',
  props: {
    data: {
      type: Object,
      require: true
    }
  },
  data() {
    return {
      type2icon: ''
    }
  },
  mounted() {
    this.toGetType2icon()
  },
  methods: {
    toGetType2icon() {
      let {type} = this.data
      switch (type) {
        case 'type-1':
          this.type2icon = 'fa-commenting'
          break
        case 'type-2':
          this.type2icon = 'fa-gift'
          break
        case 'type-3':
          this.type2icon = 'fa-shopping-bag'
          break
        case 'type-4':
          this.type2icon = 'fa-exclamation-triangle'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "cardInform";
</style>
