<template>
  <div class="map_wrapper">
    <el-amap-search-box class="search-box" :search-option="searchOption" :on-search-result="onSearchResult"></el-amap-search-box>
    <el-amap vid="amap">
      <el-amap-marker
          v-for="(marker, index) in markers"
          :key="index"
          :position="marker">
      </el-amap-marker>
    </el-amap>
  </div>
</template>

<script>
import { AMapManager } from 'vue-amap';
import {base} from '@/mixin/map/base'
import {search} from '@/mixin/map/search'

export default {
  mixins: [base, search],
  data() {
    return {
      AMapManager,
    };
  }
}

</script>

<style lang="scss" scoped>
.map_wrapper {
  height: 100%;
  width: 100%;
  position: relative;

  .search-box {
    position: absolute;
    top: 25px;
    left: 20px;
  }
}

</style>
