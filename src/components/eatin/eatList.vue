<template>
  <div class="eatList">
    <div class="eatList1">
      <span class="spans">小吃快餐</span>
      <span class="iconfont">&#xe6aa;</span>
    </div>
    <div class="eatList2">
      <span>全城</span>
      <span class="iconfont">&#xe6aa;</span>
    </div>
    <div class="eatList3">
      <span>最新发布</span>
      <span class="iconfont">&#xe6aa;</span>
    </div>
    <div class="eatList4">
      <span>筛选</span>
      <span class="iconfont">&#xe6aa;</span>
    </div>
  </div>
</template>
<script>

export default {
  name: 'eatList'

}
</script>
<style lang="less" scoped>
.eatList {
  display: flex;
  width: 100%;
  background: white;
}
.eatList1 {
  display: flex;

  justify-content: center;
  flex: 1;
  padding: 14*2px 0;
  border: 1*2px solid #f3f2ef;
  .iconfont {
    color: #b7b7b7;
  }
}
.eatList2 {
  display: flex;
  text-align: center;
  justify-content: center;
  flex: 1;
  padding: 14*2px 0;
  border: 1*2px solid #f3f2ef;
  .iconfont {
    color: #b7b7b7;
  }
}
.eatList3 {
  display: flex;
  text-align: center;
  justify-content: center;
  flex: 1;
  padding: 14*2px 0;
  border: 1*2px solid #f3f2ef;
  .iconfont {
    color: #b7b7b7;
  }
}
.eatList4 {
  display: flex;
  flex: 1;
  text-align: center;
  justify-content: center;
  padding: 14*2px 0;
  border: 1*2px solid #f3f2ef;

  .iconfont {
    color: #b7b7b7;
  }
}
</style>
