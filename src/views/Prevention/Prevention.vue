<template>
	<div class="wuzi">
		<!-- 顶部logo -->
		<img
			class="wuzi-logo"
			src="../../assets/images/prevention-logo.png"
			alt=""
		/>
		<!-- 物资内容 -->
		<div class="wrapper">
			<van-tabs class="tabs" v-model="active" animated>
				<van-tab v-for="item in arr" :title="item.title" :key="item.title">
					<img :src="item.img" alt="" />
				</van-tab>
			</van-tabs>
		</div>
	</div>
</template>

<script>
import img1 from "../../assets/images/prevention-xiao。.png";
import img2 from "../../assets/images/prevention-kouzhao.png";
export default {
	data() {
		return {
			active: 0,
			arr: [
				{
					img: img1,
					title: "消毒剂",
				},
				{
					img: img2,
					title: "口罩",
				},
			],
		};
	},
};
</script>

<style lang="less" scoped>
.wuzi {
	.wuzi-logo {
		width: 100%;
	}

	.wrapper {
		.tabs {
			img {
				width: 100%;
			}
		}
	}
}
</style>