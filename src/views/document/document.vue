<template>
  <div class="document">
    <el-tag>
      <a target="_blank" href="https://github.com/jbaysolutions/vue-grid-layout/blob/master/README-zh_CN.md">
        瀑布流插件 ===> https://github.com/jbaysolutions/vue-grid-layout/blob/master/README-zh_CN.md
      </a>
    </el-tag>

    <grid-layout
        :layout.sync="waterLayout"
        :col-num="12"
        :row-height="30"
        :is-draggable="draggable"
        :is-resizable="resizable"
        :is-mirrored="false"
        :vertical-compact="true"
        :margin="[10, 10]"
        :use-css-transforms="true"
    >

      <grid-item v-for="item in waterLayout"
                 :x="item.x"
                 :y="item.y"
                 :w="item.w"
                 :h="item.h"
                 :i="item.i"
                 :key="item.i">
        <el-image :src="require('@/assets/publicImage/background/mounted.jpg')"></el-image>
      </grid-item>
    </grid-layout>
  </div>
</template>

<script>
import VueGridLayout from 'vue-grid-layout'
import {waterLayout} from '@/config/settings'

export default {
  name: 'document',
  data() {
    return {
      waterLayout,
      draggable: true,
      resizable: true
    }
  },
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem
  }
}
</script>

<style lang="scss" scoped>
.vue-grid-item {
  background-color: rgba(0, 0, 0, .2);
  border-radius:    5px;
  text-align:       center;
  font-size:        40px;
  line-height:      2em;
}

.el-image {
  width:         100%;
  height:        100%;
  border-radius: 5px;
  object-fit:    cover;
}

</style>
