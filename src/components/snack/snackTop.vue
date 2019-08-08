<template>
  <div class="snackTop">
    <div class="snackTop-one">
      <a class="iconfont" href="/">&#xe63a;</a>
    </div>
    <div class="snackTop-two">
      <span>分类</span>
    </div>
    <div class="snackTop-three">
      <span class="iconfont">&#xe61d;</span>
      <br />
      <p>我的</p>
    </div>
    <div class="snackTop-four">
      <span class="iconfont">&#xe603;</span>
      <br />
      <p>搜索</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'snackTop'
}
</script>
<style lang="less" scoped>
.snackTop {
  background: #06c1ae;
  width: 100%;
  display: flex;
}
.snackTop-one {
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
.snackTop-two {
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
.snackTop-three {
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
.snackTop-four {
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
