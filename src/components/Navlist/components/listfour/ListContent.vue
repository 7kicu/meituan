<template>
  <div class="container">
    <dl class="list" v-for="(item, i) in content" :key="i" @click="run(i)">
      <dd class="top">
        <router-link to="/" class="react">
          <span class="poiname">{{item.name}}</span>
          <span class="tuan">团</span>
          <div class="kv-line-r">
            <h6>
              <span class="stars">
                <i class="text-icon icon-star">*</i>
                <i class="text-icon icon-star">*</i>
                <i class="text-icon icon-star">*</i>
                <i class="text-icon icon-star">*</i>
                <i class="text-icon icon-star-gray">
                  <i class="text-icon icon-star-half">*</i>
                </i>
                <em class="star-text">4.5</em>
              </span>
            </h6>
          </div>
        </router-link>
        <P class="address">
          <span>8.3km</span>

          <span>中原万达</span>
        </P>
      </dd>
      <dd class="center">
        <dl>
          <dd>
            <router-link to="/" class="react">
              <div class="zong">
                <div class="left">
                  <img :src="item.img1" alt />
                </div>
                <div class="right">
                  <p class="title">{{item.tit1}}</p>
                  <p class="pice">
                    <span class="num">{{item.money1}}</span>
                    <span class="yuan">元</span>
                    <span class="men">{{item.men1}}</span>
                    <span class="shou">已售0</span>
                  </p>
                </div>
              </div>
            </router-link>
          </dd>
          <dd></dd>
        </dl>
      </dd>
      <dd class="center">
        <dl>
          <dd>
            <router-link to="/" class="react">
              <div class="zong">
                <div class="left">
                  <img :src="item.img1" alt />
                </div>
                <div class="right">
                  <p class="title">{{item.tit1}}</p>
                  <p class="pice">
                    <span class="num">{{item.money1}}</span>
                    <span class="yuan">元</span>
                    <span class="men">{{item.men1}}</span>
                    <span class="shou">已售0</span>
                  </p>
                </div>
              </div>
            </router-link>
          </dd>
          <dd></dd>
        </dl>
      </dd>
    </dl>
    <dl class="pager-wrap">
      <dd>
        <div class="pager">
          <a class="btn pre">上一页</a>
          <span class="pager-current">1</span>
          <a class="btn next">下一页</a>
        </div>
      </dd>
    </dl>
  </div>
</template>

<script>
import Bus from '@/common/bus.js'
export default {
  name: 'ListContent',
  props: ['content'],
  methods: {
    run: function (i) {
      this.$router.push('/content5')
      this.$nextTick(function () {
        Bus.$emit('content5', this.content, i)
      })
    }
  }
}
</script>

<style lang="less">
.container {
  background: #f0efed;
  position: relative;
  .list:first-child {
    margin: 0;
    border-top: 0;
    margin-bottom: 0.2rem;
  }
  .list {
    // border-top: 1px solid #ddd8ce;
    // border-bottom: 1px solid #ddd8ce;
    // margin-top: 0.2rem;
    margin-bottom: 0.2rem;
    background-color: #fff;
    .top {
      margin: 0;
      border-bottom: 1px solid #ddd8ce;
      overflow: hidden;
      font-size: inherit;
      font-weight: 400;
      position: relative;
      .react {
        padding: 0.28rem 0.2rem;
        display: block;
        color: inherit;
        height: 100%;
        overflow-x: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        .poiname {
          max-width: 90%;
          display: inline-block;
          overflow-x: hidden;
          font-size: 0.3rem;
        }
        .tuan {
          display: inline-block;
          background-color: #06c1ae;
          color: #fff;
          font-size: 0.24rem;
          padding: 0.05rem;
          border-radius: 0.06rem;
          line-height: 1;
        }
        .kv-line-r {
          -webkit-box-flex: 1;
          -moz-box-flex: 1;
          font-size: inherit;
          font-weight: 400;
          margin-right: 0.2rem;
          display: bloc;
          span {
            display: inline-block;
            color: #f90;
            i {
              margin-right: 0.2em;
              vertical-align: 0rem;
            }
          }
        }
      }
      .address {
        font-size: 0.24rem;
        color: #666;
        position: absolute;
        right: 0.2rem;
        bottom: 0.2rem;
        font-size: 0.24rem;
        color: #666;
      }
    }
    .center {
      margin: 0;
      overflow: hidden;
      font-size: inherit;
      font-weight: 400;
      position: relative;
      dl {
        dd {
          margin: 0;
          border-bottom: 0.1px solid #ddd8ce;
          overflow: hidden;
          font-size: inherit;
          font-weight: 400;
          position: relative;
          .react {
            padding: 0.28rem 0.2rem;
            display: block;
            color: inherit;
            height: 100%;
            overflow-x: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            .zong {
              display: flex;
              .left {
                width: 1.8rem;
                height: 1.64rem;
                text-align: center;
                overflow: hidden;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
              .right {
                margin-left: 0.2rem;
                .title {
                  font-size: 0.3rem;
                  color: #333;
                  height: 0.8rem;
                  margin-bottom: 0.32rem;
                  line-height: 1.41;
                }
                .pice {
                  .num {
                    font-size: 0.38rem;
                    color: #06c1ae;
                  }
                  .yuan {
                    font-size: 0.26rem;
                    color: #06c1ae;
                  }
                  .men {
                    font-size: 0.24rem;
                    color: #666;
                  }
                  .shou {
                    color: #666;
                    font-size: 0.24rem;
                    position: absolute;
                    left: 6.5rem;
                    top: 1.5rem;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
.pager-wrap {
  border-top: 1px solid #ddd8ce;
  border-bottom: 1px solid #ddd8ce;
  margin-top: 0.2rem;
  margin-bottom: 0;
  background-color: #fff;
  .pager {
    padding: 0.2rem;
    padding-top: 0.16rem;
    padding-bottom: 0.16rem;
    .btn {
      display: inline-block;
      margin: 0;
      text-align: center;
      height: 0.6rem;
      padding: 0 0.32rem;
      border-radius: 0.06rem;
      color: #fff;
      border: 0;
      background-color: #06c1ae;
      font-size: 0.28rem;
      vertical-align: middle;
      line-height: 0.6rem;
      box-sizing: border-box;
      cursor: pointer;
      -webkit-user-select: none;
    }
    .next {
      background: transparent;
      color: #06c1ae;
      border: 1px solid #06c1ae;
    }
    .pre {
      background-color: #dcdcdc;
      color: #999;
      border: 0;
    }
  }
}
</style>
