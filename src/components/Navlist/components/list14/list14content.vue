<template>
  <div class="spa">
    <dl class="list" v-for="(v,i) in getlist14" :key="i" @click="run(i)">
      <dd class="poi-list-item">
        <a href="#">
          <span class="title">{{v.title}}</span>
          <i class="iconfont tuan">{{v.tuan}}</i>
          <i class="iconfont quan">{{v.quan}}</i>
          <div class="spa-in">
            <span class="stars">
              <i class="iconfont" v-for="(a,i) in parseInt(v.starText)" :key="i">&#xe70b;</i>
              <i
                class="iconfont icon1"
                v-if="parseInt(v.starText)>=3&&parseInt(v.starText)<5"
              >&#xe70b;</i>
              <i
                class="iconfont icon1"
                v-if="parseInt(v.starText)>=3&&parseInt(v.starText)<4"
              >&#xe70b;</i>
              <i class="iconfont icon2" v-if="parseInt(v.starText)==0">暂无评价</i>
              <em v-if="v.starText>0&&parseInt(v.starText)<=5">{{v.starText}}</em>
            </span>
            <span class="spa-in-right">
              <span>{{v.locdist}}</span>
              <span>{{v.address}}</span>
            </span>
          </div>
        </a>
      </dd>
      <dd>
        <dl class="bd-deal-list" v-for="(j,i) in v.productList" :key="i">
          <dd class="spa-cent-left">
            <img :src="j.pic" alt />
          </dd>
          <dd class="spa-cent-right">
            <h1>{{j.title}}</h1>
            <div class="price">
              <span class="strong">{{j.strong}}</span>
              <span class="strong2">门市价:{{j.strong2}}</span>
              <span v-if="j.strong3==''" class="strong3"></span>
              <span v-if="j.strong3!=''" class="strong4">{{j.strong3}}</span>
              <span class="sold">已售{{j.sold}}</span>
            </div>
          </dd>
        </dl>
      </dd>
      <dd></dd>
    </dl>
  </div>
</template>
<script>
import { getlist14 } from '@/api/apidata.js'
import Bus from '@/common/bus.js'
export default {
  name: 'spa',
  data () {
    return {
      getlist14: {}

    }
  },
  created () {
    getlist14().then(({ data }) => {
      this.getlist14 = data
    })
  },
  methods: {
    run: function (i) {
      this.$router.push('/content1')
      this.$nextTick(function () {
        Bus.$emit('content1', this.getlist14, i)
      })
    }
  }
}
</script>

<style lang="less" scoped>
.spa {
  width: 100%;
  .list {
    border-bottom: 1px solid #ddd8ce;
    margin-bottom: 13px * 2px;
    background-color: #fff;
    .poi-list-item {
      margin: 0;
      border-bottom: 1px solid #ddd8ce;
      overflow: hidden;
      font-size: inherit;
      font-weight: 400;
      position: relative;
      a {
        padding: 22px 15px;
        display: block;
        color: #333;
        font-size: 30px;
        .tuan {
          color: #06c1ae;
          font-size: 30px;
          margin: 0 10px;
        }
        .quan {
          color: #ff500b;
          font-size: 30px;
        }
        .spa-in {
          margin-top: 12px;
          color: #f90;
          i {
            font-size: 30px;
          }
          .icon1 {
            color: #e2e2e2;
            margin-left: -2px;
          }
          em {
            margin-left: 10px;
          }
          .spa-in-right {
            float: right;
            color: #666;
            font-size: 25px;
          }
        }
      }
    }
    .bd-deal-list {
      border-bottom: 1px solid #ddd8ce;
      padding: 22px 15px;
      display: flex;
      .spa-cent-left {
        width: 24%;
        height: 150px;
        overflow: hidden;
        img {
          height: 100%;
          margin-left: -15%;
        }
      }
      .spa-cent-right {
        margin-left: 20px;
        width: 74%;

        h1 {
          font-size: 15px * 2px;
          color: #333;
          overflow: hidden;
          white-space: nowrap;
          height: 80px;
          margin-bottom: 32px;
        }
        .price {
          width: 100%;
          display: inline-block;
          .strong {
            color: #06c1ae;
            font-size: 35px;
          }
          .strong2 {
            color: #666;
            font-size: 25px;
          }
          .strong3 {
            display: none;
          }
          .strong4 {
            color: #f90;
            padding: 8px 10px;
            font-size: 22px;
            border: 1px solid #f90;
          }
          .sold {
            float: right;
            font-size: 25px;
            color: #666;
          }
        }
      }
    }
  }
}
</style>
