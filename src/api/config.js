// axios 全局配置
import axios from 'axios'

// 创建一个axios实例
const service = axios.create({
  //请求超时时间
  timeout: 3000
})

// 添加请求拦截器（token）
service.interceptors.request.use(
  //成功回调
  config => {
    return config
  },
  //失败回调
  err => {
    console.log(err)
  }
)

//添加响应拦截器
service.interceptors.response.use(
  response => {
    let res = {}
    res.status = response.status
    res.data = response.data
    return res
  },
  err => console.log(err)
)

export default service
