// https://elemefe.github.io/vue-amap/#/zh-cn/services/searchbox

export let search = {
  data: function () {
    return {
      markers: [], /* 存放搜索结果左边点 */
      searchOption: {
        city: "",
        citylimit: true
      },
      mapCenter: [121.59996, 31.197646],    /* 当前地图中心点 */
    };
  },
  methods: {
    onSearchResult(pois) {
      console.log(this.searchOption.city)
      // 清空历史搜索结果
      this.markers = []
      let latSum = 0;
      let lngSum = 0;
      console.log("搜索结果", pois)
      if (pois.length > 0) {   /* 如果查找到搜索结果， 添加到结果列表中去 */
        pois.forEach(poi => {
          let {lng, lat} = poi;
          lngSum += lng;
          latSum += lat;
          this.markers.push([poi.lng, poi.lat]);
        });
        let center = {    // 搜索结果个点的中心
          lng: lngSum / pois.length,
          lat: latSum / pois.length
        };
        this.mapCenter = [center.lng, center.lat];
      }
    }
  }
}
