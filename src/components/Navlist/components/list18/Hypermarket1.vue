<template>
  <div class="design">
    <div class="one" v-for="(v,i) in design" :key="i">
      <div class="top">
        <span>{{v.tit}}</span>
        <em>团</em>
      </div>
      <div class="cen">
        <span>{{v.grade}}</span>
        <span>{{v.price}}</span>
        <span class="gps">{{v.gps}}</span>
      </div>
      <div class="pic">
        <span v-for="(p,i) in v.img" :key="i">
          <img :src="p" alt class="pImg" />
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { getBanner } from '@/api/apidata'
export default {
  name: 'Design',
  data () {
    return {
      design: []
    }
  },
  created () {
    getBanner().then(({ data }) => {
      this.design = data.design
    })
  }
}
</script>
<style lang="less" scoped>
.one {
  margin-bottom: 20*2px;

  .top {
    width: 95%;
    margin-left: 2%;
    span {
      font-size: 16*2px;
      font-weight: bold;
    }
    em {
      color: white;
      font-size: 12*2px;
      background: #27cdc0;
      padding: 1*2px 3*2px;
    }
  }
  .cen {
    width: 95%;
    margin-left: 2%;
    margin-top: 10*2px;
    margin-bottom: 10*2px;
    .gps {
      float: right;
      font-size: 12*2px;
    }
  }
  .pic {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    border-bottom: 1*2px solid #ddd;
    padding-bottom: 15*2px;
    span {
      width: calc(100% / 3);
      text-align: center;
      .pImg {
        width: 90%;
      }
    }
  }
}
</style>
