import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";

// FD front-admin

class FDRequest {
  constructor(baseURL, timeout) {
    // 创建实例
    this.instance = axios.create({
      timeout,
      baseURL
    })
    // 拦截request
    // this.instance.interceptors.request.use()
    // 拦截response
    this.instance.interceptors.response.use(res => {
      return res.data
    }, err => err)
  }

  request(config) {
    return this.instance.request(config)
  }

  get(config) {
    return this.request({...config, method: 'GET'})
  }

  post(config) {
    return this.request({...config, method: 'POST'})
  }
}

export default new FDRequest(BASE_URL, TIMEOUT)