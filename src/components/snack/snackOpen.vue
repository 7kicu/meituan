<template>
  <div class="snackOpen">
    <ul class="uls" v-for="(u,i) in eat" :key="i" @click="run(i)">
      <p>
        {{u.title}}
        <span class="span1">{{u.span1}}</span>
        <span class="span2">{{u.span2}}</span>
        <!-- <span class="spans" v-if="l.spans!=''">{{l.spans}}</span> -->
      </p>
      <p class="one">
        <span class="span3">
          <span class="iconfont" v-for="(v,i) in parseInt(u.star)" :key="i">&#xe698;</span>
          <span class="iconfont iconf" v-if="parseInt(u.star)>=3&&parseInt(u.star)<5">&#xe698;</span>
          <span class="iconfont iconf" v-if="parseInt(u.star)>=3&&parseInt(u.star)<4">&#xe698;</span>
          <span class="spn">{{u.star}}</span>
        </span>
        <span class="span4">{{u.address}}</span>
      </p>
      <li class="lis" v-for="(l,i) in u.productList" :key="i">
        <div class="left">
          <img :src="l.thunmb" alt />
        </div>
        <div class="right">
          <div id="one">{{l.taocan}}</div>
          <div id="two">
            <p id="three">
              <span id="four">{{l.shopprice}}</span>
              <span id="five">{{l.shopprice2}}</span>
              <span id="six">{{l.shopprice3}}</span>
              <span id="seven">{{l.sales}}</span>
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { getSnack } from '@/api/apidata'
import Bus from '@/common/bus.js'
export default {
  name: 'snackOpen',
  components: {

  },

  data () {
    return {
      eat: []
    }
  },
  created () {
    getSnack().then(({ data }) => {
      this.eat = data
      console.log(data)
    })
  },
  methods: {
    run: function (i) {
      this.$router.push('/content9')
      this.$nextTick(function () {
        Bus.$emit('content9', this.eat, i)
      })
    }
  }

}
</script>
<style lang="less" scoped>
.uls {
  padding-top: 10 * 2px;
  padding-bottom: 10 * 2px;
  margin-top: 10 * 2px;
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
        font-size: 13 * 2px;
      }
      #two {
        height: 24%;
      }
      #three {
        position: relative;
      }
      #four {
        font-size: 19 * 2px;
        color: #0fc3b1;
      }
      #five {
        font-size: 14 * 2px;
      }
      #six {
        font-size: 12 * 2px;
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
