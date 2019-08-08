<template>
  <div class="snackBottom">
    <button>上一页</button>
    <span>1</span>
    <button>上一页</button>
  </div>
</template>
<script>
export default {
  name: 'snackBottom'
}
</script>
<style lang="less" scoped>
.snackBottom {
  background: white;
  margin-top: 10px;
  padding: 8px 10px;
  button {
    padding: 5px 10px;
    border: 1.2px solid #65d7ce;
    background: white;
    color: #65d7ce;
  }
  span {
    display: inline-block;
    padding: 5px 8px;
  }
}
</style>
