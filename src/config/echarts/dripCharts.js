import echarts from 'echarts'
import 'echarts-liquidfill'

/* 水滴图标配置 */
// let max = 500; //满刻度大小
// let scroe = 0.9;


export function dynamicOption(scroe = 0.9, max = 500) {
  let data = max * scroe;
  return {
    backgroundColor: '#fff',
    title: {
      top: '47%',
      left: 'center',
      text: (scroe * 10000 / 100) + ' 分',
      textStyle: {
        color: '#ec407a',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 32
      }
    },
    series: [{
      type: 'liquidFill',
      itemStyle: {
        opacity: 0.8, //波浪的透明度
        shadowBlur: 10, //波浪的阴影范围
        shadowColor: '#ffb931' //阴影颜色
      },
      radius: '80%',
      //水波
      color: [new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: '#fe8704'
      },
        {
          offset: 1,
          color: '#ffb931'
        }
      ])],
      data: [{
        value: scroe,
      }],
      // background: '#000',
      center: ['50%', '50%'],
      backgroundStyle: {
        color: '#fff'
      },
      label: {
        normal: {
          formatter: '',
          textStyle: {
            fontSize: 12
          }
        }
      },
      outline: {
        itemStyle: {
          borderColor: 'transparent',
          borderWidth: 5
        },
        borderDistance: 0
      }
    },
      //外环线
      {
        'color': ['#ff8b00', 'transparent'],
        'type': 'pie',
        'center': ['50%', '50%'],
        'radius': ['80%', '81.5%'],
        'hoverAnimation': false,
        'data': [{
          'name': '',
          'value': data,
          'label': {
            'show': false,
            'position': 'center',
            'color': '#fff',
            'fontSize': 38,
            'fontWeight': 'bold',
            'formatter': function () {
              return data
            }
          }
        },
          { //画剩余的刻度圆环
            'name': '',
            'value': max - data,
            'label': {
              show: false
            },
            labelLine: {
              show: false
            }
          }
        ]
      }
    ]
  };
}
