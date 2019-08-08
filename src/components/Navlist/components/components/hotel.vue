<template>
  <div id="hotel">
    <div class="hotel_top">
      <router-link tag="i" to="/">
        <i class="iconfont hotel_l">&#xe63a;</i>
      </router-link>
      <span class="seach">
        <input type="text" placeholder="位置/酒店/关键词" />
        <i class="iconfont search">&#xe603;</i>
      </span>
    </div>
    <search />
    <div class="place">
      <span>当前：檀香路</span>
    </div>
    <div class="hotel_cont">
      <ul>
        <li v-for="(v,i) in hotel" :key="i" @click="run(i)">
          <div class="hotel_l1">
            <img :src="v.img" alt />
          </div>
          <div class="hotel_r">
            <h1>{{v.name}}</h1>
            <span class="hotel_s">{{v.score}}</span>
            <span>{{v.number}}</span>
            <p class="hotel_s1">舒适型</p>
            <p>{{v.dis}}</p>
            <p class="hotel_p">
              <span>￥</span>
              {{v.price}}
              <span>起</span>
            </p>
            <p class="hotel_p_f">订</p>
            <br />
          </div>
        </li>
      </ul>
    </div>
    <foot />
  </div>
</template>
<script>
import { getHotel } from '@/api/apidata.js'
import search from '../list11components/search'
import foot from '@/common/foot'
import Bus from '@/common/bus.js'
export default {
  name: 'hotel',
  data () {
    return {
      hotel: {}
    }
  },
  created () {
    getHotel().then(({ data }) => {
      console.log(data)
      this.hotel = data.data
    })
  },
  components: {
    getHotel,
    foot,
    search
  },
  methods: {
    run: function (i) {
      this.$router.push('/content4')
      this.$nextTick(function () {
        Bus.$emit('content4', this.hotel, i)
      })
    }
  }
}
</script>
<style lang="less" scoped>
#hotel {
  background: #f0efed;
  .hotel_top {
    background: #fafafa;
    text-align: center;
    height: 0.5rem;
    border-bottom: 1 * 2px solid #f2f2f2;
    padding: 5 * 2px;
    .hotel_l {
      font-size: 0.4rem;
      color: #f9504c;
      position: absolute;
      left: 10 * 2px;
      top: 8 * 2px;
    }
    .seach {
      position: relative;
      margin-left: 20 * 2px;
      .search {
        position: absolute;
        left: 10 * 2px;
        top: 3 * 2px;
      }

      input {
        width: 90%;
        border: 1 * 2px solid #ccc;
        border-radius: 5 * 2px;
        text-align: center;
      }
    }
  }
  .place {
    background: #f0efed;
    color: #666;
    padding: 5 * 2px;
  }
  .hotel_cont {
    li {
      position: relative;
      background: #fff;
      padding-bottom: 10 * 2px;
      overflow: hidden;
      .hotel_l1 {
        width: 40%;
        display: inline-block;
        position: absolute;
        top: 10 * 2px;
        img {
          width: 90%;
        }
      }
      .hotel_r {
        margin-top: 2%;
        width: 50%;
        display: inline-block;
        margin-left: 40%;
        h1 {
          font-size: 0.35rem;
          margin-bottom: 8 * 2px;
          // font-weight: bold;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        span {
          font-size: 0.25rem;
          color: #999999;
        }
        p {
          font-size: 0.25rem;
          margin-top: 8 * 2px;
          color: #999999;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .hotel_s {
          color: #ffa41b;
        }
        .hotel_s1 {
          position: absolute;
          right: 10 * 2px;
          top: 20 * 2px;
        }
        .hotel_p {
          font-size: 0.35rem;
          color: #06c1ae;
          margin-bottom: 5 * 2px;
          span {
            font-size: 0.25rem;
            color: #06c1ae;
            margin: -3 * 2px;
          }
        }
        .hotel_p_f {
          display: inline;
          font-size: 0.25rem;
          border: 1 * 2px solid #ffa41b;
          color: #ffa41b;
        }
      }
    }
  }
}
</style>
