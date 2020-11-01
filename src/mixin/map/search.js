// https://elemefe.github.io/vue-amap/#/zh-cn/services/searchbox

export let search = {
  data: function () {
    return {
      markers: [], /* 存放搜索结果左边点 */
      searchOption: {
        city: "",
        citylimit: true
      },
      mapCenter: null
    };
  },
  methods: {
    addMarker: function () {
      let lng = 121.5 + Math.round(Math.random() * 1000) / 10000;
      let lat = 31.197646 + Math.round(Math.random() * 500) / 10000;
      this.markers.push([lng, lat]);
    },
    onSearchResult(pois) {
      let latSum = 0;
      let lngSum = 0;
      if (pois.length > 0) {
        pois.forEach(poi => {
          let {lng, lat} = poi;
          lngSum += lng;
          latSum += lat;
          this.markers.push([poi.lng, poi.lat]);
        });
        let center = {
          lng: lngSum / pois.length,
          lat: latSum / pois.length
        };
        this.mapCenter = [center.lng, center.lat];
      }
    }
  }
}
