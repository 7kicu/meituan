<template>
  <div class="snackList">
    <div class="snackList1">
      <span class="spans">甜点饮品</span>
      <span class="iconfont">&#xe6aa;</span>
    </div>
    <div class="snackList2">
      <span>全城</span>
      <span class="iconfont">&#xe6aa;</span>
    </div>
    <div class="snackList3">
      <span>默认排序</span>
      <span class="iconfont">&#xe6aa;</span>
    </div>
    <div class="snackList4">
      <span>筛选</span>
      <span class="iconfont">&#xe6aa;</span>
    </div>
  </div>
</template>
<script>

export default {
  name: 'snackList'

}
</script>
<style lang="less" scoped>
.snackList {
  display: flex;
  width: 100%;
  background: white;
}
.snackList1 {
  display: flex;

  justify-content: center;
  flex: 1;
  padding: 14px 0;
  border: 1px solid #f3f2ef;
  .iconfont {
    color: #b7b7b7;
  }
}
.snackList2 {
  display: flex;
  text-align: center;
  justify-content: center;
  flex: 1;
  padding: 14px 0;
  border: 1px solid #f3f2ef;
  .iconfont {
    color: #b7b7b7;
  }
}
.snackList3 {
  display: flex;
  text-align: center;
  justify-content: center;
  flex: 1;
  padding: 14px 0;
  border: 1px solid #f3f2ef;
  .iconfont {
    color: #b7b7b7;
  }
}
.snackList4 {
  display: flex;
  flex: 1;
  text-align: center;
  justify-content: center;
  padding: 14px 0;
  border: 1px solid #f3f2ef;

  .iconfont {
    color: #b7b7b7;
  }
}
</style>
