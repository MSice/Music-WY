<!--  -->
<template>
  <div>
    <div class="box">
      <div class="banner">
      <swiper :options="swiperOption" class="Swiper">
        <swiper-slide v-for="(item,index) in auditData" :key="index" class="soild">
          <img :src="item.pic" alt />
          <div class="iconName" :style="{backgroundColor:item.titleColor}">{{item.typeTitle}}</div>
        </swiper-slide>
      </swiper></div>
    </div>
  </div>
</template>

<script>
import test01 from "../../components/test/test01.vue";
export default {
  components: { test01 },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {}
};
</script>
<style lang='less' scoped>
</style>