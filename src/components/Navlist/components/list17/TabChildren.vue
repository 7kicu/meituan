<template>
  <div>
    <ul class="tab">
      <li v-for="(item, i) in tab" :key="i" @click="run(i)">
        <div class="left">
          <img :src="item.img" alt />
        </div>
        <div class="right">
          <p class="name">{{item.name}}</p>
          <p class="xing">
            <span>*</span>
            <span>*</span>
            <span>*</span>
            <span>*</span>
            <span>*</span>
            <span class="money">{{item.money}}</span>
          </p>
          <p class="add">{{item.address}}</p>
          <p class="tuan">
            <span class="biao">团</span>
            <span class="p">{{item.p}}</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { getHun } from '@/api/apidata.js'
import Bus from '@/common/bus.js'
export default {
  name: 'TabChildren',
  data () {
    return {
      tab: []
    }
  },
  components: {
    getHun
  },
  created () {
    getHun().then(({ data }) => {
      // console.log(data)
      this.tab = data.tab
      console.log(this.tab)
    })
  },
  methods: {
    run: function (i) {
      this.$router.push('/content10')
      this.$nextTick(function () {
        Bus.$emit('content10', this.tab, i)
      })
    }
  }
}

</script>

<style lang="less" scpoed>
.tab {
  li {
    padding: 10px;
    display: flex;
    border-bottom: 1px solid #eee;
    .left {
      padding-top: 20px;
      width: 144px;
      height: 130px;
      margin-right: 20px;
      -webkit-border-radius: 6px;
      border-radius: 6px;
      img {
        width: 100%;
      }
    }
    .right {
      padding-top: 20px;
      .name {
        display: inline-block;
        width: 100%;
        font-size: 32px;
        line-height: 40px;
        color: #333;
        font-weight: 400;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-right: 20px;
      }
      .xing {
        margin-right: 6px;
        color: #f90;
        font-size: 26px;
        line-height: 26px;
        .money {
          margin-left: 300px;
        }
      }
      .add {
        margin-top: 20px;
      }
      .tuan {
        padding: 20px 0 20px 0;
        width: 100%;
        display: -webkit-box;
        .biao {
          background-color: #27cdc0;
          padding: 3px 6px;
          border-radius: 1 6px;
          -webkit-border-radius: 6px;
          margin: 0 12px 0 0;
        }
        .p {
          -webkit-box-flex: 1;
          -ms-box-flex: 1;
          -ms-flex: 1;
          box-flex: 1;
          min-width: 0;
          overflow: hidden;
          height: 16px;
          line-height: 16px;
          font-size: 12px;
          color: #333;
          padding-left: 5px;
          -webkit-flex: 1;
          flex: 1;
        }
      }
    }
  }
}
</style>
