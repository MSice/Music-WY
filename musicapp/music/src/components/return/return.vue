<!--  -->
<template>
  <div>
    <div class="return" @click="goPage">
      <i class="iconfont icon-fanhui-wangyiicon"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goPage() {
      this.$router.push("finding");
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
.return i {
  font-size: 0.5rem;
}
</style>
