<template>
	<div>
		<div class="title">疫情期间出行防疫政策</div>

		<!-- van-field
        v-model (value)当前输入的值  number| string
        label  输入框左侧文本
        is-link 是否展示右侧箭头并开启点击反馈
        readonly  是否只读 -->

		<!-- van-cascader
         title  顶部标题
         options 可选项数据源  数据格式=[]
         active-color 选中状态的高亮颜色
         事件：
         finish  全部选项选择完成后触发
        close  点击关闭图标时触发
          -->

		<!-- 出发城市 -->
		<van-field
			v-model="goCity"
			is-link
			readonly
			label="出发城市"
			placeholder="请选择所在地区"
			@click="show = true"
		/>
		<van-popup v-model="show" round position="bottom">
			<van-cascader
				v-model="cascaderValue"
				title="请选择出发城市"
				:options="options"
				@close="show = false"
				@finish="onFinish"
			/>
		</van-popup>

		<!-- 到达城市 -->
		<van-field
			v-model="toCity"
			is-link
			readonly
			label="到达城市"
			placeholder="请选择所在地区"
			@click="show2 = true"
		/>
		<van-popup v-model="show2" round position="bottom">
			<van-cascader
				v-model="cascaderValue2"
				title="请选择到达城市"
				:options="options"
				@close="show2 = false"
				@finish="toFinish"
			/>
		</van-popup>
		<!-- 查询按钮 -->
		<div class="search">
			<van-button type="primary" size="large">点击查询</van-button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			//弹窗状态  false隐藏  true显示
			show: false, //出发的弹窗
			show2: false, //到达的弹窗
			//输入的值
			goCity: "", //出发的值
			toCity: "", //到达的值
			cascaderValue: "",
			cascaderValue2: "",
			// 选项列表，children 代表子选项，支持多级嵌套
			options: [
				{
					text: "浙江省",
					value: "330000",
					children: [{ text: "杭州市", value: "330100" }],
				},
				{
					text: "江苏省",
					value: "320000",
					children: [{ text: "南京市", value: "320100" }],
				},
			],
		};
	},
	methods: {
		// 全部选项选择完毕后，会触发 finish 事件
		onFinish({ selectedOptions }) {
			this.show = false;
			this.goCity = selectedOptions.map((option) => option.text).join("/");
		},
		toFinish({ selectedOptions }) {
			this.show2 = false;
			this.toCity = selectedOptions.map((option) => option.text).join("/");
		},
	},
};
</script>

<style lang="less" scoped>
.title {
	padding: 0.2rem;
}
.search {
	margin: 0.2rem;
}
</style>