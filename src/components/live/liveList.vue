<template>
  <div class="liveList">
    <div class="liveList1">
      <div class="son">汽车服务</div>
      <div class="son">婚纱摄影</div>
      <div class="son">证件照</div>
      <div class="son">配镜</div>
    </div>
    <div class="liveList2">
      <div class="son">搬家</div>
      <div class="son">体检/齿科</div>
      <div class="son">其他生活</div>
      <div class="son">。。。</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'liveList'
}
</script>
<style lang="less" scoped>
.liveList {
  background: #f3f2ef;
  .liveList1 {
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
  .liveList2 {
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
