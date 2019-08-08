<template>
  <div class="classify">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>
        <div class="icon">
          <div class="ic">
            <div>
              <p class="iconfont">&#xe634;</p>
              <span class="fon">瓷砖</span>
            </div>
            <div>
              <p class="iconfont">&#xe635;</p>
              <span class="fon">厨卫洁具</span>
            </div>
            <div>
              <p class="iconfont">&#xe67b;</p>
              <span class="fon">橱柜</span>
            </div>
            <div>
              <p class="iconfont">&#xe630;</p>
              <span class="fon">油漆涂料</span>
            </div>
            <div>
              <p class="iconfont">&#xe67e;</p>
              <span class="fon">地板</span>
            </div>
            <div>
              <p class="iconfont">&#xe686;</p>
              <span class="fon">灯饰照明</span>
            </div>
            <div>
              <p class="iconfont">&#xe636;</p>
              <span class="fon">墙纸墙艺</span>
            </div>
            <div>
              <p class="iconfont">&#xe632;</p>
              <span class="fon">门窗</span>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="icon">
          <div class="ic">
            <div>
              <p class="iconfont">&#xe637;</p>
              <span class="fon">集成吊顶</span>
            </div>
            <div>
              <p class="iconfont">&#xe7f6;</p>
              <span class="fon">家用五金</span>
            </div>
            <div>
              <p class="iconfont">&#xe63b;</p>
              <span class="fon">楼梯</span>
            </div>
            <div>
              <p class="iconfont">&#xe6c3;</p>
              <span class="fon">木板木材</span>
            </div>
            <div>
              <p class="iconfont">&#xe697;</p>
              <span class="fon">管材管件</span>
            </div>
            <div>
              <p class="iconfont">&#xe62c;</p>
              <span class="fon">电工电料</span>
            </div>
            <div>
              <p class="iconfont">&#xe62d;</p>
              <span class="fon">其它建材</span>
            </div>
            <div>
              <p class="iconfont">&#xe617;</p>
              <span class="fon">房子</span>
            </div>
          </div>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="headline">
      <div class="headline-box">
        <div class="headline-box-left">
          <div class="headline-box-left-img">
            家装
            <br />头条
          </div>
        </div>
        <div class="headline-box-right">
          <ul class="headline-box-right-ul" id="lineul">
            <li class="swiper-slide">
              <a href="#">地板原来还可以这样铺，长见识了</a>
              <p>只要你够有创意，够脑洞，舍得砸钱，富有趣味性的地板绝对可以提升你家的颜值，不信来试试！</p>
              <img
                src="https://p1.meituan.net/wedding/4bec909b0087f45a1d549cf0eddb6d5956232.jpg%40100w_100h_1e_1c.webp"
                alt
              />
            </li>
            <li class="swiper-slide">
              <a href="#">现在厨房瓷砖已经不流行通铺了，</a>
              <p>小编为你推荐一款小花砖，近几年特别流行。下面来看看用小花砖是如何装饰新家的？</p>
              <img
                src="https://p1.meituan.net/wedding/4bec909b0087f45a1d549cf0eddb6d5956232.jpg%40100w_100h_1e_1c.webp"
                alt
              />
            </li>
            <li class="swiper-slide">
              <a href="#">什么灯具能让你的卧室看起来很有品位?</a>
              <p>小编为你推荐一款小花砖，近几年特别流行。下面来看看用小花砖是如何装饰新家的？</p>
              <img
                src="https://p1.meituan.net/wedding/4bec909b0087f45a1d549cf0eddb6d5956232.jpg%40100w_100h_1e_1c.webp"
                alt
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="banner">
      <img
        src="https://op.meituan.net/oppkit_pic/home_channel_rb/1513ff1f89bf3be9eea9be8e2bbb4146.png"
      />
    </div>
    <div class="design">
      <p>
        <router-link tag="a" to="/Design1">装修公司</router-link>

        <router-link tag="a" to="/Materials1">装修建材</router-link>

        <router-link tag="a" to="/Electrical1">家用电器</router-link>

        <router-link tag="a" to="/Hypermarket1">家装卖场</router-link>
      </p>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { getBanner } from '@/api/apidata'
