<template>
  <div class="vouchersList">
    <div class="vouchersList1">
      <span class="spans">代金券</span>
      <span class="iconfont">&#xe6aa;</span>
    </div>
    <div class="vouchersList2">
      <span>全城</span>
      <span class="iconfont">&#xe6aa;</span>
    </div>
    <div class="vouchersList3">
      <span>默认排序</span>
      <span class="iconfont">&#xe6aa;</span>
    </div>
    <div class="vouchersList4">
      <span>筛选</span>
      <span class="iconfont">&#xe6aa;</span>
    </div>
  </div>
</template>
<script>

export default {
  name: 'vouchersList'

}
</script>
<style lang="less" scoped>
.vouchersList {
  display: flex;
  width: 100%;
  background: white;
}
.vouchersList1 {
  display: flex;

  justify-content: center;
  flex: 1;
  padding: 14 * 2px 0;
  border: 1 * 2px solid #f3f2ef;
  .iconfont {
    color: #b7b7b7;
  }
}
.vouchersList2 {
  display: flex;
  text-align: center;
  justify-content: center;
  flex: 1;
  padding: 14 * 2px 0;
  border: 1 * 2px solid #f3f2ef;
  .iconfont {
    color: #b7b7b7;
  }
}
.vouchersList3 {
  display: flex;
  text-align: center;
  justify-content: center;
  flex: 1;
  padding: 14 * 2px 0;
  border: 1 * 2px solid #f3f2ef;
  .iconfont {
    color: #b7b7b7;
  }
}
.vouchersList4 {
  display: flex;
  flex: 1;
  text-align: center;
  justify-content: center;
  padding: 14 * 2px 0;
  border: 1 * 2px solid #f3f2ef;

  .iconfont {
    color: #b7b7b7;
  }
}
</style>
