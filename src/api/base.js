// 公共的请求的接口

const base = {
  host: 'http://api.tianapi.com',//天行数据--疫情病毒
  baseUrl: 'https://yspm.api.storeapi.net',//哇数据的接口，国内外疫情
  covinfo: '/ncov/index?key=b3278a0d21a45149f6e707462a110a61',//疫情病毒信息
  //国内疫情接口
  chinaData: '/api/94/219?format=json&appid=17082&sign=77232c3026ce1cf8d0316bf10baeb2c4',
  //世界疫情网站
  worldData: '/api/94/220?format=json&appid=17082&sign=77232c3026ce1cf8d0316bf10baeb2c4',
  // worldData: '/api/94/222?format=json&appid=17082&sign=77232c3026ce1cf8d0316bf10baeb2c4'
  //国内城市
  city: '/api/94/221',
  // format=json&appid=17082&city_name=%E9%BB%91%E9%BE%99%E6%B1%9F&sign=917d21b0610aa8bae6ba1903f8d1757b
  // format=json&appid=17082&city_name=城市名称&sign=md5加密字符串
  //轮播图接口
  swiperBanner: 'http://iwenwiki.com/wapicovid19/ncovimg.php',
}

export default base 