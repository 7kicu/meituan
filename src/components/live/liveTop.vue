<template>
  <div class="liveTop">
    <div class="liveTop-one">
      <a class="iconfont" href="/">&#xe63a;</a>
    </div>
    <div class="liveTop-two">
      <div class="liveTop-two-in">
        <span class="iconfont">&#xe603;</span>
        <input type="text" placeholder="请输入" />
      </div>
    </div>
    <div class="liveTop-three">
      <span class="iconfont">&#xe61d;</span>
      <br />
      <p>我的</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'liveTop'
}
</script>
<style lang="less" scoped>
.liveTop {
  background: #06c1ae;
  width: 100%;
  display: flex;
}
.liveTop-one {
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
.liveTop-two {
  width: 76%;

  color: white;
  .liveTop-two-in {
    width: 100%;
    height: 60%;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    margin-top: 10 * 2px;
    padding-left: 5 * 2px;
    input {
      width: 88%;
      height: 100%;
      background: rgba(0, 0, 0, 0);

      // position: relative;
    }
    span {
      font-size: 14 * 2px;
      margin-top: 5 * 2px;
    }
  }
}
.liveTop-three {
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
