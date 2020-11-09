/* 高德地图 插件 */

export let plugin = [
  'ToolBar',
  {
    pName: 'MapType',
    defaultType: 0,
    events: {
      init(o) {
        console.log(o);
      }
    }
  }
]
