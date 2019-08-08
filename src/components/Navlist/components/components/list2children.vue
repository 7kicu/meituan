<template>
  <div class="video_cont">
    <ul>
      <li class="video_li" v-for="(v,i) in video1" :key="i" @click="run(i)">
        <img :src="v.img" alt />
        <div class="video_div">
          <span class="h2">{{v.name}}</span>
          <br />
          <span>{{v.score}}{{v.person}}{{v.suff}}</span>
          <span class="score">{{v.grade}}</span>
          <br />
          <span class="actor">{{v.actor}}</span>
          <span>{{v.show}}</span>
          <button>购票</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { getVideo } from '@/api/apidata.js'
import Bus from '@/common/bus.js'
export default {
  name: 'listchildren',
  data () {
    return {
      video1: {}
    }
  },
  created () {
    getVideo().then(({ data }) => {
      console.log(data.data)
      this.video1 = data.data
    })
  },
  methods: {
    run: function (i) {
      this.$router.push('/content3')
      this.$nextTick(function () {
        Bus.$emit('content3', this.video1, i)
      })
    }
  }
}
</script>
<style lang="less" scoped>
.video_cont {
  padding: 15 * 2px;
  margin-top: 2rem;
  .video_li {
    margin-bottom: 20 * 2px;
    img {
      position: relative;
      top: 0 * 2px;
      width: 20%;
      display: inline-block;
    }
    .video_div {
      width: 70%;
      display: inline-block;
      position: absolute;
      line-height: 25 * 2px;
      left: 28%;
      .score {
        font-size: 0.4rem;
        font-weight: bold;
        color: #faaf00;
      }
      .h2 {
        font-size: 15 * 2px;
        font-weight: bold;
      }
      button {
        position: absolute;
        right: 10 * 2px;
        top: 20 * 2px;
        color: #fff;
        background: #f03d37;
        padding: 5 * 2px 10 * 2px;
        border-radius: 5 * 2px;
      }
      .video_id1 {
        background: #509fc9;
        color: #fff;
      }
      .video_id2 {
        border: 1 * 2px solid #509fc9;
      }
      .actor {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
