<template>
	<div class="swiper">
		<swiper ref="mySwiper" :options="swiperOptions">
			<swiper-slide v-for="item in banner" :key="item.title">
				<img :src="item.image" alt="" />
			</swiper-slide>

			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
		<!-- 轮播的图片按钮 -->
		<ul class="list">
			<li
				v-for="(item, index) in banner"
				:key="item.title"
				:class="{ active: index == num }"
				@click="changeSwiper(index)"
			>
				{{ item.title }}
			</li>
		</ul>
	</div>
</template>

<script>
import api from "../../api/index.js";
export default {
	data() {
		let that = this;
		return {
			num: 0,
			arr: [1, 2, 3, 4, 5],
			banner: [],

			//swiper配置内容
			swiperOptions: {
				pagination: {
					el: ".swiper-pagination",
				},
				autoplay: {
					delay: 3000,
					stopOnLastSlide: false,
					disableOnInteraction: true,
				},
				//开启无缝会给填补一个，去掉就可以下方changeSwiper就了可以正常切换
				//或者index+1
				loop: true,
				on: {
					slideChangeTransitionStart: function () {
						//此时的this指向的是函数
						that.num = this.activeIndex - 1;
						//修改num=[0，1，2，3，4]
						if (this.activeIndex == that.arr.length + 1) {
							that.num = 0;
						}
						console.log("轮播图", this.activeIndex); //2.3.4.5.6
						//this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
					},
				},
			},
		};
	},
	computed: {
		//获取swiper实例对象
		swiper() {
			return this.$refs.mySwiper.$swiper;
		},
	},
	mounted() {
		api.getSwiperBanner().then((res) => {
			this.banner = res.data.result;
		});
	},
	methods: {
		changeSwiper(index) {
			//高亮选中
			this.num = index;
			//让swiper切换
			this.swiper.slideTo(index + 1, 1000, false);
		},
	},
};
</script>

<style lang="less" scoped>
.swiper {
	.list {
		display: flex;
		li {
			flex: 1;
			padding: 0.1rem;
			font-size: 0.24rem;
			line-height: 0.32rem;
			margin: 0.1rem;
			background: #eee;
			color: #666;
			text-align: center;
			display: flex;
			align-items: center;
		}
		.active {
			background: rgba(80, 116, 173, 0.3);
			color: #fff;
		}
	}
	img {
		width: 100%;
	}
}
</style>