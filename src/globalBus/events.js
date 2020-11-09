import {bus} from '@/globalBus/bus'

export function informOAFormWithData(data) {
  /*
  * oa 工作流中的数据传送
  * */
  bus.$emit('informOAFormWithData', data)
}


