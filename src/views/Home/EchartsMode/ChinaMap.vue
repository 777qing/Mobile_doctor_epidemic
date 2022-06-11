<template>
	<div class="china-map">
		<div class="title">国内疫情地图</div>
		<!-- 地图容器 -->
		<!-- 累计确诊 -->
		<!-- <div id="map"></div> -->
		<!-- 现存确诊 -->
		<!-- <div id="nowmap"></div> -->
		<!-- 用vant库做切换 -->
		<van-tabs v-model="active" animated @change="change">
			<van-tab title="现存确诊">
				<div id="nowmap"></div>
			</van-tab>
			<van-tab title="累计确诊">
				<div id="map"></div>
			</van-tab>
		</van-tabs>
	</div>
</template>

<script>
// import echarts from "echarts";
//直接写如mounted也可以，写进方法内调用也可以
import api from "../../../api/index.js";
export default {
	data() {
		return {
			active: 0,
			arr: [],
		};
	},
	mounted() {
		// this.getBar();
		// console.log("this", this);
		// this.$myChart.line("map");
		//获取疫情数据-----------------------
		api.getChinaData().then((res) => {
			console.log("----------------------");
			console.log("--", res.data);
			//获取省份数据
			let citys = res.data.retdata;
			let arr = []; //累计
			let nowArr = []; //现存
			for (let i = 0; i < citys.length; i++) {
				//citys[i]
				let obj = {};
				obj.name = citys[i].xArea;
				obj.value = citys[i].confirm; //累计确诊  curConfirm现在确诊人数
				arr.push(obj);
				let nowObj = {};
				nowObj.name = citys[i].xArea;
				nowObj.value = citys[i].curConfirm;
				nowArr.push(nowObj);
			}
			this.arr = arr;
			console.log("城市的数据", arr);
			// 显示累计地图
			// this.$myChart.chinaMap("map", arr);
			// 显示现存地图
			// this.$myChart.chinaMap("nowmap", nowArr);

			//vue里面 等待延迟加载
			this.$nextTick(() => {
				// 显示累计地图
				// this.$myChart.chinaMap("map", arr);
				// 显示现存地图
				this.$myChart.chinaMap("nowmap", nowArr);
			});
		});
		//显示地图
		// this.$myChart.chinaMap("map", [{name:'北京',value:20}]);
	},
	methods: {
		change(title) {
			if (title == 1) {
				this.$nextTick(() => {
					this.$myChart.chinaMap("map", this.arr);
				});
			}
		},
		// getBar() {
		// 	// var myChart = echarts.init(document.getElementById("map"));
		// 	var myChart = this.$echarts.init(document.getElementById("map"));
		// 	// 绘制图表
		// 	myChart.setOption({
		// 		title: {
		// 			text: "ECharts 入门示例",
		// 		},
		// 		tooltip: {},
		// 		xAxis: {
		// 			data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
		// 		},
		// 		yAxis: {},
		// 		series: [
		// 			{
		// 				name: "销量",
		// 				type: "bar",
		// 				data: [5, 20, 36, 10, 10, 20],
		// 			},
		// 		],
		// 	});
		// },
	},
};
</script>

<style lang="less" scoped>
.china-map {
	.title {
		margin-left: 0.25rem;
		border-left: 0.1rem solid rgba(20, 49, 128);
		padding-left: 0.2rem;
		margin-bottom: 0.2rem;
	}
	#map,
	#nowmap {
		width: 7.5rem;
		height: 8rem;
		background: #f5f5f5;
	}
}
</style>