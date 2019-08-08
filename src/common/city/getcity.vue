<template>
  <div id="getcity">
    <div class="city_top">
      <div>
        <router-link to="/" class="city_top_l">
          <i class="iconfont city_top_l">&#xe63a;</i>
        </router-link>
      </div>
      <span class="nav-header">选择城市</span>
      <div class="city_r">
        <i class="iconfont menu" @click="to_city">&#xe612;</i>
        <i class="iconfont index" @click="to_seach">&#xe603;</i>
      </div>
    </div>
    <div class="city_cont">
      <div class="city_cont_t">
        <span>当前城市:</span>
        <span class="city_cont_t1">郑州</span>
      </div>
      <p class="city_zz">最近访问</p>
      <div class="city_cont_t">
        <span>北京</span>
      </div>
      <p class="city_zz">热门城市</p>
      <div class="city_cont_t">
        <span>北京</span>
        <span>上海</span>
        <span>广州</span>
        <span>深圳</span>
        <span>天津</span>
        <span>西安</span>
        <span>重庆</span>
        <span>杭州</span>
        <span>南京</span>
        <span>武汉</span>
        <span>成都</span>
      </div>
    </div>
    <foot></foot>
  </div>
</template>
<script>
import foot from '@/common/foot'
export default {
  name: 'getcity',
  methods: {
    to_city () {
      this.$router.push('/')
    },
    to_seach () {
      this.$router.push('/seach')
    }
  },
  components: {
    foot
  }
}
</script>
<style lang="less" scoped>
#getcity {
  background: #f0efed;
  .city_cont {
    padding: 10 * 2px;
    p {
      font-size: 0.3rem;
      margin-bottom: 10 * 2px;
    }
    .city_cont_t {
      background: #fff;
      //   height: 0.8rem;
      line-height: 0.8rem;
      padding: 0.1rem 0.2rem;
      font-size: 0.3rem;
      border-radius: 5 * 2px;
      box-shadow: 0rem 0rem 0.1rem #ccc;
      margin-bottom: 0.3rem;
      span {
        width: calc(100% / 5);
        padding: 11 * 2px;
      }
      .city_cont_t1 {
        color: #06c1ae;
      }
    }
  }
}
.city_top {
  height: 1.01rem;
  color: #fff;
  background: #06c1ae;
  border-bottom: 1 * 2px solid #21897d;
  display: -webkit-box;
  display: -ms-flexbox;
  position: relative;
  .city_top_l {
    line-height: 1.2rem;
    font-size: 0.5rem;
    padding-left: 0.2rem;
    color: #fff;
  }
  .nav-header {
    display: block;
    -webkit-box-flex: 1;
    font-size: 0.36rem;
    font-weight: 400;
    text-align: center;
    line-height: 1.2rem;
    margin: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .city_r {
    line-height: 1.2rem;
    .menu {
      font-size: 0.5rem;
      padding-right: 0.2rem;
    }
    .index {
      font-size: 0.4rem;
      padding-right: 0.2rem;
    }
  }
}
</style>
