<template>
  <div class="liveOpen">
    <ul class="uls" v-for="(u,i) in eat" :key="i" @click="run(i)">
      <p>
        {{u.title}}
        <span class="span1">{{u.span1}}</span>
        <!-- <span class="span2">{{u.span2}}</span> -->
        <!-- <span class="spans" v-if="l.spans!=''">{{l.spans}}</span> -->
      </p>
      <p class="one">
        <span class="span3">
          <span class="iconfont" v-for="(v,i) in parseInt(u.starText)" :key="i">&#xe698;</span>
          <span
            class="iconfont iconf"
            v-if="parseInt(u.starText)>=3&&parseInt(u.starText)<5"
          >&#xe698;</span>
          <span
            class="iconfont iconf"
            v-if="parseInt(u.starText)>=3&&parseInt(u.starText)<4"
          >&#xe698;</span>
          <span class="spn">{{u.starText}}</span>
          <span class="spns" v-if="u.starText2!=''">{{u.starText2}}</span>
        </span>
        <span class="span4">{{u.address}}</span>
      </p>
      <li class="lis" v-for="(l,i) in u.productList" :key="i">
        <div class="left">
          <img :src="l.pic" alt />
        </div>
        <div class="right">
          <div id="one">{{l.title2}}</div>
          <div id="two">
            <p id="three">
              <span id="four">{{l.strong}}</span>
              <span id="five">{{l.strong1}}</span>
              <span id="six" v-if="l.strong2!=''">{{l.strong2}}</span>
              <!-- <span id="six" v-if="l.strong3!=''">{{l.strong3}}</span> -->
              <span id="sixs" v-if="l.strong3!=''">{{l.strong3}}</span>
              <span id="seven">已售{{l.sold}}</span>
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { getLive } from '@/api/apidata'
import Bus from '@/common/bus.js'
export default {
  name: 'liveOpen',
  components: {

  },

  data () {
    return {
      eat: []
    }
  },
  created () {
    getLive().then(({ data }) => {
      this.eat = data
      console.log(data)
    })
  },
  methods: {
    run: function (i) {
      this.$router.push('/content8')
      this.$nextTick(function () {
        Bus.$emit('content8', this.eat, i)
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
        // border: 1px solid #ff9900;
        padding: 3 * 2px 5 * 2px;
        // border-radius: 4 * 2px;
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
