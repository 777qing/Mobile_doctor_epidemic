<template>
	<div class="world-map">
		<div class="title">世界疫情地图</div>
		<div id="map"></div>
	</div>
</template>

<script>
import api from "../../../api/index.js";
export default {
	mounted() {
		api.getWorldData().then((res) => {
			console.log("----世界---", res.data);
			//获取地名
			let world = res.data.retdata;
			let arr = [];
			for (let i = 4; i < world.length; i++) {
				let obj = {};
				obj.name = world[i].xArea;
				obj.value = world[i].confirm;
				arr.push(obj);
				// arr.substr(4, 216);
			}
			console.log(arr);
			this.$myChart.WorldMap("map", arr);

			// let world = res.data.retdata;
			// let arr = []; //累计
			// // let nowArr = []; //现存
			// for (let i = 0; i < world.length; i++) {
			// 	let obj = {};
			// 	obj.name = world[i].xArea;
			// 	//累计确诊  confirm累计确诊人数
			// 	obj.value = world[i].confirm;
			// 	arr.push(obj);
			// }

			// this.$myChart.WorldMap("map", arr);
		});
	},
};
</script>

<style lang="less" scoped>
.world-map {
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