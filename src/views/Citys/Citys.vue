<template>
	<div class="city-map">
		<div class="title">城市模块---{{ cityname }}</div>
		<div id="map"></div>
	</div>
</template>

<script>
import api from "../../api/index.js";
export default {
	props: ["cityname"],
	mounted() {
		//获取城市接口数据
		api.getCityData(this.cityname).then((res) => {
			let arr = res.data.retdata.subList;
			let newArr = [];
			arr.forEach((ele) => {
				let obj = {};
				obj.name = ele.city + "市";
				//名称处理--和地图数据对应起来
				//处理当前的ele.city的名称的最后一个标识：盟 州 区 旗
				obj.value = ele.confirm;
				newArr.push(obj);
			});
			this.$myChart.cityMap("map", this.cityname, newArr);
		});
	},
};
</script>

<style lang='less' scoped>
.city-map {
	.title {
		margin-left: 0.25rem;
		border-left: 0.1rem solid rgba(20, 49, 128);
		padding-left: 0.2rem;
		margin-bottom: 0.2rem;
	}
	#map {
		width: 7.5rem;
		height: 8rem;
		background: #f5f5f5;
	}
}
</style>