export default {
  name: 'Classify',
  data () {
    return {
      banner: [],
      space: [],
      swiperOption: {
        autoplay: 1000,
        loop: true,
        cancelable: false
      }
    }
  },
  mounted () {
    this.aaa()
  },
  created () {
    getBanner().then(({ data }) => {
      this.banner = data.calts
    })
    getBanner().then(({ data }) => {
      this.space = data.space
    })
  },
  methods: {
    aaa: function () {
      var lne = 0
      var lineul = document.getElementById('lineul')
      lineul.innerHTML = lineul.innerHTML + lineul.innerHTML
      var linelis = lineul.children
      lineshow()
      function lineshow () {
        setInterval(() => {
          if (lne === linelis.length - 1) {
            lne = linelis.length / 2 - 1// 012
          }

          linelis[0].style.transition = 'none'
          linelis[0].style.marginTop = lne * -1 * 1 + 'rem'// -0 36 72 108 144 180  继承已经改变的量防止跳回

          setTimeout(function () {
            lne++
            linelis[0].style.transition = '0.5s'
            linelis[0].style.marginTop = lne * -1 * 1 + 'rem'// -36 72 108 144 180   改变量
          }, 30)
        }, 1500)
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>
<style lang="less" scoped>
.classify {
  margin-top: 20 * 2px;
}
.icon {
  width: 100%;
  .ic {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    div {
      text-align: center;
      width: calc(100% / 4);
      justify-content: space-around;
      margin-bottom: 12 * 2px;
      p {
        margin: auto;
        width: 55 * 2px;
        height: 55 * 2px;
        text-align: center;
        line-height: 55 * 2px;
        border-radius: 50%;
        background: #07be61;
        font-size: 20 * 2px;
        margin-bottom: 3 * 2px;
        color: #fff;
      }
      span {
        font-size: 12 * 2px;
      }
    }
  }
}
/* headline */
.headline {
  width: 100%;
  height: 1.4rem;
  display: flex;
}
.headline-box {
  width: 95%;
  height: 1rem;
  margin: auto;
  margin-bottom: 0rem;
  background: #fff;
  border-radius: 0.3rem 0.3rem 0rem 0rem;
  border-bottom: 1 * 2px solid #f8f8f8;
}
.headline-box-left {
  float: left;
  width: 1rem;
  height: 100%;
  margin-left: 0.1rem;
  margin-right: 0.1rem;
}
.headline-box-left .headline-box-left-img {
  font-size: 0.5rem;
  color: #07be61;
}
.headline-box-right {
  float: left;
  width: 5.8rem;
  height: 100%;
}
.headline-box-right .headline-box-right-ul {
  width: 100%;
  height: 1rem;
  display: block;
  overflow: hidden;
}
.headline-box-right .headline-box-right-ul li {
  overflow: hidden;
  position: relative;
}
.headline-box-right .headline-box-right-ul li a {
  display: inline-block;
  width: 4.5rem;
  color: black;
  margin-top: 5 * 2px;
  margin-left: 3 * 2px;
  font-weight: bold;
  font-size: 0.25rem;
}
.headline-box-right .headline-box-right-ul li p {
  width: 4.5rem;
  height: 0.25rem;
  overflow: hidden;
  font-size: 12 * 2px;
  margin-top: 10 * 2px;
  margin-left: 3 * 2px;
}
.headline-box-right .headline-box-right-ul li img {
  width: 0.8rem;
  height: 0.8rem;
  position: absolute;
  right: 10 * 2px;
  top: 5 * 2px;
}
.banner img {
  width: 100%;
  height: 100%;
}
.design {
  margin-top: 20 * 2px;
  margin-bottom: 200 * 2px;
  p {
    display: flex;
    text-align: center;
    a {
      width: calc(100% / 4);
      line-height: 45 * 2px;
      color: black;
    }
    a:hover {
      color: #07be61;
      border-bottom: 2 * 2px solid #07be61;
    }
  }
}
</style>
