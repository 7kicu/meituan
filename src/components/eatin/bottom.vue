<template>
  <div class="bottom">
    <button>上一页</button>
    <span>1</span>
    <button>上一页</button>
  </div>
</template>
<script>
export default {
  name: 'bottom'
}
</script>
<style lang="less" scoped>
.bottom {
  background: white;
  margin-top: 10*2px;
  padding: 8*2px 10*2px;
  button {
    padding: 5*2px 10*2px;
    border: 1.2*2px solid #65d7ce;
    background: white;
    color: #65d7ce;
  }
  span {
    display: inline-block;
    padding: 5*2px 8*2px;
  }
}
</style>
