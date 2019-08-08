<template>
  <div id="list17">
    <div class="header">
      <!-- <img src="list17/images/bg.png" alt /> -->
      <ul class="top-nav">
        <li>
          <i class="i1"></i>
          <span>婚纱摄影</span>
        </li>
        <li>
          <i class="i2"></i>
          <span>全球旅拍</span>
        </li>
        <li>
          <i class="i3"></i>
          <span>婚宴</span>
        </li>
        <li>
          <i class="i4"></i>
          <span>婚礼策划</span>
        </li>
        <li>
          <i class="i5"></i>
          <span>婚纱礼服</span>
        </li>
      </ul>

      <nav-list :nav="nav"></nav-list>
    </div>
    <div>
      <img
        src="http://img52.ddimg.cn/218700062927672_y.jpg"
        alt
        style="width:100%;padding:0 0 40px"
      />
    </div>
    <tool-list :main="main"></tool-list>
    <show-list :show="show"></show-list>
    <div style="height:20px;background:#eee;"></div>
    <tab-list></tab-list>
    <div class="footer">已显示本地全部信息</div>
  </div>
</template>
<script>
// import hometop from '@/common/hometop'
import { getHun } from '@/api/apidata.js'
import NavList from '@/components/Navlist/components/list17/NavList'
import ToolList from '@/components/Navlist/components/list17/ToolList'
import ShowList from '@/components/Navlist/components/list17/ShowList'
import TabList from '@/components/Navlist/components/list17/TabList'
export default {
  name: 'list17',
  data () {
    return {
      nav: [],
      main: [],
      show: [],
      tab: []
    }
  },
  components: {
    getHun,
    NavList,
    ToolList,
    ShowList,
    TabList
  },
  created () {
    getHun().then(({ data }) => {
      // console.log(data)
      this.nav = data.data
      this.main = data.more
      this.show = data.show
      this.tab = data.tab
      // console.log(this.show)
    })
  }

}
</script>
<style lang="less" scoped>
html {
  height: 100%;
  font-size: 100px;
}
head {
  height: 100%;
}
body {
  margin: 0;
  padding: 0;
  height: 100%;
}

.header {
  height: 100%;

  -webkit-background-size: 100% 227px;
  background-size: 100% 227px;
  padding: 1.5rem 7px 0;
  background: url(list17/images/bg.png) no-repeat;
  background-size: 100% 6rem;
  .top-nav {
    overflow: hidden;
    width: 100%;
    padding: 0 0 0.33rem;
    display: flex;
    li {
      width: 20%;
      text-align: center;
      i {
        display: block;
        width: 1.33rem;
        height: 1.33rem;
        margin: 0 auto;
      }
      span {
        margin-top: 2px;
        font-size: 26px;
        line-height: 0.4rem;
        font-family: PingFangSC-Regular;
        color: #fff;
      }
      .i1 {
        background: url(https://www.dpfile.com/sc/eleconfig/wedhomepage_mt_jingangwei/20181101194244hunshasheying3xa.png)
          no-repeat center/100%;
      }
      .i2 {
        background: url(https://www.dpfile.com/sc/eleconfig/wedhomepage_mt_jingangwei/20181101194331quanqiulvpai3xa.png)
          no-repeat center/100%;
      }
      .i3 {
        background: url(https://www.dpfile.com/sc/eleconfig/wedhomepage_mt_jingangwei/20181101194437hunyan3xa.png)
          no-repeat center/100%;
      }
      .i4 {
        background: url(https://www.dpfile.com/sc/eleconfig/wedhomepage_mt_jingangwei/20181101194520hunlicehua3xa.png)
          no-repeat center/100%;
      }
      .i5 {
        background: url(https://www.dpfile.com/sc/eleconfig/wedhomepage_mt_jingangwei/20181101194636hunshalifu3xa.png)
          no-repeat center/100%;
      }
    }
  }
  // .bottom-nav {
  // }
}

.footer {
  padding: 0.28rem 0;
  text-align: center;
  font-family: PingFangSC-Regular;
  font-size: 0.26rem;
  color: #999;
  background: #f0f1f5;
}
</style>
