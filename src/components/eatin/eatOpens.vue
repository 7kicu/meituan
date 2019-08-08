<template>
  <div class="eatOpens">
    <div class="eatOpen1" v-for="(l,i) in eat.data" :key="i" @click="run(i)">
      <p>
        {{l.poiname}}
        <span class="span1">{{l.span1}}</span>
        <span class="span2">{{l.span2}}</span>
      </p>
      <p class="one">
        <span class="span3">
          <span class="iconfont" v-for="(v,i) in parseInt(l.span3)" :key="i">&#xe698;</span>
          <span class="iconfont iconf" v-if="parseInt(l.span3)>=3&&parseInt(l.span3)<5">&#xe698;</span>
          <span class="iconfont iconf" v-if="parseInt(l.span3)>=3&&parseInt(l.span3)<4">&#xe698;</span>
          <!-- <span class="iconfont">&#xe698;</span>
          <span class="iconfont">&#xe698;</span>-->
          <span class="spn">{{l.span3}}</span>
        </span>
        <span class="span4">{{l.span4}}</span>
      </p>
      <div class="all">
        <div class="left">
          <img :src="l.img" alt />
        </div>
        <div class="right">
          <div class="right_title">{{l.title}}</div>
          <div class="right_title1">
            <p>
              <span class="p_span">{{l.shopprice}}</span>
              <span class="p_span1">{{l.shopprice2}}</span>
              <span class="p_span2">{{l.shopprice3}}</span>
              <span class="p_span3">{{l.sales}}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getEates } from '@/api/apidata'
import Bus from '@/common/bus.js'
export default {
  name: 'eatOpens',

  data () {
    return {
      eat: ['eat']
    }
  },
  created () {
    getEates().then(res => {
      this.eat = res.data
      // console.log(this.eat)
    })
  },
  methods: {
    run: function (i) {
      this.$router.push('/content11')
      this.$nextTick(function () {
        Bus.$emit('content11', this.eat.data, i)
      })
    }
  }
}
</script>
<style lang="less" scoped>
.eatOpen1 {
  padding-top: 10 * 2px;
  background: white;
  margin-top: 5 * 2px;
  padding-left: 10 * 2px;
  padding-right: 10 * 2px;
  padding-bottom: 22 * 2px;
  .span1 {
    display: inline-block;
    padding: 3 * 2px 3 * 2px;

    background: #e95200;
    font-size: 12 * 2px;
    border-radius: 3 * 2px;
    margin-left: 5 * 2px;
    color: white;
  }
  .span2 {
    display: inline-block;
    padding: 3 * 2px 3 * 2px;
    background: #06c1ae;
    font-size: 12 * 2px;
    border-radius: 3 * 2px;
    margin-left: 3 * 2px;
    color: white;
  }
  .one {
    width: 100%;
    font-size: 12 * 2px;
    margin-top: 5 * 2px;

    .span3 {
      display: block;
      float: left;
      width: 50%;
      .iconfont {
        color: #ff9900;
        font-size: 16 * 2px;
      }
      .spn {
        font-size: 16 * 2px;
        color: #ff9900;
      }
      .iconf {
        color: rgb(163, 163, 163);
      }
    }
    .span4 {
      display: block;
      float: left;
      width: 50%;
      text-align: right;
    }
  }
  .all {
    display: flex;
    width: 100%;
    height: 100%;

    padding: 10 * 2px 0;
    .left {
      width: 25%;

      img {
        width: 90 * 2px;
        height: 80 * 2px;
      }
    }
    .right {
      width: 75%;
      padding-left: 10 * 2px;
      .right_title {
        height: 76%;
        font-size: 14 * 2px;
      }
      .right_title1 {
        height: 24%;
      }
      p {
        position: relative;
        .p_span {
          font-size: 19 * 2px;
          color: #0fc3b1;
        }
        .p_span1 {
          font-size: 14 * 2px;
        }
        .p_span2 {
          font-size: 12 * 2px;
        }
        .p_span3 {
          font-size: 12 * 2px;
          position: absolute;
          right: 0;
          bottom: 0;
        }
      }
    }
  }
}
.eatOpen2 {
  clear: both;
  border-top: 1 * 2px solid #f3f2ef;
}
</style>
