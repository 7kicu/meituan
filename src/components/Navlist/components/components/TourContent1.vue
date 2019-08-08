<template>
  <dl class="list">
    <dd v-for="(l,i) in gation" :key="i" @click="run(i)">
      <div class="left">
        <img :src="l.pic" alt />
      </div>
      <div class="right">
        <div class="list-upper">
          <span class="poi-name icon-count-1">{{l.text}}</span>
          <span class="ficon">
            <i class="iconfont icon-piao">{{l.piao}}</i>
            <i class="iconfont icon-taocan">{{l.taocan}}</i>
            <i class="iconfont icon-xian">{{l.xian}}</i>
          </span>
        </div>
        <div class="list-in">
          <span class="list-in-span">{{l.title}}</span>
        </div>
        <div class="list-lower">
          <span class="strong">￥:{{l.strong}}</span>
          <span class="strong2">{{l.strong2}}</span>
          <span class="strong3" v-if="l.strong3!=''">{{l.strong3}}</span>
          <span class="strong4" v-if="l.strong3==''"></span>
          <span class="line-right address">已售 {{l.sold}}</span>
        </div>
      </div>
    </dd>
  </dl>
</template>

<script>
import Bus from '@/common/bus.js'
export default {
  name: 'TourContent1',
  props: ['gation'],
  methods: {
    run: function (i) {
      this.$router.push('/content2')
      this.$nextTick(function () {
        Bus.$emit('content2', this.gation, i)
      })
    }
  }
}
</script>
<style lang="less" scoped>
.list {
  width: 95%;
  padding: 0 2.5%;
  background: white;
  dd {
    width: 100%;
    display: flex;
    height: 80 * 2px;
    padding: 16 * 2px 0;
    border-bottom: 1 * 2px solid rgb(236, 233, 233);
    position: relative;
    .left {
      position: absolute;
      width: 23%;
      height: 80 * 2px;
      overflow: hidden;

      img {
        position: absolute;
        height: 100%;
        overflow: hidden;
        left: -25%;
      }
    }
    .right {
      margin-left: 28%;
      width: 72%;
      height: 80 * 2px;
      .list-upper {
        width: 100%;
        height: 22.5px * 2px;
        line-height: 22.5px * 2px;
        padding-top: 7.5px * 2px;
        .icon-count-1 {
          max-width: calc(100%);
        }
        .poi-name {
          font-size: 15px * 2px;
          color: #333;
          display: inline-block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          box-sizing: border-box;
        }
        i {
          font-size: 16px * 2px;
        }
        .icon-piao {
          color: #4dc8f1;
          padding-right: 5px * 2px;
        }
        .icon-taocan {
          color: #ff9400;
        }
        .icon-xian {
          color: #bd82e3;
          margin-left: 5px * 2px;
        }
      }
      .list-in {
        width: 100%;
        height: 15px * 2px;
        line-height: 15.5px * 2px;
        overflow: hidden;
        color: #666;
        font-size: 13.5px * 2px;
      }
      .list-lower {
        width: 100%;
        margin-top: 19px * 2px;
        line-height: 12px * 2px;
        .strong {
          color: #06c1ae;
          font-size: 19px * 2px;
        }
        .strong3 {
          padding: 8px 8px;
          border: 1px solid #f90;
          color: #f90;
        }
        .strong4 {
          display: none;
        }
        .address {
          float: right;

          font-size: 12px * 2px;
        }
      }
    }
  }
}
</style>
