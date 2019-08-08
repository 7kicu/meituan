<template>
  <div id="ktv">
    <div class="ktv_top">
      <list11-top></list11-top>
      <ktv />
    </div>
  </div>
</template>
<script>
import list11Top from './list11components/list11style'
import ktv from './components/ktv'
export default {
  name: 'list6',
  components: {
    list11Top,
    ktv
  }
}
</script>
<style lang="less" scoped>
</style>
