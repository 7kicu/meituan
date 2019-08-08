<template>
  <div id="content1">
    <top></top>
    <img class="index_img" src="http://ms0.meituan.net/touch/img/download_banner.png" alt />
    <div class="content_all">
      <img :src="webdata.data[0].img" alt />
      <div class="content_cont">
        <h1>{{webdata.title}}</h1>
        <p>{{webdata.data[0].title}}</p>
      </div>
    </div>
    <div class="content_price">
      <span class="content_span1">{{webdata.data[0].price}}</span>
      <span class="content_span2">元</span>
      <span class="content_span3">门市价:99</span>
      <!-- <router-link to="/submit"> -->
      <button class="content_button" @click="rundata">立即抢购</button>
      <!-- </router-link> -->
    </div>
    <div class="service">
      <i class="iconfont ser">&#xe63d;</i>
      <span class="ser_s">支持随时退款</span>
      <i class="iconfont ser1">&#xe63c;</i>
      <span class="ser_s1">支持过期自动退款</span>
      <br />
      <br />
      <!-- <i class="iconfont">&#xe63f;</i> -->
      <i class="iconfont">&#xe639;</i>
      <span class="ser_s2">{{webdata.count}}</span>
    </div>
    <div class="appraise">
      <i class="iconfont appr_s">&#xe698;</i>
      <i class="iconfont appr_s">&#xe698;</i>
      <i class="iconfont appr_s">&#xe698;</i>
      <i class="iconfont appr_s">&#xe698;</i>
      <i class="iconfont appr_s1">&#xe698;</i>
      <span class="appr_star">{{content[0].startext}}</span>
      <span class="appr_ss">
        <span>{{content[0].number}}</span>
        <i class="iconfont">&#xe731;</i>
      </span>
    </div>
    <div class="food">
      <ul>
        <li v-for="(v,i) in content[0].data" :key="i">
          <span>{{v.text}}</span>
        </li>
      </ul>
    </div>
    <div class="shop">
      <span class="shop_tit">{{content[1].title}}</span>
      <span class="shop_s">
        <h1>{{webdata.name}}</h1>
        <p>{{content[1].data[0].addres}}</p>
        <i class="iconfont">&#xe647;</i>
        <span>{{content[1].data[0].dist}}</span>
      </span>
      <span class="shop_s1">
        <i class="iconfont">&#xe63f;</i>
      </span>
    </div>
    <div class="buy">
      <h1>{{content[3].title}}</h1>
      <div class="buy_div">
        <p>{{content[3].data[0].notice}}</p>
        <span>{{content[3].data[0].rea}}</span>
        <p>{{content[3].data[1].notice}}</p>
        <span>{{content[3].data[1].rea}}</span>
        <p>{{content[3].data[2].notice}}</p>
        <li v-for="(v,i) in content[3].data[2].rea" :key="i">{{v.ul}}</li>
      </div>
    </div>
  </div>
</template>

<script>
import top from '@/components/Navlist/components/pedicure/pedTop'
import Bus from './bus.js'
import { getContent } from '@/api/apidata'
export default {
  name: 'count',
  data () {
    return {
      webdata: {},
      content: {}
    }
  },
  created () {
    getContent().then(({ data }) => {
      this.content = data.data
      // console.log(this.guess)
    })
  },
  components: {
    top,
    getContent
  },
  mounted () {
    Bus.$on('content7', (data, i) => {
      this.webdata = data[i]
      console.log(this.webdata)
      Bus.$off('content7')
    })
    // Bus.$emit('contentdata', this.webdata)
  },
  methods: {
    rundata: function () {
      this.$router.push('/submit7')
      this.$nextTick(function () {
        Bus.$emit('contentdata', this.webdata.data[0])
      })
    }
  }
}
</script>

