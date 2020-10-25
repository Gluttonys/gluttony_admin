import echarts from 'echarts'

var category = []; //当前前12个月每月月份
var lineData = []; //扶贫收益
var barData = []; //扶贫企业

var dottedBase = new Date();
dottedBase.setMonth(dottedBase.getMonth() - 12);
dottedBase.setDate(dottedBase.getDate() - dottedBase.getDate() + 1);
// var t_s=dottedBase.getTime();//转化为时间戳毫秒数
// dottedBase.setTime(t_s-1000 * 3600 * 24 *7 *21);//设置新时间
// dottedBase.setDate(dottedBase.getDate() + 1);

var date = dottedBase;
for (var i = 0; i < 12; i++) {
  // var date = new Date(dottedBase + 1000 * 3600 * i);
  date.setMonth(date.getMonth() + 1);
  category.push([date.getFullYear(), date.getMonth() + 1,
    date.getDate()
  ].join('-'));
  var b = Math.random() * 20;
  var d = Math.random() * 20;
  var h = d + b;
  barData.push(b.toFixed(2));
  lineData.push(h.toFixed(2));
}

// option
export let dottedOption = {
  // backgroundColor: '#0f375f',
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
      label: {
        show: true,
        backgroundColor: '#333'
      }
    },
    formatter: '{a0}: {c0}<br />{a1}: {c1}'
  },
  legend: {
    data: ['投资收益', '扶贫企业'],
    textStyle: {
      color: '#ccc'
    }
  },
  xAxis: {
    data: category,
    axisLine: {
      lineStyle: {
        color: '#ccc'
      }
    }
  },
  yAxis: {
    splitLine: {
      show: false
    },
    axisLine: {
      lineStyle: {
        color: '#ccc'
      }
    }
  },
  series: [{
    name: '投资收益',
    type: 'line',
    smooth: true,
    showAllSymbol: true,
    symbol: 'emptyCircle',
    symbolSize: 15,
    data: lineData
  },
    {
      name: '扶贫企业',
      type: 'bar',
      barWidth: 10,
      itemStyle: {
        normal: {
          barBorderRadius: 5,
          color: new echarts.graphic.LinearGradient(0,
            0, 0, 1, [{
              offset: 0,
              color: '#14c8d4'
            }, {
              offset: 1,
              color: '#43eec6'
            }])
        }
      },
      data: barData
    },
    {
      name: 'line',
      type: 'bar',
      barGap: '-100%',
      barWidth: 10,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0,
            0, 0, 1, [{
              offset: 0,
              color: 'rgba(20,200,212,0.5)'
            }, {
              offset: 0.2,
              color: 'rgba(20,200,212,0.2)'
            }, {
              offset: 1,
              color: 'rgba(20,200,212,0)'
            }])
        }
      },
      z: -12,
      data: lineData
    }, {
      name: 'dotted',
      type: 'pictorialBar',
      symbol: 'rect',
      itemStyle: {
        normal: {
          color: '#0f375f'
        }
      },
      symbolRepeat: true,
      symbolSize: [12, 4],
      symbolMargin: 1,
      z: -10,
      data: lineData
    }]
};
