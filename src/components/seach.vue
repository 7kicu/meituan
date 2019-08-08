<template>
  <div id="seach">
    <div class="city_top">
      <div>
        <router-link to="/" class="city_top_l">
          <i class="iconfont city_top_l">&#xe63a;</i>
        </router-link>
      </div>
      <span class="nav-header">搜索</span>
      <div class="city_r">
        <router-link to="/" class="city_top_l">
          <i class="iconfont menu" to="/">&#xe612;</i>
        </router-link>
      </div>
    </div>
    <img class="index_img" src="http://ms0.meituan.net/touch/img/download_banner.png" alt />
    <div class="seach_int">
      <i class="iconfont">&#xe603;</i>
      <input type="text" placeholder="输入商家名、品类或商圈" />
      <button>搜索</button>
    </div>
    <div class="seach_cont">
      <span class="place">周边热门</span>
      <span>阿康小吃万...</span>
      <span>银基水世界...</span>
      <span>嘿糖 高新...</span>
      <span>京秀 麻辣...</span>
      <span>coco 都可...</span>
      <span>牛肉陕西...</span>
      <span>郑州方特水...</span>
    </div>
    <foot></foot>
  </div>
</template>
<script>
import foot from '@/common/foot'
export default {
  name: 'seach',
  components: {
    foot
  }
}
</script>
<style lang="less" scoped>
#seach {
  background: #f0efed;
  .index_img {
    width: 100%;
  }
  .seach_int {
    position: relative;
    text-align: center;
    padding-bottom: 10*2px;
    input {
      width: 80%;
      height: 0.6rem;
      margin-top: 10*2px;
      text-align: center;
      border-radius: 5*2px;
      border: 1*2px solid #ccc;
    }
    i {
      position: absolute;
      top: 20*2px;
      left: 30*2px;
    }
    button {
      margin-top: 9*2px;
      width: 15%;
      height: 0.65rem;
      background: #fff;
      border-radius: 5*2px;
      border: 1*2px solid #ccc;
    }
  }
  .seach_cont {
    padding: 10*2px;
    background: #fff;
    text-align: center;
    span {
      display: inline-block;
      border-bottom: 1*2px solid #ccc;
      border-right: 1*2px solid #ccc;
      padding: 5*2px;
      margin-top: 20*2px;
    }
    .place {
      color: salmon;
    }
  }
  .city_top {
    height: 1.01rem;
    color: #fff;
    background: #06c1ae;
    border-bottom: 1*2px solid #21897d;
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
}
</style>