<style lang="less" scoped>
#content1 {
  .index_img {
    width: 100%;
  }
  li {
    i {
      font-size: 30px;
      color: red;
    }
  }
  .content_all {
    height: 500px;
    overflow: hidden;
    position: relative;
    img {
      width: 100%;
    }
    .content_cont {
      width: 100%;
      height: 500px;
      // left: 20px;
      padding: 30px 30px;
      background: rgba(0, 0, 0, 0.1);
      h1 {
        position: absolute;
        bottom: 50px;
        margin-bottom: 30px;
        font-size: 45px;
        font-weight: bold;
        color: #fff;
      }
      p {
        position: absolute;
        bottom: 20px;
        color: #fff;
        font-size: 30px;
      }
    }
  }
  .content_price {
    padding: 20px;
    border-bottom: 1px solid #ccc;
    position: relative;
    .content_span1 {
      font-size: 60px;
      color: #06c1ae;
      font-weight: bold;
    }
    .content_span2 {
      font-size: 30px;
      color: #06c1ae;
    }
    .content_span3 {
      color: #999;
      font-size: 30px;
    }
    .content_button {
      padding: 10px 30px;
      background: #ff9900;
      color: #fff;
      font-size: 40px;
      font-weight: bold;
      position: absolute;
      right: 10px;
      bottom: 10px;
      border-radius: 8px;
    }
  }
  .service {
    padding: 20px 20px 40px 20px;
    border-bottom: 30px solid #f0f0f0;
    i {
      font-size: 40px;
    }
    .ser {
      font-size: 50px;
      color: #75c111;
    }
    .ser1 {
      color: #75c111;
      margin-left: 100px;
    }
    .ser_s,
    .ser_s1 {
      color: #75c111;
      font-size: 30px;
    }
    .ser_s2 {
      font-size: 30px;
      color: #666;
    }
  }
  .appraise {
    padding: 30px 20px;
    position: relative;
    border-bottom: 1px solid #ccc;
    .appr_s {
      color: #ff9900;
      font-size: 30px;
    }
    .appr_s1 {
      color: #ccc;
      font-size: 30px;
    }
    .appr_star {
      margin-left: 10px;
      font-size: 30px;
      color: #ff9900;
    }
    .appr_ss {
      right: 0;
      position: absolute;
      span {
        font-size: 30px;
        color: #666;
      }
      i {
        font-size: 35px;
      }
    }
  }
  .food {
    padding: 20px;
    border-bottom: 30px solid #f0f0f0;
    margin-bottom: 20px;
    ul {
      li {
        display: inline-block;
        width: calc(100% / 3);
        margin-top: 20px;
        span {
          border-radius: 8px;
          display: inline-block;
          padding: 10px;
          color: #ff9900;
          border: 1px solid #ff9900;
          font-size: 30px;
        }
      }
    }
  }
  .shop {
    padding: 20px 10px;
    position: relative;
    border-bottom: 30px solid #f0f0f0;
    .shop_tit {
      font-size: 35px;
      padding: 0 10px 20px 10px;
      display: block;
      border-bottom: 1px solid #ccc;
    }
    .shop_s {
      h1 {
        font-size: 31px;
        font-weight: bold;
        padding: 20px 10px;
      }
      p {
        width: 60%;
        font-size: 28px;
        padding: 0px 10px 0 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        margin-bottom: 20px;
      }
      i {
        font-size: 30px;
      }
      span {
        font-size: 28px;
        color: #ff9900;
        margin-left: 20px;
      }
    }
    .shop_s1 {
      border-left: 1px solid #ccc;
      position: absolute;
      right: 60px;
      bottom: 50px;
      i {
        font-size: 50px;
        padding-left: 100px;
        color: #06c1ae;
      }
    }
  }
  .buy {
    padding: 20px;
    h1 {
      font-size: 35px;
      border-bottom: 1px solid #ccc;
      padding: 10px 0 30px 0;
    }
    p {
      padding: 20px 0;
      font-size: 30px;
      color: #ff9900;
    }
    span,
    li {
      font-size: 30px;
      color: #666;
      line-height: 50px;
    }
  }
}
</style>
