<template>
  <div class="search">
    <ul class="ul1">
      <li @click="li" ref="li">
        <!-- {{i.title}} -->
        今日新单
        <i class="iconfont" v-show="sanjiao1">&#xe6aa;</i>
        <i class="iconfont" v-show="sanjiao2">&#xe602;</i>
      </li>
      <li @click="allcity" ref="allcity">
        全城
        <i class="iconfont" v-show="all1">&#xe6aa;</i>
        <i class="iconfont" v-show="all2">&#xe602;</i>
      </li>
      <li @click="sort" ref="sort">
        默认排序
        <i class="iconfont" v-show="sort1">&#xe6aa;</i>
        <i class="iconfont" v-show="sort2">&#xe602;</i>
      </li>
    </ul>
    <div class="search-show">
      <div v-show="div">
        <ul>
          <li v-for="(i,index) in list.data" :key="index">
            <router-link to="/">
              <p>
                {{i.list}}
                <span>{{i.num}}</span>
              </p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="allcity" v-show="city">
      <ul>
        <li>
          <p class="p1">
            <button class="btn1" ref="clickbtn1" @click="shangqu">商区</button>
          </p>
          <p class="p2">
            <button class="btn2" ref="clickbtn2" @click="ditie">地铁站</button>
          </p>
        </li>
        <li v-for="(i,index) in all.mer" :key="index" v-show="btnShow">
          <router-link to="/">
            <p>
              {{i.place}}
              <span>{{i.number}}</span>
            </p>
          </router-link>
        </li>
        <li v-for="(i, index) in all.metro" :key="index" v-show="ditieshou">
          <router-link to="/">
            <p>
              {{i.line}}
              <span>{{i.number}}</span>
            </p>
          </router-link>
        </li>
      </ul>
    </div>
    <div v-show="sortdiv" class="sortdiv">
      <ul>
        <li v-for="(i,index) in getsort.data" :key="index">
          <router-link to="/">
            <p>{{i.name}}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getsearch, getallcity, getsort } from '@/api/apidata'
export default {
  name: 'search',
  props: ['ullist'],
  data () {
    return {
      sanjiao1: true,
      div: false,
      sanjiao2: false,
      all1: true,
      all2: false,
      city: false,
      btnShow: true,
      sort1: true,
      sort2: false,
      ditieshou: false,
      sortdiv: false,
      getsort: {},
      list: {},
      all: {}
    }
  },
  methods: {
    li () {
      if (this.sanjiao2) {
        this.sanjiao1 = true
        this.sanjiao2 = false
        this.div = false
        this.$refs.li.style.color = 'black'
        this.$refs.clickbtn2.style.background = 'white'
        this.$refs.clickbtn2.style.color = 'black'
      } else {
        this.sanjiao1 = false
        this.div = true
        this.sanjiao2 = true
        this.$refs.li.style.color = 'rgb(6, 193, 174)'
        this.all1 = true
        this.all2 = false
        this.$refs.allcity.style.color = 'black'
        this.city = false
        this.sort2 = false
        this.sort1 = true
        this.$refs.sort.style.color = 'black'
        this.sortdiv = false
        this.ditieshou = false
        this.btnShow = true
      }
      this.all2 = false
    },
    allcity () {
      if (this.all2) {
        this.all1 = true
        this.all2 = false
        this.city = false
        this.$refs.allcity.style.color = 'black'
        this.$refs.clickbtn2.style.background = 'white'
        this.$refs.clickbtn2.style.color = 'black'
      } else {
        this.all1 = false
        this.all2 = true
        this.city = true
        this.$refs.clickbtn1.style.background = 'rgb(102 ,102 ,102)'
        this.$refs.clickbtn1.style.color = 'white'
        this.$refs.allcity.style.color = 'rgb(6, 193, 174)'
        this.sanjiao1 = true
        this.sanjiao2 = false
        this.div = false
        this.$refs.li.style.color = 'black'
        this.$refs.clickbtn2.style.background = 'white'
        this.$refs.clickbtn2.style.color = 'black'
        this.sort2 = false
        this.sort1 = true
        this.$refs.sort.style.color = 'black'
        this.sortdiv = false
        this.btnShow = true
      }
      this.sanjiao2 = false
    },
    shangqu () {
      this.btnShow = true
      this.$refs.clickbtn1.style.background = 'rgb(102 ,102 ,102)'
      this.$refs.clickbtn1.style.color = 'white'
      this.$refs.clickbtn2.style.background = 'white'
      this.$refs.clickbtn2.style.color = 'black'
      this.ditieshou = false
    },
    ditie () {
      this.btnShow = false
      this.$refs.clickbtn2.style.background = 'rgb(102 ,102 ,102)'
      this.$refs.clickbtn2.style.color = 'white'
      this.$refs.clickbtn1.style.background = 'white'
      this.$refs.clickbtn1.style.color = 'black'
      this.ditieshou = true
    },
    sort () {
      if (this.sort2) {
        this.$refs.sort.style.color = 'black'
        this.sort1 = true
        this.sort2 = false
        this.sortdiv = false
      } else {
        this.$refs.sort.style.color = 'rgb(6, 193, 174)'
        this.sort1 = false
        this.sort2 = true
        this.sanjiao1 = true
        this.sanjiao2 = false
        this.$refs.li.style.color = 'black'
        this.div = false
        this.all1 = true
        this.all2 = false
        this.$refs.allcity.style.color = 'black'
        this.city = false
        this.sortdiv = true
        this.ditieshou = false
      }
    }
  },
  created () {
    getsearch().then(res => {
      this.list = res.data
    })
    getallcity().then(res => {
      this.all = res.data
    })
    getsort().then(res => {
      this.getsort = res.data
    })
  }
}
</script>

