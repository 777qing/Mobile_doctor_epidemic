// 所有的请求接口的方法
//请求的axios
import axios from 'axios'
//接口地址
import base from './base.js'
// 引入md5
import md5 from 'md5-js'
//请求方法
const api = {
  //病毒信息获取
  getCovInfo() {
    return axios.get(base.host + base.covinfo)
  },
  //获取国内疫情
  getChinaData() {
    return axios.get(base.baseUrl + base.chinaData)
  },
  //获取全球疫情
  getWorldData() {
    return axios.get(base.baseUrl + base.worldData)
  },
  //获取城市疫情
  // format=json&appid=17082&city_name=城市名称&sign=md5加密字符串
  getCityData(city_name) {
    // let canshu = 'format=json&appid=17082&city_name=' + city_name + '&sign=md5加密字符串'
    //md5加密规则：
    //sign = MD5( appid1formatjsontime1545829466密钥) 
    //查看加密规则说明 密钥不需要键名，请直接跟上32位的密钥
    //步骤 ： 1. 安装 npm i md5-js -S
    // 2. 引入md5模块
    // 3. 使用加密处理
    let rules = md5('appid17082city_name' + city_name + 'formatjsonb77184dd016bd5d876a167a9d3b2462b')
    let sign = 'format=json&appid=17082&city_name=' + city_name + '&sign=' + rules;
    return axios.get(base.baseUrl + base.city + '?' + sign)
  },
  //轮播图数据接口
  getSwiperBanner() {
    return axios.get(base.swiperBanner)
  }
}

export default api