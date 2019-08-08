<template>
  <div class="list18Child1">
    <div class="icon">
      <div>
        <p>
          <i class="iconfont">&#xe617;</i>
        </p>
        <p>
          <i class="iconfont">&#xe616;</i>
        </p>
        <p>
          <i class="iconfont">&#xe62f;</i>
        </p>
        <p>
          <i class="iconfont">&#xe618;</i>
        </p>
      </div>
      <div class="fon">
        <span>装修公司</span>
        <span>装修美图</span>
        <span>免费报价</span>
        <span>装修设计</span>
      </div>
    </div>
    <div class="banner">
      <img
        src="https://op.meituan.net/oppkit_pic/home_channel_rb/1513ff1f89bf3be9eea9be8e2bbb4146.png"
      />
    </div>

    <!-- 热门图册 -->
    <div class="pic">
      <h3>
        热门图册
        <span>case</span>
      </h3>
      <div class="atlas">
        <p v-for="(v,i) in banner" :key="i">
          <i>
            <h2>{{v.tit}}</h2>
            <em>{{v.content}}</em>
          </i>
          <img :src="v.pic" alt />
        </p>
      </div>
      <p class="pics">查看更多图册></p>
    </div>
    <!-- 空间图集 -->
    <div class="space">
      <h3>
        空间图集
        <span>ALTAS</span>
      </h3>
      <div class="spa">
        <div v-for="(s,i) in space" :key="i">
          <img :src="s.pic" alt />
          <p>{{s.tit}}</p>
        </div>
      </div>
    </div>
    <div class="design">
      <p>
        <router-link tag="a" to="/Design">装修公司</router-link>

        <router-link tag="a" to="/Materials">装修建材</router-link>

        <router-link tag="a" to="/Electrical">家用电器</router-link>

        <router-link tag="a" to="/Hypermarket">家装卖场</router-link>
      </p>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import { getBanner } from '@/api/apidata'
// import Design from './Design'
export default {
  name: 'list18Child1',
  data () {
    return {
      banner: [],
      space: []
    }
  },
  created () {
    getBanner().then(({ data }) => {
      this.banner = data.calts
    })
    getBanner().then(({ data }) => {
      this.space = data.space
    })
  },
  components: {
    // Design
  }
}
</script>
<style lang="less" scoped>
.icon {
  margin: 20 * 2px 0 * 2px;
  border-bottom: 5 * 2px solid #eee;
  padding-bottom: 20 * 2px;
  span {
    font-size: 13 * 2px;
  }
}
.icon div {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  p {
    background: #07be61;
    border-radius: 50%;
    text-align: center;
    width: 55 * 2px;
    height: 55 * 2px;
    margin-bottom: 10 * 2px;
    .iconfont {
      line-height: 60 * 2px;
      font-size: 25 * 2px;
      color: #fff;
    }
  }
}
.banner img {
  width: 100%;
  height: 100%;
}

// 热门图册
.pic {
  border-bottom: 5 * 2px solid #ddd;
  .pics {
    height: 45 * 2px;
    line-height: 45 * 2px;
    text-align: center;
  }
}
.pic h3 {
  font-weight: bold;
  height: 60 * 2px;
  text-align: center;
  line-height: 60 * 2px;
  span {
    font-weight: none;
    color: lightblue;
  }
}
.atlas {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  p {
    position: relative;
    text-align: center;
    width: calc(100% / 2);
    i {
      position: absolute;
      width: 60%;
      height: 60%;
      left: 20%;
      top: 15%;
      background-color: rgba(255, 255, 255, 0.8);
      h2 {
        font-size: 20 * 2px;
        margin-top: 20 * 2px;
        margin-bottom: 10 * 2px;
      }
    }
    img {
      width: 95%;
      margin-bottom: 10 * 2px;
    }
  }
}
// 空间图集
.space {
  border-bottom: 5 * 2px solid #eee;
  h3 {
    font-size: 16 * 2px;
    font-weight: bold;
    text-align: center;
    line-height: 40 * 2px;
    span {
      color: lightblue;
    }
  }
  .spa {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-bottom: 20 * 2px;
    div {
      width: calc(100% / 4);
      text-align: center;
      img {
        width: 50 * 2px;
        height: 50 * 2px;
        border-radius: 50%;
      }
      p {
        font-size: 13 * 2px;
        margin: 5 * 2px 0;
      }
    }
  }
}
.design {
  margin-top: 20 * 2px;
  margin-bottom: 200 * 2px;
  p {
    display: flex;
    text-align: center;
    a {
      width: calc(100% / 4);
      line-height: 45 * 2px;
      color: black;
    }
    a:hover {
      color: #07be61;
      border-bottom: 2 * 2px solid #07be61;
    }
  }
}
</style>
