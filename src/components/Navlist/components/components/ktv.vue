<template>
  <div id="ktv">
    <ul>
      <li v-for="(v,i) in ktv" :key="i" @click="run(i)">
        <div class="ktv_img">
          <img :src="v.img" alt />
        </div>
        <div class="ktv_cont">
          <h1>{{v.title}}</h1>
          <i class="iconfont icon" v-for="(s,i) in parseInt(v.star)" :key="i">&#xe70b;</i>
          <i class="iconfont icon1" v-if="parseInt(v.star)>=3&&parseInt(v.star)<5">&#xe70b;</i>
          <i class="iconfont icon1" v-if="parseInt(v.star)>=3&&parseInt(v.star)<4">&#xe70b;</i>
          <em>{{v.star}}分</em>
          <br />
          <span class="ktv_color">{{v.price}}元 起</span>
          <span class="ktv_pla">{{v.place}}</span>
        </div>
        <p>
          <i class="iconfont">&#xe60f;</i>
          {{v.cont}}
        </p>
      </li>
    </ul>
    <foot></foot>
  </div>
</template>
<script>
import { getKtv } from '@/api/apidata'
import foot from '@/common/foot'
import Bus from '@/common/bus.js'
export default {
  name: 'ktv',
  data () {
    return {
      ktv: {}
    }
  },
  components: {
    getKtv,
    foot
  },
  created () {
    getKtv().then(({ data }) => {
      //   console.log(data.data)
      this.ktv = data.data
    })
  },
  methods: {
    run: function (i) {
      this.$router.push('/content6')
      this.$nextTick(function () {
        Bus.$emit('content6', this.ktv, i)
      })
    }
  }
}
</script>
<style lang="less" scoped>
#ktv {
  background: #f0efed;
  li {
    width: 100%;
    margin-bottom: 30px;
    border: 1px solid #f2f2f2;
    background: #fff;
    overflow: hidden;
    padding-top: 20px;
    .ktv_img,
    .ktv_cont {
      display: inline-block;
    }
    .ktv_img {
      width: 30%;
      position: relative;
      img {
        width: 100%;
        position: absolute;
        top: -140px;
        left: 10px;
      }
    }
    .ktv_cont {
      line-height: 50px;
      width: 65%;
      margin-left: 30px;
      h1 {
        font-size: 30px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      .ktv_color {
        font-size: 35px;
        color: #06c1ae;
      }
      .ktv_pla {
        padding-left: 20px;
      }
      .icon,
      .icon1 {
        font-size: 30px;
      }
      .icon {
        color: salmon;
      }
      .icon1 {
        color: #ccc;
      }
    }
  }
  p {
    border-top: 1px solid #ccc;
    text-align: center;
    margin-top: 30px;
    padding: 10px 0;
    font-size: 25px;
    color: #666;
    i {
      display: inline-block;
      font-size: 40px;
      color: salmon;
    }
  }
}
</style>
