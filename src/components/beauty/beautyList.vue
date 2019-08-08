<template>
  <div class="beautyList">
    <div class="beautyList1">
      <div class="son">美发</div>
      <div class="son">美容美体</div>
      <div class="son">美甲美睫</div>
      <div class="son">瑜伽舞蹈</div>
    </div>
    <div class="beautyList2">
      <div class="son">瘦身纤体</div>
      <div class="son">韩式定妆</div>
      <div class="son">祛痘</div>
      <div class="son">。。。</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'beautyList'
}
</script>
<style lang="less" scoped>
.beautyList {
  background: #f3f2ef;
  .beautyList1 {
    display: flex;
    font-size: 13 * 2px;
    background: white;

    .son {
      display: flex;
      flex: 1;
      text-align: center;
      justify-content: center;
      padding: 10 * 2px 0;
      border: 1px solid #f3f2ef;
    }
  }
  .beautyList2 {
    display: flex;
    font-size: 13 * 2px;
    background: white;
    .son {
      display: flex;
      flex: 1;
      text-align: center;
      justify-content: center;
      padding: 10 * 2px 0;
      border: 1px solid #f3f2ef;
      border-top: none;
    }
  }
}
</style>
