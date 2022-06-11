//开发成vue插件使用echarts

//JavaScript
//Object.defineProperties(obj,props)
//方法直接在一个对象上定义新的属性或修改现有属性，斌返回该对象
//obj 在其上定义或修改属性的对象
//props要定义其可枚举属性或修改的属性描述符的对象

import echarts from "echarts"

//导入地图的js文件
// import 'echarts/map/js/china'
//导入世界地图的js文件
// import 'echarts/map/js/world'
import country from '../utils/country.js'
// 导入城市
// import 'echarts/map/js/province/heilongjiang'
import '../utils/map.js'

const install = function (Vue, options) {
  // 添加实例方法
  // Vue.prototype.demo = function () { } 

  //Vue.protytype.$myChart={demo(),fun(),...}
  Object.defineProperties(Vue.prototype, {
    $myChart: {
      get() {
        return {
          // 1. 绘制一个折线图
          line(id) {
            // var myChart = this.$echarts.init(document.getElementById(id));
            var myChart = echarts.init(document.getElementById(id));
            // 绘制图表
            var option = {
              title: {
                text: "ECharts 入门示例",
              },
              tooltip: {},
              xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
              },
              yAxis: {},
              series: [
                {
                  name: "销量",
                  type: "bar",
                  data: [5, 20, 36, 10, 10, 20],
                },
              ],
            };
            myChart.setOption(option)
          },
          // 2. 中国地图
          chinaMap(id, data) {
            var myChart = echarts.init(document.getElementById(id));
            var option = {
              tooltip: { // 悬浮弹框
                triggerOn: 'click', //提示框出发的条件
                enterable: true, // 鼠标是否可进入提示框浮层中，默认为false
                formatter(item) {
                  // return "<a style='color:#fff;' href='#/city/" + item.name + " '>" + item.name + ':确诊人数' + item.value + "</a> "
                  // return '省份：' + item.name + '--详情'
                  return '<a style="color:#fff;" href="/citys/' + item.name + '">省份：' + item.name + '--详情</a>'

                }
              },
              visualMap: [{  //映射高亮颜色
                // orient: 'vertical',  // 垂直
                orient: 'horizontal',  //水平
                type: 'piecewise',   // 离散
                bottom: 0,
                textGap: 4,
                itemGap: 4,
                itemWidth: 10,
                itemHeight: 10,
                padding: 2,
                textStyle: {
                  fontSize: 9,
                },
                pieces: [  //配置颜色期间
                  {
                    min: 0,
                    max: 0,
                    color: '#ffffff'
                  },
                  {
                    min: 1,
                    max: 100,
                    color: '#fdfdcf'
                  },
                  {
                    min: 100,
                    max: 1000,
                    color: '#fe9e83'
                  },
                  {
                    min: 1000,
                    max: 5000,
                    color: '#4f070d'
                  },
                  {
                    min: 5000,
                    max: 10000,
                    color: '#4f070d'
                  }
                ]
              }],
              series: [{
                name: '省',
                type: 'map',  // 地图  bar  line   map
                map: 'china', // 中国地图  需要引入地图china.js
                roam: false,
                zoom: 1.2,
                aspectScale: 0.75,
                top: 40,
                layoutCenter: ['5%', '5%'],
                label: {
                  normal: {
                    show: true,
                    textStyle: {
                      fontSize: 8
                    }
                  }
                },
                itemStyle: {
                  normal: {
                    areaColor: 'rgba(0,255,235,0)',
                    borderColor: 'rgba(0,0,0,0.2)',
                  },
                  emphasis: { //选中的区域颜色及阴影效果等
                    areaColor: 'rgba(255,180,0,0.8)',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowBlur: 20,
                    borderWidth: 0,
                  }
                },
                data
                // data: [
                //   { name: '内蒙古', value: 200 },
                //   { name: '北京', value: 800 },
                // ]
              }]
            }
            myChart.setOption(option)
          },
          // 3. 世界地图
          WorldMap(id, data) {
            console.log('接受的', data);
            var myChart = echarts.init(document.getElementById(id));
            var option = {
              tooltip: { // 悬浮弹框
                triggerOn: 'click', //提示框出发的条件
                enterable: true, // 鼠标是否可进入提示框浮层中，默认为false
                formatter(item) {
                  // return "<a style='color:#fff;' href='#/city/" + item.name + " '>" + item.name + ':确诊人数' + item.value + "</a> "
                  // item=下面serves里面的data里面的每一项
                  return item.name + ':确诊人数' + item.value

                }
              },
              visualMap: [{  //映射高亮颜色
                orient: 'vertical',  // 垂直
                // orient: 'horizontal',  //水平
                type: 'piecewise',   // 离散
                bottom: 0,

                pieces: [  //配置颜色期间
                  {
                    min: 0,
                    max: 0,
                    color: '#ffffff'
                  },
                  {
                    min: 1,
                    max: 10000,
                    color: '#fdfdcf'
                  },
                  {
                    min: 10000,
                    max: 100000,
                    color: '#fe9e83'
                  },
                  {
                    min: 100000,
                    max: 500000,
                    color: '#4f070d'
                  },
                  {
                    min: 500000,
                    // max: 10000,
                    color: '#4f070d'
                  }
                ]
              }],
              series: [{
                name: '国',
                type: 'map',  // 地图  bar  line   map
                map: 'world', // 中国地图  需要引入地图china.js
                //中文翻译成中文
                nameMap: country, //自定义地区的名称映射
                roam: false,
                zoom: 1.2,
                aspectScale: 0.75,
                top: 40,
                layoutCenter: ['5%', '5%'],
                label: {
                  normal: {
                    //显示的地名
                    show: false,
                    textStyle: {
                      fontSize: 8
                    }
                  }
                },
                itemStyle: {
                  normal: {
                    areaColor: 'rgba(0,255,236,0)',
                    borderColor: 'rgba(0,0,0,0.2)',
                  },
                  emphasis: { //选中的区域颜色及阴影效果等
                    areaColor: 'rgba(255,180,0,0.8)',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowBlur: 20,
                    borderWidth: 0,
                  }
                },
                data
                // data: [
                //   { name: 'Russia', value: 200 },
                //   { name: 'Canada', value: 800 },
                // ]
              }]
            }
            myChart.setOption(option)
          },
          // 4. 城市地图
          cityMap(id, cityname, data) {
            var myChart = echarts.init(document.getElementById(id));
            var option = {
              tooltip: { // 悬浮弹框
                triggerOn: 'click', //提示框出发的条件
                enterable: true, // 鼠标是否可进入提示框浮层中，默认为false
                formatter(item) {
                  // return "<a style='color:#fff;' href='#/city/" + item.name + " '>" + item.name + ':确诊人数' + item.value + "</a> "
                  // return '省份：' + item.name + '--详情'
                  return data.name

                }
              },
              visualMap: [{  //映射高亮颜色
                // orient: 'vertical',  // 垂直
                orient: 'horizontal',  //水平
                type: 'piecewise',   // 离散
                bottom: 0,
                textGap: 4,
                itemGap: 4,
                itemWidth: 10,
                itemHeight: 10,
                padding: 2,
                textStyle: {
                  fontSize: 9,
                },
                pieces: [  //配置颜色期间
                  {
                    min: 0,
                    max: 0,
                    color: '#ffffff'
                  },
                  {
                    min: 1,
                    max: 100,
                    color: '#fdfdcf'
                  },
                  {
                    min: 100,
                    max: 1000,
                    color: '#fe9e83'
                  },
                  {
                    min: 1000,
                    max: 5000,
                    color: '#4f070d'
                  },
                  {
                    min: 5000,
                    max: 10000,
                    color: '#4f070d'
                  }
                ]
              }],
              series: [{
                name: '市',
                type: 'map',  // 地图  bar  line   map
                map: cityname, // 城市地图
                roam: false,
                zoom: 1.2,
                aspectScale: 0.75,
                top: 40,
                layoutCenter: ['5%', '5%'],
                label: {
                  normal: {
                    show: true,
                    textStyle: {
                      fontSize: 8
                    }
                  }
                },
                itemStyle: {
                  normal: {
                    areaColor: 'rgba(0,255,235,0)',
                    borderColor: 'rgba(0,0,0,0.2)',
                  },
                  emphasis: { //选中的区域颜色及阴影效果等
                    areaColor: 'rgba(255,180,0,0.8)',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowBlur: 20,
                    borderWidth: 0,
                  }
                },
                data
                // data: [
                //   { name: '内蒙古', value: 200 },
                //   { name: '北京', value: 800 },
                // ]
              }]
            }
            myChart.setOption(option)
          },
        }
      }

    }
  })

}

export default install