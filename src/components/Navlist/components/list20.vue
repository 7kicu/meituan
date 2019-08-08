<template>
  <div id="list">
    <top></top>
    <div class="concent">
      <cent :list="list" :text="text"></cent>
    </div>
    <foot />
  </div>
</template>

<script>
import { getList20 } from '@/api/apidata'
import foot from '@/common/foot'
import Top from '@/components/Navlist/components/list20/top'
import Cent from '@/components/Navlist/components/list20/listcent'
export default {
  name: 'list20',
  data () {
    return {
      list: {},
      text: {}
    }
  },
  components: {
    Top,
    Cent,
    foot
  },
  created () {
    getList20().then(({ data }) => {
      this.list = data
      console.log(data)
    })
  }
}
</script>

<style lang="less" scoped>
#list {
  background: #f0efed;
  .concent {
    padding: 0 0.2rem;
  }
}
</style>
