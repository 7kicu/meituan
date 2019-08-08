<template>
  <div id="list13">
    <snackTop></snackTop>
    <img class="index_img" src="http://ms0.meituan.net/touch/img/download_banner.png" alt />
    <search></search>
    <!-- <snackList></snackList> -->
    <snackOpen></snackOpen>
    <snackBottom></snackBottom>
  </div>
</template>
<script>
// import hometop from '@/common/hometop'
import snackTop from '@/components/snack/snackTop'
import search from './list11components/search'
// import snackList from '@/components/snack/snackList'
import snackOpen from '@/components/snack/snackOpen'
import snackBottom from '@/components/snack/snackBottom'
export default {
  name: 'list13',
  components: {
    snackTop,
    search,
    // snackList
    snackOpen,
    snackBottom

  }
}
</script>
<style lang="less" scoped>
#list13 {
  background: #f0efed;
}
img {
  width: 100%;
}
</style>
