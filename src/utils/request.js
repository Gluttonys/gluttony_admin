import axios from 'axios'
// eslint-disable-next-line
import {MessageBox, Message} from 'element-ui'
import store from '@/store'
// eslint-disable-next-line
import {getToken, toLogin} from '@/utils/auth'


const service = axios.create({
  // https://www.easy-mock.com/mock/5fb9d0683f90e10d9664665b/gluttony-admin
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})


service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      /* 发送请求时 携带token */
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)


service.interceptors.response.use(
  response => {
    const {data: res} = response
    if (res.status !== 200) {
      Message({
        message: res.message || '发生错误， 返回错误码不正确！ request.js: line 37',
        type: 'error',
        duration: 5 * 1000
      })
      /*
      * 这里可以尽可能多的对返沪的status状态码做出判断 token过期重新登录， 请求失败等~
      *
      * 我这个接口并没有提供 message 属性 ， 所以一直都是 Error 🚀🚀🚀
      * */
      return Promise.reject(new Error(res.message || 'Error'))
    }
    return res
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
