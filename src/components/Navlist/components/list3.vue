<template>
  <div id="list3">
    <img
      src="http://p1.meituan.net/0.0.o/codeman/b1206baab4989bfe07e1270c2da42a1624223.jpg.webp"
      alt
    />
    <div class="hotel_all">
      <div class="hotel">
        <span class="all_day">全日房</span>
        <span class="all_day_h"></span>
        <span class="h_day">钟点房</span>
        <span class="all_day_h2"></span>
        <div class="hotel_cont">
          <p>
            目的地
            <span>郑州</span>
            <i class="iconfont">&#xe731;</i>
          </p>
          <div>
            <p>
              时间
              <span>
                07月24日
                <span>周三入住</span>
              </span>
              <br />
              <span class="date">
                07月25日
                <span>周四离店1晚</span>
              </span>
              <i class="iconfont hotel_i">&#xe731;</i>
            </p>
          </div>
          <p>
            搜索
            <span>
              我的附近
              <span>位置/酒店/关键词</span>
            </span>

            <i class="iconfont">&#xe731;</i>
          </p>
          <input @click="hotel" type="button" value="查找酒店" />
        </div>
      </div>
    </div>
    <foot class="foot" />
  </div>
</template>
<script>
import foot from '@/common/foot'
import hotel from '@/components/Navlist/components/components/hotel'
export default {
  name: 'list3',
  components: {
    foot,
    hotel
  },
  methods: {
    hotel () {
      this.$router.push('/hotel')
    }
  }
}
</script>
<style lang="less" scoped>
#list3 {
  background: #f0efed;
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
  .hotel_all {
    position: relative;
    background: #fff;
    margin: 20 * 2px;
    .hotel {
      width: 100%;
      margin-right: 100 * 2px;
      top: -200 * 2px;
      position: absolute;
      text-align: center;
      background: #fff;
      margin-top: 30%;
      .all_day,
      .h_day {
        display: inline-block;
        padding: 20 * 2px;
        font-size: 0.35rem;
        font-weight: normal;
        border-right: 1 * 2px solid #f2f2f2;
      }
      .h_day {
        border-right: none;
      }
      .all_day:hover,
      .h_day:hover {
        border-bottom: 3 * 2px solid #2bb2a3;
        // background: #2bb2a3;
      }
      .hotel_cont {
        text-align-last: left;
        padding: 10 * 2px;
        box-shadow: 0 0 5 * 2px #ccc;
        p {
          position: relative;
          font-size: 0.3rem;
          color: #acacac;
          margin-bottom: 20 * 2px;
          border-bottom: 1 * 2px solid #f2f2f2;
          padding-bottom: 10 * 2px;
          span {
            color: #666;
            padding: 0 20 * 2px;
            font-size: 0.35rem;
            span {
              font-size: 0.2rem;
            }
          }
          i {
            position: absolute;
            right: 0;
          }
          .hotel_i {
            top: 8 * 2px;
          }
          .date {
            display: block;
            margin-left: 50px;
          }
        }
        input {
          padding: 2% 40%;
          background: #2bb2a3;
          border-radius: 5 * 2px;
          color: #fff;
          font-size: 0.3rem;
        }
      }
    }
  }
  .foot {
    margin-top: 75%;
    background: #f0efed;
  }
}
</style>
