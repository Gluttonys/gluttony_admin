/* 高德地图 插件 */

export let plugin = [
  // 左下角的比例尺插件
  {
    pName: 'Scale',
    events: {
      init(instance) {
        console.log(instance)
      }
    }
  },
  // 工具条插件
  {
    pName: 'ToolBar',
    events: {
      init(instance) {
        console.log(instance);
      }
    }
  },
  // 地图类型插件， 卫星图
  {
    pName: 'MapType',
    defaultType: 0,
    events: {
      init(instance) {
        console.log(instance);
      }
    }
  },
  // 鹰眼插件， 小地图
  {
    pName: 'OverView',
    events: {
      init(instance) {
        console.log(instance);
      }
    }
  },
  // 定位插件 https://elemefe.github.io/vue-amap/#/zh-cn/plugins/geolocation
  // {
  //   pName: 'Geolocation',
  //   events: {
  //     init(o) {
  //       // o 是高德地图定位插件实例
  //       // 由于 Chrome 、IOS10 等已不再支持非安全域的浏览器定位请求，
  //       // 为保证定位成功率和精度，请尽快升级您的站点到 HTTPS 。
  //       // 浏览器定位可能失效， 请在 https 网站下测试该效果
  //       o.getCurrentPosition((status, result) => {
  //         if (result && result.position) {
  //           let {lng, lat} = result.position
  //           console.log(lng, lat)
  //           self.mapCenter = [lng, lat];
  //           self.markers.push(self.mapCenter)
  //           self.$nextTick();
  //         }
  //       })
  //     }
  //   }
  // }
]
