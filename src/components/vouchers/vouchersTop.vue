<template>
  <div class="vouchersTop">
    <div class="vouchersTop-one">
      <router-link to="/">
        <i class="iconfont">&#xe63a;</i>
      </router-link>
    </div>
    <div class="vouchersTop-two">
      <span>分类</span>
    </div>
    <div class="vouchersTop-three">
      <span class="iconfont">&#xe61d;</span>
      <br />
      <p>我的</p>
    </div>
    <div class="vouchersTop-four">
      <span class="iconfont">&#xe603;</span>
      <br />
      <p>搜索</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'vouchersTop'
}
</script>
<style lang="less" scoped>
.vouchersTop {
  background: #06c1ae;
  width: 100%;
  display: flex;
}
.vouchersTop-one {
  display: flex;
  padding-left: 5 * 2px;

  width: 12%;
  padding: 8 * 2px 0 * 2px;
  text-align: center;
  color: white;
  i {
    font-size: 28 * 2px;
    margin-top: 5 * 2px;
    margin-left: 20%;
    color: white;
  }
}
.vouchersTop-two {
  display: flex;

  width: 64%;

  padding: 8 * 2px 0 * 2px;
  text-align: center;
  color: white;
  span {
    margin-top: 8 * 2px;
    margin-left: 45%;
    font-size: 20 * 2px;
  }
}
.vouchersTop-three {
  display: flex;
  width: 12%;

  padding: 8 * 2px 0 * 2px;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
  color: white;
  span {
    font-size: 22 * 2px;
  }
  p {
    font-size: 11 * 2px;
  }
}
.vouchersTop-four {
  display: flex;

  width: 12%;

  padding: 8 * 2px 0 * 2px;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
  color: white;
  span {
    font-size: 22 * 2px;
  }
  p {
    font-size: 11 * 2px;
  }
}
</style>
