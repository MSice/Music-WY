<!--  -->
<template>
  <div>
    <transition name="Meum-show">
      <div class="Meum" :style="{height:setHeight()+'px'}" v-show="show">
        <div class="Set-up">
          <li v-for="item in setUp" :key="item.id">
            <span :class="['iconfont',item.classname]" />
            {{item.pagename}}
          </li>
        </div>
        <div class="main">
          <div class="meum-nav set">
            <div class="info">
              <!-- v-show="login" -->
              <div class="not-login">
                <li class="title">手机电脑多端登录，尽享海量高品质音乐</li>
                <input type="submit" value="立即登录" />
              </div>
              <div class="login" v-show="login">
                <li class="portrait">
                  <img
                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586090209690&di=8239589497cc4da1ae4862b1c026aed7&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fe3bfb8c01209c94a0a2fc61baa5a56e9bf7e477a274dc-MYcRMU_fw658"
                  />
                </li>
                <li class="IDname">这里是ID</li>
                <li></li>
              </div>
            </div>
            <div class="nav">
              <div class="nav-line" v-for="item in meumNav" :key="item.id">
                <li :class="['iconfont',item.classname]" />
                <li class="pagename">{{item.pagename}}</li>
              </div>
            </div>
          </div>
          <div class="meum-top set">
            <div class="line" v-for="item in meumTop" :key="item.id">
              <li class="left">
                <span :class="['iconfont',item.classname]" />
                {{item.pagename}}
              </li>
            </div>
          </div>
          <div class="meum-bottom set">
            <div class="line" v-for="item in meumBottom" :key="item.id">
              <li class="left">
                <span :class="['iconfont',item.classname]" />
                {{item.pagename}}
              </li>
            </div>
          </div>
        </div>
        <!-- :style="{'background-image': 'url()'}" -->
        <div class="background"></div>
      </div>
    </transition>
  </div>
</template>

<script>
import { setUp, meumNav, meumTop, meumBottom } from "../js/data.js";
export default {
  data() {
    return {
      setUp: setUp,
      meumNav: meumNav,
      meumTop: meumTop,
      meumBottom: meumBottom
    };
  },
  props: {
    login: {
      type: Boolean
    },
    show: {
      type: Boolean
    }
  },
  methods: {
    setHeight() {
      const htmlDom = document.documentElement;
      const hHeight = htmlDom.clientHeight;
      return hHeight;
    }
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style lang='less' scoped>
/* @import url(); 引入css类 */
.Meum {
  position: relative;
  width: 82%;
  font-size: 0.3rem;
  color: #000;
  background-color: #fff;
  overflow-y: scroll;
}
.Meum::-webkit-scrollbar {
  display: none;
}
.Set-up {
  position: fixed;
  bottom: -1px;
  display: flex;
  width: 82%;
  height: 1rem;
  line-height: 1rem;
  background-color: #fff;
  text-align: center;
  z-index: 10000;
  // background-color: red;
  border-top: 1px solid rgba(143, 143, 143, 0.2);
  li {
    flex-grow: 1;
    span {
      font-size: 0.37rem;
      margin-right: 0.1rem;
    }
  }
  li:active {
    background-color: rgba(207, 207, 207, 0.856);
  }
}
.set {
  margin: 0 5%;
}
.meum-nav {
  width: 90%;
  padding-bottom: 0.2rem;
  border-bottom: 1px solid rgba(201, 201, 201, 0.555);
  .not-login {
    width: 100%;
    padding: 0.3rem 0;
    text-align: center;
    li {
      font-size: 0.24rem;
      color: rgba(0, 0, 0, 0.801);
    }
    input {
      margin-top: 0.2rem;
      width: 2.2rem;
      height: 0.6rem;
      color: #fff;
      background-color: red;
      border: 0;
      border-radius: 0.3rem;
      display: inline-block;
    }
    input:active {
      background-color: rgb(207, 0, 0);
    }
  }
  .login {
    width: 100%;
    padding: 0.3rem 0;
    overflow: hidden;
    .portrait {
      width: 0.6rem;
      height: 0.6rem;
      border-radius: 50%;
      float: left;
      img {
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 50%;
      }
    }
    .IDname {
      width: 60%;
      height: 100%;
      line-height: 0.6rem;
      margin-left: 0.3rem;
      float: left;
    }
  }
  .nav {
    width: 100%;
    height: 1.2rem;
    display: flex;
    .iconfont {
      font-size: 0.6rem;
      color: red;
    }
    .pagename {
      font-size: 0.24rem;
    }
    .icon-nav-zy {
      transform: scale(0.9);
    }
    .icon-haoyou {
      transform: scale(0.99);
    }
    &-line:nth-child(2),
    &-line:nth-child(3) {
      margin: 0 0.28rem;
    }
    &-line:nth-child(1) {
      margin-right: 0.28rem;
    }
    &-line:nth-child(4) {
      margin-left: 0.28rem;
    }
    &-line {
      flex-grow: 1;
      text-align: center;
    }
  }
}
.meum-top {
  padding: 0.2rem 0;
  width: 90%;
  border-bottom: 1px solid rgba(201, 201, 201, 0.555);
  .line {
    font-size: 0.28rem;
    width: 100%;
    height: 0.8rem;
    line-height: 0.8rem;
    .iconfont {
      margin-right: 0.15rem;
      font-size: 0.35rem;
      color: #000;
    }
    .icon-gouwuche {
      font-weight: 600;
    }
  }
}
.meum-bottom {
  padding: 0.2rem 0;
  width: 90%;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgba(201, 201, 201, 0.555);
  .line {
    font-size: 0.28rem;
    width: 100%;
    height: 0.8rem;
    line-height: 0.8rem;
    .iconfont {
      margin-right: 0.15rem;
      font-size: 0.35rem;
      color: #000;
    }
  }
}
.main {
  position: absolute;
  width: 100%;
  top: 4.5rem;
  z-index: 3;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  background-color: #fff;
}
.background {
  // z-index: 1;
  position: absolute;
  top: 0;
  background-size: cover;
  height: 5rem;
  width: 100%;
  background-image: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586090209690&di=8239589497cc4da1ae4862b1c026aed7&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fe3bfb8c01209c94a0a2fc61baa5a56e9bf7e477a274dc-MYcRMU_fw658);
}
.Meum-show {
  &-enter {
    transform: translateX(-120%);
    &-to {
      transform: translateX(0);
    }
    &-active {
      transition: transform 0.5s ease;
    }
  }
  &-leave {
    transform: translateX(0);
    &-to {
      transform: translateX(-120%);
    }
    &-active {
      transition: transform 0.5s ease;
    }
  }
}
</style>
