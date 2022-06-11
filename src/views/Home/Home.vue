<template>
	<div class="home">
		<!-- 疫情图片 -->
		<img class="top-img" src="../../assets/images/page-top.png" alt="" />
		<!-- 病毒信息 -->
		<cov-info :news="news"></cov-info>
		<!-- 疫情小导航 -->
		<div class="list">
			<router-link to="/area">
				<img src="../../assets/images/hot-bottom-1.png" alt="" />
				<div>风险地区</div>
			</router-link>
			<div>
				<router-link to="/hesuan">
					<img src="../../assets/images/hot-bottom-2.png" alt="" />
					<div>核酸检测</div>
				</router-link>
			</div>
			<div>
				<router-link to="/prevention">
					<img src="../../assets/images/hot-bottom-3.png" alt="" />
					<div>防疫物资</div>
				</router-link>
			</div>
			<div>
				<router-link to="/travel">
					<img src="../../assets/images/hot-bottom-4.png" alt="" />
					<div>出行政策</div>
				</router-link>
			</div>
		</div>
		<!-- 数据统计 -->
		<cov-number :covData="covData"></cov-number>
		<!-- 中国地图 -->
		<china-map></china-map>
		<!-- 世界地图 -->
		<world-map></world-map>
		<!-- 轮播图 -->
		<vue-swiper></vue-swiper>
	</div>
</template>

<script>
import CovInfo from "../Home/CovInfo/CovInfo.vue";
import CovNumber from "../Home/CovInfo/CovNumber.vue";
import ChinaMap from "./EchartsMode/ChinaMap.vue";
import WorldMap from "../Home/EchartsMode/WorldMap.vue";
import VueSwiper from "../VueSwiper/VueSwiper.vue";
import api from "../../api/index.js";

export default {
	components: { CovInfo },
	name: "HomeView",
	data() {
		return {
			// 热点
			news: [],
			//全国数据统计
			covData: {},
		};
	},
	components: {
		CovInfo,
		CovNumber,
		ChinaMap,
		WorldMap,
		VueSwiper,
	},
	created() {
		//请求病毒接口
		api.getCovInfo().then((res) => {
			console.log(res.data);
			console.log(res.data.newslist[0]);
			let data = res.data.newslist[0];
			// currentconfirmedcount 现存确诊
			//confirmedCount累计确诊
			// suspectedcount累计境外输入人数
			//curedCount 累计治愈人数
			// deadcount  累计死亡人数
			// seriouscount现存无症状人数
			//suspectedIncr新增境外输入人数
			// currentconfirmedIncr相比昨日现存确诊人数
			//confirmedIncr相比昨日累计确诊人数
			// curedIncr相比昨日新增治愈人数
			//deadIncr相比昨目新增死亡人数
			//seriousIncr相比昨日现存无症状人数
			// createTime 时间

			// 疫情热点
			this.news = data.news;
			this.covData = {
				currentConfirmedCount: data.desc.currentConfirmedCount,
				confirmedCount: data.desc.confirmedCount,
				suspectedCount: data.desc.suspectedCount,
				curedCount: data.desc.curedCount,
				deadCount: data.desc.deadCount,
				seriousCount: data.desc.seriousCount,
				suspectedIncr: data.desc.suspectedIncr,
				currentConfirmedIncr: data.desc.currentConfirmedIncr,
				confirmedIncr: data.desc.confirmedIncr,
				curedIncr: data.desc.curedIncr,
				deadIncr: data.desc.deadIncr,
				seriousIncr: data.desc.seriousIncr,
				modifyTime: data.desc.modifyTime,
			};
		});
	},
};
</script>


<style lang="less" scoped>
.home {
	.top-img {
		width: 100%;
	}
	// 疫情导航
	.list {
		display: flex;
		justify-content: space-evenly;
	}
}
</style>