import Vue from 'vue'
import VueAMap from 'vue-amap';
import {gaode_map_ak} from '@/config/settings'

Vue.use(VueAMap)

VueAMap.initAMapApiLoader({
  key: gaode_map_ak,
  plugin: [
    'Autocomplete',
    'PlaceSearch',
    'Scale',
    'OverView',
    'ToolBar',
    'MapType',
    'PolyEditor',
    'AMap.CircleEditor'
  ],
  v: '1.4.4'
})
