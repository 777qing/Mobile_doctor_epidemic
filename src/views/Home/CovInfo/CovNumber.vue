<template>
	<!-- 疫情数据 -->
	<div class="num">
		<div class="content">
			<div class="title">
				截止到{{ covData.modifyTime | time }},全国数据统计如下:
			</div>
			<ul class="wrap">
				<li>
					<span
						>较昨日 <i>{{ covData.currentConfirmedIncr | number }}</i></span
					>
					<div class="bold">{{ covData.currentConfirmedCount | division }}</div>
					<strong>现存确诊</strong>
				</li>
				<li>
					<span
						>较昨日 <i>{{ covData.suspectedIncr | number }}</i></span
					>
					<div class="bold">{{ covData.suspectedCount | division }}</div>
					<strong>境外输入</strong>
				</li>
				<li>
					<span
						>较昨日 <i>{{ covData.seriousIncr | number }}</i></span
					>
					<div class="bold">{{ covData.seriousCount | division }}</div>
					<strong>现存无症状</strong>
				</li>
				<li>
					<span
						>较昨日 <i>{{ covData.confirmedIncr | number }}</i></span
					>
					<div class="bold">{{ covData.confirmedCount | division }}</div>
					<strong>累计确诊</strong>
				</li>
				<li>
					<span
						>较昨日 <i>{{ covData.deadIncr | number }}</i></span
					>
					<div class="bold">{{ covData.deadCount | division }}</div>
					<strong>累计死亡</strong>
				</li>
				<li>
					<span
						>较昨日 <i>{{ covData.curedIncr | number }}</i></span
					>
					<div class="bold">{{ covData.curedCount | division }}</div>
					<strong>累计治愈</strong>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	props: ["covData"],
	data() {
		return {};
	},

	//定义过滤器
	filters: {
		number: function (val) {
			if (val == 0) {
				return "无变化";
			} else {
				val = val > 0 ? "+" + val : val;
				return val;
			}
		},
		time: function (times) {
			var data = new Date(times);
			var YY = data.getFullYear();
			var MM = data.getMonth() + 1;
			var DD = data.getDate();
			var hh = data.getHours();
			var mm = data.getMinutes();
			var ss = data.getSeconds();
			return `${YY}-${MM}-${DD} ${hh}:${mm}:${ss}`;
			// 另一种方法  xxxx/xx/xx
			// times = new Date().toLocaleString("chinses", { gour12: false });
			// return times;
		},
		// 三位一个，
		division: function (num) {
			if (num == undefined) return "";
			return num.toLocaleString();
		},
	},
};
</script>

<style lang="less" scoped>
.num {
	background: #f5f5f5;
	padding-top: 0.3rem;
	.content {
		background: #fff;
		padding: 0.2rem;
		min-height: 2rem;
		border-radius: 0.2rem 0.2rem 0 0;

		.title {
			color: #666;
			margin-bottom: 0.2rem;
		}
	}

	.wrap {
		display: flex;
		flex-wrap: wrap;
		padding-top: 0.3rem;
		border-radius: 0.1rem;
		box-shadow: 0 0 3px 2px rgba(175, 172, 172, 0.2);
		li {
			width: 33.3333%;
			text-align: center;
			margin-bottom: 0.2rem;
			color: #666;
			strong {
				color: #333;
			}
			i {
				font-style: normal;
			}
		}
		.bold {
			font-weight: 700;
		}
		li:nth-child(1) .bold {
			color: red;
		}
		li:nth-child(2) .bold {
			color: green;
		}
		li:nth-child(3) .bold {
			color: rgba(255, 187, 0, 0.767);
		}
		li:nth-child(4) .bold {
			color: rgb(0, 174, 255);
		}
		li:nth-child(5) .bold {
			color: rgb(68, 0, 255);
		}
		li:nth-child(6) .bold {
			color: rgb(255, 0, 85);
		}
	}
}
</style>