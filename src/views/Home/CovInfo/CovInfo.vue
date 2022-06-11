<template>
	<div class="info">
		<!-- 介绍 -->
		<div class="cov">
			<div class="cov-top">
				<div class="title">病毒信息</div>
				<a href="#">查看更多 ></a>
			</div>
			<p v-for="item in bdinfo" :key="item.name">{{ item.text }}</p>
		</div>
		<!-- 热点 -->
		<div class="hot">
			<div class="hot-top">
				<div class="title">
					<img
						class="hot-img"
						src="../../../assets/images/hot-img.png"
						alt=""
					/>
				</div>
				<a href="#">查看更多 ></a>
			</div>
			<!-- 热点列表 -->
			<ul>
				<li v-for="item in news" :key="item.id">
					<!-- 左侧文字 -->
					<div class="text">
						<img class="new" src="../../../assets/images/new.png" alt="" />
						{{ item.title }}
					</div>
					<!-- 右侧图标 -->
					<div class="icon">
						<img src="../../../assets/images/hot-right.png" alt="" />
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		news: {
			type: Array,
			default: function () {
				return [];
			},
		},
	},
	data() {
		return {
			// 病毒介绍
			bdinfo: [
				{
					name: "note1",
					text: "病毒：SARS-CoV,其导致疾病命名COVID-19。",
				},
				{
					name: "note2",
					text: "传染源：新馆肺炎的患者。无症状感染者也可能成为传染源。",
				},
				{
					name: "note3",
					text: "传播途径：经呼吸道飞沫、接触传播是主要的传播途径。气溶胶传播和消化道等传播途径尚待明确。",
				},
				{
					name: "remark1",
					text: "易感人群：人群普遍易感。老年人及右基础疾病者感染后病情较重，儿童及婴幼儿也有发病。",
				},
				{
					name: "remark2",
					text: "潜伏期：一般为3-7天，最长不超过14天，潜伏期内可能存在传染性，其中无症状病例传染性非常罕见。",
				},
				{
					name: "remark3",
					text: "宿主：野生动物，可能是中华菊头蝠。",
				},
			],
		};
	},
};
</script>

<style lang="less" scoped>
.info {
	padding: 0.25rem;
	// 介绍
	.cov {
		.cov-top {
			display: flex;
			justify-content: space-between;
			a {
				color: rgb(65, 105, 226);
			}
		}
	}
	.title {
		border-left: 0.1rem solid rgba(20, 49, 128);
		padding-left: 0.1rem;
		margin-bottom: 0.2rem;
	}
	p {
		line-height: 0.4rem;
		color: #666;
	}
	// 热点
	.hot {
		.hot-top {
			display: flex;
			justify-content: space-between;
			margin-top: 00.15rem;
			.hot-img {
				width: 1.6rem;
			}
			a {
				color: rgb(65, 105, 226);
			}
		}
		.new {
			vertical-align: bottom;
			width: 0.55rem;
			margin-right: 0.0625rem;
		}

		ul {
			li {
				margin: 0.15rem 0;
				display: flex;
				justify-content: space-between;
				.icon {
					img {
						width: 0.25rem;
						height: 0.25rem;
					}
				}
			}
		}
	}
}
</style>