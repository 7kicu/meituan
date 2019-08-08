<template>
  <div class="pedTop">
    <div class="nav-one">
      <router-link to="/" tag="a">
        <a class="iconfont" href="/">&#xe63a;</a>
      </router-link>
    </div>
    <div class="nav-two">
      <span>分类</span>
    </div>
    <div class="nav-three">
      <span class="iconfont">&#xe61d;</span>
      <br />
      <p>我的</p>
    </div>
    <div class="nav-four">
      <span class="iconfont">&#xe603;</span>
      <br />
      <p>搜索</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'pedTop'
}
</script>
<style lang="less" scoped>
.pedTop {
  background: #06c1ae;
  width: 100%;
  display: flex;
  border-bottom: 1 * 2px solid #21897d;
}
.nav-one {
  display: flex;
  padding-left: 5 * 2px;

  width: 12%;
  padding: 8 * 2px 0 * 2px;
  text-align: center;
  color: white;
  a {
    font-size: 28 * 2px;
    margin-top: 5 * 2px;
    margin-left: 20%;
    color: white;
  }
}
.nav-two {
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
.nav-three {
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
.nav-four {
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
