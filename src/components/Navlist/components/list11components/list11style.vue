<template>
  <div id="list11">
    <list11-top></list11-top>
    <img class="index_img" src="http://ms0.meituan.net/touch/img/download_banner.png" alt />
    <search></search>
  </div>
</template>
<script>
import list11Top from './list11-top'
import search from './search'
export default {
  name: 'list11',
  components: {
    list11Top,
    search
  },
  data () {
    return {
      list11: {}
    }
  }
}
</script>
<style lang="less" scoped>
#list11 {
  width: 100%;
  .index_img {
    width: 100%;
  }
}
</style>