<style lang="less" scoped>
.search {
  width: 100%;
  z-index: 10;
  background: #fff;
  .ul1 {
    width: 100%;
    display: flex;
    li {
      display: inline-block;
      width: calc(100% / 3);
      text-align: center;
      border: 1px solid lightgray;
      height: 0.84rem;
      line-height: 0.84rem;
      font-size: 16px;
      border-collapse: collapse;
      font-size: 25px;
    }
  }
  .search-show {
    width: 100%;
    ul {
      width: 100%;
      li {
        width: 100%;
        border: none;
        height: 0.87rem;
        line-height: 0.87rem;
        border-bottom: 1px solid lightgray;
        border-collapse: collapse;
        .router-link-active {
          display: block;
          width: 100%;
          color: black;
          p {
            width: 95%;
            margin: auto;
            font-size: 25px;
            position: relative;
            span {
              display: inline-block;
              height: 0.3rem;
              background: lightgray;
              line-height: 0.3rem;
              border-radius: 10px;
              position: absolute;
              right: 0;
              color: white;
              font-size: 0.13rem;
              margin-top: 0.3rem;
              padding: 0 0.05rem 0 0.05rem;
            }
          }
        }
      }
    }
  }
}
.allcity {
  width: 100%;
  ul {
    width: 100%;
    li {
      width: 100%;
      border: none;
      height: 0.87rem;
      line-height: 0.87rem;
      border-bottom: 1px solid lightgray;
      border-collapse: collapse;
      display: flex;
      .p1 {
        width: 50%;
        height: 100%;
        position: relative;
      }
      .p2 {
        width: 50%;
        height: 100%;
        position: relative;
      }
      button {
        display: inline-block;
        height: 95%;
        line-height: 0.8rem;
        width: 2rem;
        text-align: center;
        font-size: 25px;
        color: black;
        border: 1px solid gray;
        background: white;
      }
      .btn1 {
        position: absolute;
        right: 0.2rem;
      }
      .btn2 {
        position: absolute;
        left: 0.2rem;
      }
      .router-link-active {
        display: block;
        width: 100%;
        color: black;
        p {
          width: 95%;
          margin: auto;
          font-size: 25px;
          position: relative;
          span {
            display: inline-block;
            height: 0.3rem;
            background: lightgray;
            line-height: 0.3rem;
            border-radius: 10px;
            position: absolute;
            right: 0px;
            color: white;
            font-size: 0.13rem;
            margin-top: 0.3rem;
            padding: 0 0.05rem 0 0.05rem;
          }
        }
      }
    }
  }
}
.sortdiv {
  width: 100%;
  ul {
    width: 100%;
    li {
      width: 100%;
      border: none;
      height: 0.87rem;
      line-height: 0.87rem;
      border-bottom: 1px solid lightgray;
      border-collapse: collapse;
      p {
        width: 95%;
        margin: auto;
        font-size: 25px;
        color: black;
      }
    }
  }
}
</style>
