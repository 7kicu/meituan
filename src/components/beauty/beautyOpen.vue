<template>
  <div class="beautyOpen">
    <ul class="uls" v-for="(u,i) in eat" :key="i" @click="run(i)">
      <p>
        {{u.title}}
        <span class="span1">{{u.span1}}</span>
        <span class="span2">{{u.span2}}</span>
        <!-- <span class="spans" v-if="l.spans!=''">{{l.spans}}</span> -->
      </p>
      <p class="one">
        <span class="span3">
          <span class="iconfont" v-for="(v,i) in parseInt(u.text)" :key="i">&#xe698;</span>
          <span class="iconfont iconf" v-if="parseInt(u.text)>=3&&parseInt(u.text)<5">&#xe698;</span>
          <span class="iconfont iconf" v-if="parseInt(u.text)>=3&&parseInt(u.text)<4">&#xe698;</span>
          <span class="spn">{{u.text}}</span>
        </span>
        <span class="span4">{{u.num}}{{u.place}}</span>
      </p>
      <li class="lis" v-for="(l,i) in u.data" :key="i">
        <div class="left">
          <img :src="l.img" alt />
        </div>
        <div class="right">
          <div id="one">{{l.title}}</div>
          <div id="two">
            <p id="three">
              <span id="four">{{l.price}}</span>
              <span id="five">{{l.yuan}}</span>
              <span id="six" v-if="l.door!=''">{{l.door}}</span>
              <span id="six" v-if="l.doorprice!=''">{{l.doorprice}}</span>
              <span id="sixs" v-if="l.tag!=''">{{l.tag}}</span>
              <span id="seven">{{l.sell}}</span>
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { getBeauty } from '@/api/apidata'
import Bus from '@/common/bus.js'
export default {
  name: 'beautyOpen',
  components: {

  },

  data () {
    return {
      eat: []
    }
  },
  created () {
    getBeauty().then(({ data }) => {
      this.eat = data
      console.log(data)
    })
  },
  methods: {
    run: function (i) {
      this.$router.push('/content7')
      this.$nextTick(function () {
        Bus.$emit('content7', this.eat, i)
      })
    }
  }
}
</script>
<style lang="less" scoped>
.uls {
  padding-top: 10 * 2px;
  padding-bottom: 10 * 2px;
  margin-bottom: 10 * 2px;
  background: white;
  padding-right: 10 * 2px;
  padding-left: 10 * 2px;
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
    padding: 5 * 2px 0 * 2px;
    .span3 {
      display: block;
      float: left;
      width: 50%;
      .iconfont {
        color: #ff9900;
        font-size: 14 * 2px;
      }
      .spn {
        font-size: 16 * 2px;
        color: #ff9900;
      }
      .iconf {
        color: rgb(163, 163, 163);
        font-size: 14 * 2px;
      }
    }
    .span4 {
      display: block;
      float: left;
      width: 50%;
      text-align: right;
    }
  }
  .lis {
    display: flex;
    width: 100%;
    height: 100%;

    padding: 10 * 2px 0;
    .left {
      width: 25%;

      img {
        width: 100%;
        height: 95%;
      }
    }
    .right {
      width: 75%;
      padding-left: 5 * 2px;
      #one {
        height: 76%;
        font-size: 12 * 2px;
      }
      #two {
        height: 24%;
      }
      #three {
        position: relative;
      }
      #four {
        font-size: 16 * 2px;
        color: #0fc3b1;
      }
      #five {
        font-size: 12 * 2px;
        color: #0fc3b1;
      }
      #six {
        font-size: 12 * 2px;
      }
      #sixs {
        font-size: 10 * 2px;
        border: 1px solid #ff9900;
        padding: 3 * 2px 5 * 2px;
        border-radius: 4 * 2px;
        color: #ff9900;
      }
      #seven {
        font-size: 12 * 2px;
        position: absolute;
        right: 0;
        bottom: 0;
      }
    }
  }
}
</style>
