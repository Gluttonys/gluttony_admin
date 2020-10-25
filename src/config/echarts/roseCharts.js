export let roseOption = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  series: [
    {
      name: '日销比',
      type: 'pie',
      label: {
        show: true,
        fontSize: 12
      },
      radius: [0, '50%'],
      color: ['#57d1fa', '#b6b91d', '#8bd2b2', '#57d1fa', '#ff9374', '#ffb422', '#3197c2', '#e4a05f', '#ff9374', '#7c6aca'],
      roseType: 'area',
      data: [
        {value: 25, name: '食糖'},
        {value: 30, name: '乳制品'},
        {value: 30, name: '肉制品'},
        {value: 25, name: '食用油'},
        {value: 25, name: '蔬菜类'},
        {value: 35, name: '豆制类'},
        {value: 30, name: '水产品'},
        {value: 40, name: '粮食调味品'},
        {value: 30, name: '冷冻饮品'},
        {value: 40, name: '酒类'}
      ]
    }
  ]
}
