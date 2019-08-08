<template>
  <div class="home">
    <home-top />
    <img class="index_img" src="http://ms0.meituan.net/touch/img/download_banner.png" alt />
    <swiper class="swiper" :options="swiperOption">
      <!-- slides -->
      <swiper-slide>
        <nav-list :navlist="navlist"></nav-list>
      </swiper-slide>
      <swiper-slide>
        <nav-list :navlist="navlist2"></nav-list>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>

      <!-- Optional controls -->
    </swiper>
    <div class="gus">
      <p class="gus_p">猜你喜欢</p>
      <div class="product">
        <ul>
          <li class="pro_li" @click="run(i)" v-for="(v,i) in guess" :key="i">
            <div class="pro_div">
              <img class="pro_img" :src="v.img" alt />
            </div>
            <div class="cont">
              <span class="cont_f">{{v.name}}</span>
              <p>{{v.partic}}</p>
              <span class="color_s">{{v.price}}</span>
              <span class="color_s1">元</span>
              <span>门市价:{{v.shopprice}}</span>
              <span class="cont_r">{{v.sales}}</span>
            </div>
          </li>
          <li class="all_list">
            <p class="all_l">查看全部团购</p>
            <i class="iconfont all_r">&#xe731;</i>
          </li>
        </ul>
      </div>
    </div>
    <foot></foot>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { getguess } from '@/api/apidata'
import homeTop from '@/common/hometop'
import foot from '@/common/foot'
import navList from '@/components/Navlist/Navlist'
import { getNavList, getNavList2 } from '@/api/apidata.js'
import Bus from '@/common/bus.js'
export default {
  name: 'home',
  data () {
    return {
      guess: {},
      navlist: {},
      navlist2: {},
      swiperOption: {
        // loop: true,
        // autoplay: 1000, // 自动轮播
        // speed: 600,
        // // 如果需要分页器
        pagination: '.swiper-pagination'
      }
    }
  },
  created () {
    getguess().then(({ data }) => {
      // console.log(data)
      this.guess = data.data
      // console.log(this.guess)
    })
    getNavList().then(res => {
      // console.log(res)

      this.navlist = res.data
    })
    getNavList2().then(res => {
      // console.log(res)

      this.navlist2 = res.data
    })
  },
  methods: {
    run: function (i) {
      this.$router.push('/content')
      this.$nextTick(function () {
        Bus.$emit('content', this.guess, i)
      })
    }
  },
  components: {
    swiper,
    swiperSlide,
    homeTop,
    foot,
    getguess,
    navList
  }
}
</script>

<style lang="less" scoped>
.home {
  height: 100%;
  background: #f0efed;
  .index_img {
    width: 100%;
  }
  .swiper {
    height: 200 * 2px;
    background: #fff;
  }
  .gus {
    margin-top: 20 * 2px;
    border-top: 1 * 2px solid #e5e2dc;
    background: #fff;
    h3 {
      padding: 10 * 2px 5 * 2px;
    }
    .gus_p {
      border-bottom: 1 * 2px solid #e5e5e5;
      padding: 10 * 2px;
      font-size: 16 * 2px;
    }
    .product {
      .all_list {
        padding: 5 * 2px 10 * 2px;
        .all_l {
          width: 90%;
          display: inline-block;
          color: #06ceae;
          font-size: 0.4rem;
        }
        .all_r {
          width: 10%;
          color: #06ceae;
          font-size: 0.6rem;
        }
      }
    }
    .pro_li {
      height: 90 * 2px;
      overflow: hidden;
      margin-bottom: 10 * 2px;
      border-bottom: 1 * 2px solid #e5e2dc;
      padding: 10 * 2px;
      img {
        width: 120 * 2px;
        height: 90 * 2px;
      }
      .pro_div {
        width: 60%;
      }
      .cont {
        width: 60%;
        display: inline-block;
        margin-left: 130 * 2px;
        position: relative;
        top: -80 * 2px;
        p {
          padding-top: 10 * 2px;
          padding-bottom: 30 * 2px;
          font-size: 25px;
          color: #666;
        }
        span {
          font-size: 20px;
          color: #666;
        }
        .color_s {
          font-size: 0.5rem;
          color: #06ceae;
        }
        .color_s1 {
          color: #06ceae;
        }
        .cont_r {
          position: absolute;
          right: 10 * 2px;
          top: 70 * 2px;
        }
        .cont_f {
          font-size: 30px;
        }
      }
    }
  }
}
</style>
