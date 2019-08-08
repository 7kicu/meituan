<template>
  <div class="Navigation">
    <div class="Navigation1">
      <span class="spans">代金券</span>
      <span class="iconfont">&#xe6aa;</span>
    </div>
    <div class="Navigation2">
      <span>全城</span>
      <span class="iconfont">&#xe6aa;</span>
    </div>
    <div class="Navigation3">
      <span>默认排序</span>
      <span class="iconfont">&#xe6aa;</span>
    </div>
    <div class="Navigation4">
      <span>筛选</span>
      <span class="iconfont">&#xe6aa;</span>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Navigation'

}
</script>
<style lang="less" scoped>
.Navigation {
  display: flex;
  width: 100%;
  background: white;
}
.Navigation1 {
  display: flex;

  justify-content: center;
  flex: 1;
  padding: 14 * 2 * 2px 0;
  border: 1 * 2 * 2px solid #f3f2ef;
  .iconfont {
    color: #b7b7b7;
  }
}
.Navigation2 {
  display: flex;
  text-align: center;
  justify-content: center;
  flex: 1;
  padding: 14 * 2 * 2px 0;
  border: 1 * 2 * 2px solid #f3f2ef;
  .iconfont {
    color: #b7b7b7;
  }
}
.Navigation3 {
  display: flex;
  text-align: center;
  justify-content: center;
  flex: 1;
  padding: 14 * 2 * 2px 0;
  border: 1 * 2 * 2px solid #f3f2ef;
  .iconfont {
    color: #b7b7b7;
  }
}
.Navigation4 {
  display: flex;
  flex: 1;
  text-align: center;
  justify-content: center;
  padding: 14 * 2 * 2px 0;
  border: 1 * 2 * 2px solid #f3f2ef;

  .iconfont {
    color: #b7b7b7;
  }
}
</style>
