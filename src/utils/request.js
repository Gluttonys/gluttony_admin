import axios from 'axios'
import {MessageBox, Message} from 'element-ui'
import store from '@/store'
import {getToken, toLogin} from '@/utils/auth'


const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})


service.interceptors.request.use(
  config => {
    if (store.getters.token) {
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
    const res = response.data

    if (res.code !== 20000) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        MessageBox.confirm(
          '您已经退出了登录，您可以继续停留在此页面， 或者选择重新登录',
          '退出登录提醒',
          {
          confirmButtonText: '请重新登录',
          cancelButtonText: 'Cancel',
          type: 'warning'
          }
        ).then(() => {
          toLogin()
          // store.dispatch('user/resetToken').then(() => {
          //   location.reload()
          // })
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
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
