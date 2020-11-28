<template>
  <div class="map_wrapper">
    <el-amap-search-box
        class="search-box"
        :search-option="searchOption"
        :on-search-result="onSearchResult">
    </el-amap-search-box>

    <el-amap vid="amap" :plugin="plugin" :center="mapCenter">

      <el-amap-marker
          v-for="(marker, index) in markers"
          :key="index"
          :position="marker">
        <!-- 地图上的坐标点 -->
      </el-amap-marker>

      <!-- 信息窗体 开始 -->

      <!-- 信息窗体 结束 -->

    </el-amap>
  </div>
</template>

<script>
import {AMapManager} from 'vue-amap';
import {base} from '@/mixin/map/base'
import {search} from '@/mixin/map/search'
import {plugin} from '@/config/map_plugins'

export default {
  mixins: [base, search],
  data() {
    // eslint-disable-next-line
    let self = this  // 定位回调函数
    return {
      AMapManager,
      plugin,
    };
  }
}

</script>

<style lang="scss" scoped>
.map_wrapper {
  height:   100%;
  width:    100%;
  position: relative;

  .search-box {
    position: absolute;
    top:      25px;
    left:     20px;
  }

  &::v-deep .amap-toolbar {
    bottom: 60px !important;
    top:    auto !important;
  }

  &::v-deep .search-tips {
    width: 100%;
  }

}

</style>
