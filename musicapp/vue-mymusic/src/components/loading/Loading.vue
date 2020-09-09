<!-- 加载中全局组件 -->
<template>
  <div>
    <!-- 条形加载 -->
    <div class="loading" v-if="type">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <!-- 圆形加载 -->
    <div class="loading" v-if="!type">
      <div class="loading-crile"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    type: {
      type: Boolean
    }
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.loading {
  width: 30%;
  height: 1rem;
  text-align: center;
  z-index: 999;
}
.loading span {
  display: inline-block;
  width: 0.1rem;
  height: 0.2rem;
  margin-left: 0.05rem;
  -webkit-animation: load 1s ease infinite;
  background-color: #dd001b;
}
@-webkit-keyframes load {
  0%,
  100% {
    height: 0.2rem;
  }
  50% {
    height: 0.56rem;
  }
}
.loading span:nth-child(2) {
  -webkit-animation-delay: 0.2s;
}
.loading span:nth-child(3) {
  -webkit-animation-delay: 0.4s;
}
.loading span:nth-child(4) {
  -webkit-animation-delay: 0.6s;
}
.loading span:nth-child(5) {
  -webkit-animation-delay: 0.8s;
}

/**圆形加载 */
.loading-crile {
  height: 0.4rem;
  width: 0.4rem;
  display: inline-block;
  -webkit-animation: rotate 1s ease infinite;
  border-radius: 50%;
  border-style: solid;
  border-width: 0.07rem 0.07rem 0.07rem 0.07rem;
  border-color: red red rgba(255, 0, 0, 0) red;
}
@-webkit-keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
