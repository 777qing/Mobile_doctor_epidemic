<template>
	<div class="area">
		<h2>风险地区</h2>

		<div class="content">
			<!-- 高风险 -->
			<template v-if="high.length > 0">
				<div class="title high">
					高风险区<span>{{ high.length }}</span> 个
				</div>
				<ul>
					<li v-for="(item, index) in high" :key="index">
						{{ item }}
					</li>
				</ul>
			</template>
			<!-- 中风险 -->
			<template v-if="mid.length > 0">
				<div class="title midden">
					中风险区<span>{{ mid.length }}</span
					>个
				</div>
				<ul>
					<li v-for="(item, index) in mid" :key="index">
						{{ item }}
					</li>
				</ul>
			</template>
		</div>
	</div>
</template>

<script>
import api from "../../api/index.js";
export default {
	data() {
		return {
			//高风险
			high: [],
			//低风险
			mid: [],
		};
	},
	created() {
		console.log("00000000000000000000000000");
		api.getCovInfo().then((res) => {
			console.log(res.data);
			let riskarea = res.data.newslist[0].riskarea;
			// console.log(riskarea);
			this.high = riskarea.high;
			this.mid = riskarea.mid;
		});
	},
};
</script>

<style lang="less" scoped>
.area {
	.content {
		.title {
			font-size: 20px;
			background: rgba(0, 0, 0, 0.1);
			border-radius: 20px;
			text-align: center;
			span {
				font-weight: 700;
			}
		}
		.high {
			span {
				color: red;
			}
		}
		.midden {
			span {
				color: orange;
			}
		}
	}
	ul {
		li {
			text-indent: 5px;
		}
	}
}
</style>