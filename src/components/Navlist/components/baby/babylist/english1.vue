<template>
  <div id="guess">
    <ul>
      <li v-for="(v,i) in guess" :key="i" @click="run(i)">
        <div class="guess_div">
          <img :src="v.img" alt />
        </div>
        <div class="guess_div2">
          <h1>{{v.name}}</h1>
          <span class="guess_span0">￥{{v.price}}</span>
          <span class="guess_span">{{v.delprice}}</span>
          <span class="guess_span1">{{v.sold}}</span>
          <p>
            {{v.shopname}}
            <span class="guess_pla">{{v.distan}}</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { getBaby } from '@/api/apidata.js'
import Bus from '@/common/bus.js'
export default {
  name: 'guess',
  data () {
    return {
      guess: {}
    }
  },
  created () {
    getBaby().then(({ data }) => {
      // console.log(data)
      this.guess = data.data
    })
  },
  components: {
    getBaby
  },
  methods: {
    run: function (i) {
      this.$router.push('/content4')
      this.$nextTick(function () {
        Bus.$emit('content4', this.guess, i)
      })
    }
  }
}
</script>
<style lang="less" scoped>
#guess {
  ul {
    li {
      height: 180px;
      margin-bottom: 20px;
      overflow: hidden;
      padding: 30px;
      position: relative;
      box-shadow: 0 0 5px #ccc;
      .guess_div {
        width: 50%;
        display: inline-block;
        img {
          position: absolute;
          width: 40%;
          top: 10px;
          left: 25px;
        }
      }
      .guess_div2 {
        width: 40%;
        display: inline-block;
        h1 {
          font-size: 30px;
          font-weight: bold;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          overflow: hidden;
          margin-bottom: 20px;
        }
        p {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          overflow: hidden;
          font-size: #666;
          margin-top: 40px;
          .guess_pla {
            position: absolute;
            right: 10px;
            color: #666;
          }
        }
        .guess_span0 {
          font-size: 30px;
          color: #36b9af;
        }
        .guess_span {
          color: #999;
          text-decoration: line-through;
        }
        .guess_span1 {
          position: absolute;
          right: 10px;
          color: #666;
        }
      }
    }
  }
}
</style>
