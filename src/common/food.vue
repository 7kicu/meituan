<template>
  <div class="food">
    <ul>
      <li v-for="(i,index) in food.data" :key="index">
        <router-link to="/" class="router1">
          <img :src="i.img" alt />
          <div>
            <p class="p1">{{i.title}}</p>
            <p class="p2">
              <span
                class="iconfont star1"
                v-for="(v,index) in parseInt(i.score)"
                :key="index"
              >{{i.star}}</span>
              <span class="iconfont" v-if="parseInt(i.score)>=4&&parseInt(i.score)<=5">{{i.star}}</span>
              <span class="iconfont" v-if="parseInt(i.score)>=3&&parseInt(i.score)<4">{{i.star}}</span>
              <span class="iconfont" v-if="parseInt(i.score)>=2&&parseInt(i.score)<1">{{i.star}}</span>
              <span class="iconfont" v-if="parseInt(i.score)>=1&&parseInt(i.score)<0">{{i.star}}</span>
              <span ref="score">{{i.score}}</span>
              <span>{{i.month}}</span>
              <span class="move">{{i.time}}</span>
              <span class="line">{{i.dis}}</span>
            </p>
            <p class="p3">
              <span class="start">{{i.start}}</span>
              <span>{{i.deli}}</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'food',
  props: ['food']
}
</script>

<style lang="less" scoped>
.food {
  width: 100%;
  ul {
    width: 100%;
    li {
      width: 100%;
      margin-top: 1rem;
      overflow: hidden;
      .router1 {
        display: inline-block;
        margin-left: 0.2rem;
        width: 100%;
        position: relative;
        img {
          width: 30%;
          display: inline-block;
          position: absolute;
          top: 0;
        }
      }
      div {
        margin-left: 32%;
        width: 60%;
        display: inline-block;
        .p1 {
          font-size: 0.4rem;
          font-weight: bold;
        }
        span {
          display: inline-block;
        }
        .move {
          position: absolute;
          right: 14%;
        }
        .line {
          position: absolute;
          right: 5%;
        }
        .p2 {
          margin-top: 0.7rem;
          .star1 {
            color: yellow;
          }
        }
        .p3 {
          margin-top: 0.7rem;
          .start {
            margin-right: 0.2rem;
          }
        }
      }
    }
  }
}
</style>
