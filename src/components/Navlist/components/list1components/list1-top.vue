<template>
  <div class="list1Top">
    <div class="top">
      <router-link to="/" class="router1">
        <i class="iconfont">&#xe63a;</i>
      </router-link>
      <router-link class="router2" to="/seach">
        <div class="ipt">
          <i class="iconfont">&#xe603;</i>
          <input type="text" placeholder="输入商家名，品类或商圈" />
        </div>
      </router-link>
      <router-link to="/my">
        <i class="iconfont three">&#xe61d;</i>
      </router-link>
    </div>
    <img class="index_img" src="http://ms0.meituan.net/touch/img/download_banner.png" alt />
  </div>
</template>

<script>
export default {
  name: 'list1Top'
}
</script>

<style lang="less" scoped>
.list1Top {
  height: 3rem;
  position: relative;
  .top {
    height: 1rem;
    z-index: 10;
    position: absolute;
    top: 0.3rem;
    width: 100%;
    display: flex;
    .router2 {
      width: 80%;
      display: inline-block;
      margin-left: 0.2rem;
      .ipt {
        width: 100%;
        height: 0.8rem;
        border-radius: 40px;
        background: white;
        position: relative;
        i {
          color: gray;
          font-size: 0.5rem;
          left: 1rem;
          text-align: center;
          position: absolute;
          top: 0.2rem;
        }
        input {
          width: 50%;
          height: 0.8rem;
          padding-left: 0.2rem;
          font-size: 0.4rem;
          margin-left: 1.5rem;
        }
      }
    }
    .router1 {
      display: block;
      line-height: 1rem;
      margin-left: 0.2rem;
      i {
        font-size: 0.7rem;
        color: white;
      }
    }
  }
  img {
    width: 100%;
    position: absolute;
    left: 0;
    z-index: -10;
    top: 0;
    height: 100%;
  }
  .three {
    color: white;
    font-size: 0.7rem;
    font-weight: bold;
    line-height: 1rem;
    margin-left: 0.2rem;
  }
}
</style>
