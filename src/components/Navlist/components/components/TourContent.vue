<template>
  <dl class="list">
    <dd @click="run(i)" v-for="(l,i) in gation.data" :key="i">
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
          <span class="stars">
            <i class="iconfont icon" v-for="(v,i) in parseInt(l.starText)" :key="i">&#xe70b;</i>
            <i
              class="iconfont icon1"
              v-if="parseInt(l.starText)>=3&&parseInt(l.starText)<5"
            >&#xe70b;</i>
            <i
              class="iconfont icon1"
              v-if="parseInt(l.starText)>=3&&parseInt(l.starText)<4"
            >&#xe70b;</i>
            <em>{{l.starText}}分</em>
          </span>
          <span class="count">{{l.count}}</span>
        </div>
        <div class="list-lower">
          <span class="strong">￥:{{l.strong}}</span>
          <span class="strong-color">起</span>
          <span class="line-right address">{{l.address}}</span>
        </div>
      </div>
    </dd>
  </dl>
</template>

<script>
import Bus from '@/common/bus.js'
export default {
  name: 'TourContent',
  props: ['gation'],
  methods: {
    run: function (i) {
      this.$router.push('/content2')
      this.$nextTick(function () {
        Bus.$emit('content2', this.gation.data, i)
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
    height: 1.64rem;
    padding: 0.3rem 0;
    border-bottom: 0.01rem solid rgb(236, 233, 233);
    .left {
      position: absolute;
      width: 24%;
      height: 1.64rem;
      overflow: hidden;
      img {
        height: 100%;
        overflow: hidden;
      }
    }
    .right {
      margin-left: 28%;
      width: 72%;
      height: 1.64rem;
      .list-upper {
        width: 100%;
        height: 0.5rem;
        padding-top: 0.1rem;
        .icon-count-1 {
          max-width: calc(100% - 0.5rem);
        }
        .poi-name {
          font-size: 0.4rem;
          color: #333;
          display: inline-block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          box-sizing: border-box;
        }
        .icon-piao {
          color: #4dc8f1;
          font-size: 30px;
        }
        .icon-taocan {
          color: #ff9400;
          padding: 0 0.1rem;
          font-size: 30px;
        }
        .icon-xian {
          color: #bd82e3;
          font-size: 30px;
        }
      }
      .list-in {
        width: 100%;
        height: 0.3rem;
        .stars {
          color: #fdb338;
          font-size: 0.3rem;
          .icon1 {
            color: rgb(163, 163, 163);
            font-size: 30px;
          }
          .icon {
            font-size: 30px;
          }
        }
        em {
          margin: 0 0.15rem;
        }
        .count {
          float: right;
          font-size: 0.3rem;
          color: #666;
        }
      }
      .list-lower {
        width: 100%;
        margin-top: 0.3rem;
        .strong {
          color: #06c1ae;
          font-size: 0.38rem;
        }
        .strong-color {
          font-size: 0.3rem;
          color: #666;
        }
        .address {
          float: right;
          overflow: hidden; //超出部分隐藏
          text-overflow: ellipsis; //多行文本溢出显示省略号
          display: -webkit-box; //设置弹性盒模型
          -webkit-line-clamp: 1; //超出几行出现省略好号
          -webkit-box-orient: vertical;
          height: 0.3rem;
          font-size: 0.3rem;
        }
      }
    }
  }
}
</style>
