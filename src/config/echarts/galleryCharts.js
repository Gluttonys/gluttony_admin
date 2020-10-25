let colors = [
  '#2ec7c9',
  '#b6a2de',
  '#5ab1ef',
  '#ffb980',
  '#d87a80',
  '#8d98b3',
  '#e5cf0d',
  '#97b552',
  '#95706d',
  '#dc69aa',
  '#07a2a4',
  '#9a7fd1',
  '#588dd5',
  '#f5994e',
  '#c05050',
  '#59678c',
  '#c9ab00',
  '#7eb00a',
  '#6f5553',
  '#c14089'
];
// let bgColor = '#2e2733';
let categorys = [
  {name: '教育', max: 15},
  {name: '励志', max: 25},
  {name: '散文', max: 25},
  {name: '小说', max: 25},
  {name: '艺术', max: 25},
  {name: '其他', max: 25}
];
let year2016 = [14, 6, 8, 8, 1, 8];
let year2017 = [10, 22, 10, 4, 8, 4];
let year2018 = [9, 7, 15, 22, 4, 5];
let fontSize = 14;

export let galleryOption = {
  tooltip: {
    trigger: 'item',
    textStyle: {
      color: '#fff',
      fontSize: fontSize,
      textShadowColor: '#333',
      textShadowBlur: 10,
      textShadowOffsetX: 5,
      textShadowOffsetY: 5,
    },
  },
  legend: {
    bottom: 20,
    itemWidth: 12,
    itemHeight: 12,
    data: ['2016年', '2017年', '2018年'],
    textStyle: {
      color: colors,
      fontSize: fontSize
    }
  },
  radar: {
    radius: '70%',
    splitNumber: 4,
    axisLine: {
      lineStyle: {
        color: '#fff',
        opacity: 0.8
      }
    },
    splitLine: {
      lineStyle: {
        color: '#fff',
        opacity: 0.5
      }
    },
    name: {
      show: true,
      color: '#7c7c7f',
      fontSize: fontSize,
    },
    indicator: categorys
  },
  series: [{
    name: '阅读类别统计',
    type: 'radar',
    symbolSize: 0,
    areaStyle: {
      normal: {
        shadowBlur: 13,
        shadowColor: 'rgba(0,0,0,.2)',
        shadowOffsetX: 0,
        shadowOffsetY: 10,
        opacity: .8
      }
    },
    data: [{
      value: year2018,
      name: '2018年',
    }, {
      value: year2017,
      name: '2017年',
    }, {
      value: year2016,
      name: '2016年',
    },]
  }],
  color: colors,
};
