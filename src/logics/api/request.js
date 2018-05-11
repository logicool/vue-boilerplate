import Vue from 'vue'
import axios from 'axios'
import store from '@/store'
import { getToken } from '@/utils/auth'
import { baseUrl } from '@/utils/config'

/**
 * 网络请求设置
 * @type {{Content-Type: string}}
 */
const headers = {
  'content-type': 'application/json;charset=utf-8' // application/x-www-form-urlencoded
  // 'X-Requested-With': 'XMLHttpRequest'
  // 'cache-control': 'no-cache'
}

export const instance = axios.create({
  baseURL: baseUrl,
  timeout: 1000 * 15,
  // withCredentials: false,
  // responseType: 'json',
  headers: headers
})

// 请求拦截
instance.interceptors.request.use(function(config) {
  if (store.getters.token) {
    // config.headers.Authorization = `token ${getToken()}`
    config.headers['access-token'] = getToken()
  }
  return config
}, function(error) {
  // 对请求错误做些什么
  console.error('请求异常', error)
  return Promise.reject(error)
})

// 响应拦截
instance.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    console.error('响应异常' + error)
    Vue.$Message.error(error.message, 5 * 1000)
    return Promise.reject(error)
  }
)
