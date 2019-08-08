<template>
  <div class="tour-top">
    <div class="nav-left">
      <router-link to="/" tag="a" class="back">
        <i class="iconfont icon-back" id="left-arrow">&#xe63a;</i>
      </router-link>
    </div>
    <h1 class="nav-title">周边游</h1>
    <div class="nav-right">
      <router-link to="/" tag="a" class="back">
        <i class="iconfont icon-back" id="left-arrow">&#xe612;</i>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TourTop'
}
</script>
<style lang="less" scoped>
.tour-top {
  color: #fff;
  background: #06c1ae;
  border-bottom: 1 * 2px solid #21897d;
  display: flex;
  height: 1.01rem;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  .nav-left {
    height: 1.01rem;

    line-height: 1.01rem;
    a {
      display: block;
      width: 100%;
      padding-top: 0.1rem;
      text-align: center;
      i {
        font-size: 0.7rem;
        color: white;
        margin: 0 0.2rem;
      }
    }
  }
  .nav-title {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    font-size: 0.36rem;
    font-weight: 400;
    text-align: center;
    line-height: 1.01rem;
    margin: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .nav-right {
    height: 100%;
    a {
      padding-right: 0.15rem;
      padding-top: 0.1rem;
      display: inline-block;
      i {
        font-size: 1rem;
        color: white;
        display: inline-block;
      }
    }
  }
}
</style>
