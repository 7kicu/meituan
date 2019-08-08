<template>
  <div class="box">
    <div class="oneMoney">
      <div v-for="(i, index) in list16img.data" :key="index" class="bigimg">
        <router-link to="/">
          <img :src="i.img" alt />
          <div class="abc"></div>
        </router-link>
      </div>
      <div class="smallimg">
        <router-link to="/" v-for="(i,index) in list16img.data2" :key="index">
          <img :src="i.img2" alt />
        </router-link>
      </div>
      <p class="p"></p>
    </div>
    <div class="newpeople">
      <h1>新人超值好礼</h1>
      <ul>
        <li v-for="(i, index) in list16img.newpeople" :key="index">
          <router-link to="/">
            <img :src="i.gift" alt />
          </router-link>
        </li>
      </ul>
    </div>
    <div class="hot">
      <ul>
        <li v-for="(i,index) in list16img.hot" :key="index">
          <router-link to="/">
            <h3>{{i.title}}</h3>
            <p>
              <span>{{i.price1}}</span>
              {{i.price2}}
            </p>
            <img :src="i.img" alt />
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'oneMoney',
  props: ['list16img']
}
</script>

<style lang="less" scoped>
.oneMoney {
  margin-top: 0.4rem;
  background: url(img/onemoney.png);
  background-size: 100% 100%;
  //   background-position-y: 2em;
  width: 100%;
  margin-bottom: 0.3rem;
  .p {
    height: 0.6rem;
  }
}
.oneMoney .bigimg {
  width: 100%;
  .router-link-active {
    display: block;
    position: relative;
    width: 100%;
    .abc {
      height: 3rem;
    }
  }
  img {
    width: 100%;
    position: absolute;
    top: -0.6rem;
  }
}
.smallimg {
  width: 100%;
  display: flex;
  .router-link-active {
    display: inline-block;
    margin-left: 0.2rem;
    margin-right: 0.2rem;
    width: 50%;
    img {
      width: 100%;
    }
  }
}
.newpeople {
  background: url(img/giftbk.jpg);
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  h1 {
    text-align: center;
    font-size: 0.5rem;
    color: green;
    font-weight: bold;
  }
  ul {
    display: flex;
    margin-top: 0.4rem;
    li {
      display: inline-block;
      height: 3rem;
      width: calc(100% / 3);
      .router-link-active {
        display: block;
        height: 100%;
        margin: auto;
        img {
          margin: auto;
          width: 90%;
          height: 100%;
        }
      }
    }
  }
}
.newpeople ul li .router-link-active:first-child {
  margin-left: 0.25rem;
}
.hot {
  width: 100%;
  margin-top: 1rem;
  ul {
    width: 100%;
    display: flex;
    li {
      display: inline-block;
      text-align: center;
      width: calc(100% / 3);
      .router-link-active {
        display: block;
        width: 70%;
        margin: auto;
        h3 {
          font-size: 0.4rem;
          font-weight: bold;
          margin-bottom: 0.3rem;
        }
        p {
          span {
            color: red;
          }
          margin-bottom: 0.2rem;
        }
        img {
          width: 100%;
          margin: auto;
        }
      }
    }
  }
}
</style>
