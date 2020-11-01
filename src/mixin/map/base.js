// import {plugin} from '@/config/map_plugins'

export let base = {
  data() {
    return {
      zoom: 12,
      center: [121.59996, 31.197646],
      events: {
        init: (o) => {
          console.log(o.getCenter())
          console.log(this.$refs.map.$$getInstance())
          o.getCity(result => {
            console.log(result)
          })
        },
        'moveend': () => {
        },
        'zoomchange': () => {
        },
        'click': (e) => {
          console.log(e)
          alert('map clicked');
        }
      },
      // plugin
    }
  }
}
