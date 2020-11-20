let options = [
  {
    value: 'anhui',
    label: '安徽',
    children: [
      {
        value: 'fuyang',
        label: '阜阳',
        children: [{
          value: 'funan',
          label: '阜南'
        }, {
          value: 'yingshang',
          label: '颍上'
        }, {
          value: 'linquan',
          label: '临泉'
        }, {
          value: 'taihe',
          label: '太和'
        }]
      },
      {
        value: 'hefei',
        label: '合肥',
        children: [{
          value: 'feidong',
          label: '肥东'
        }, {
          value: 'feixi',
          label: '肥西'
        }]
      }]
  },
  {
    value: 'liaoning',
    label: '辽宁',
    children: [
      {
        value: 'dalian',
        label: '大连',
        children: [{
          value: 'shahekou',
          label: '沙河口'
        },
          {
            value: 'gaoxinyuan',
            label: '高新园区'
          },
          {
            value: 'ganjingziqu',
            label: '甘井子区'
          },
          {
            value: 'lvshunkouqu',
            label: '旅顺口区'
          },
          {
            value: 'zhongshanqu',
            label: '中山区'
          }]
      },
      {
        value: 'yingkou',
        label: '营口',
        children: [{
          value: 'laobianqu',
          label: '老边区'
        }, {
          value: 'dashiqiaoshi',
          label: '大石桥市'
        }, {
          value: 'xishiqu',
          label: '西市区'
        }, {
          value: 'zhanqianqu',
          label: '站前区'
        }]
      },
      {
        value: 'shenyang',
        label: '沈阳',
        children: [{
          value: 'huangguqu',
          label: '皇菇区'
        }, {
          value: 'hunnanqu',
          label: '浑南区'
        }, {
          value: 'sujiatunqu',
          label: '苏家屯区'
        }, {
          value: 'yuhongqu',
          label: '于洪区'
        }, {
          value: 'dongzhouqu',
          label: '东洲区'
        }, {
          value: 'shenbeixinqu',
          label: '沈北新区'
        }]
      }]
  },
  {
    value: 'jiangsu',
    label: '江苏',
    children: [
      {
        value: 'nanjing',
        label: '南京市'
      },
      {
        value: 'suqian',
        label: '宿迁'
      },
      {
        value: 'zhenjiang',
        label: '镇江'
      }]
  }]

const dict = {
  anhui: '安徽',
  fuyang: '阜阳',
  funan: '阜南',
  yingshang: '颍上',
  linquan: '临泉',
  taihe: '太和',
  hefei: '合肥',
  feidong: '肥东',
  feixi: '肥西',
  liaoning: '辽宁',
  dalian: '大连',
  shahekou: '沙河口',
  gaoxinyuan: '高新园区',
  ganjingziqu: '甘井子区',
  lvshunkouqu: '旅顺口区',
  zhongshanqu: '中山区',
  yingkou: '营口',
  laobianqu: '老边区',
  dashiqiaoshi: '大石桥市',
  xishiqu: '西市区',
  zhanqianqu: '站前区',
  shenyang: '沈阳',
  huangguqu: '皇菇区',
  hunnanqu: '浑南区',
  sujiatunqu: '苏家屯区',
  yuhongqu: '于洪区',
  dongzhouqu: '东洲区',
  shenbeixinqu: '沈北新区',
  jiangsu: '江苏',
  nanjing: '南京',
  zhenjiang: '镇江',
  suqian: '宿迁'
}


export {
  options, dict
}
