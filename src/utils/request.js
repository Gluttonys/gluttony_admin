import axios from 'axios'
// eslint-disable-next-line
import {Message} from 'element-ui'

import Cookie from 'js-cookie'
import Router from '../router'



const service = axios.create({
  // https://www.easy-mock.com/mock/5fb9d0683f90e10d9664665b/gluttony-admin
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})


service.interceptors.request.use(
  config => {
    /* 请求时， 二次确认是否登录， 没有登录继而返回登录页面 */
    if (!config.url.includes('login') && !Cookie.get('token')) {
      Router.push({name: 'login'})
    } else {
      config.headers['token'] = Cookie.get('token')
      return config
    }
  },
  error => {
    console.error(error) // for debug
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
