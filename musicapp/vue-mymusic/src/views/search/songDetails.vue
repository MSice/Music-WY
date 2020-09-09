<!--  -->
<template>
  <div class="content">
    <nav-input :name="searchName"></nav-input>
    <nav-slider :selectpath.sync="selectpath" ></nav-slider>
    <!-- <details-List :name="$route.params.searchName"></details-List> -->
    <router-view></router-view>
  </div>
</template>

<script>
import navInput from './components/navInput.vue'
import navSlider from './components/navSlider.vue'
import {  mapMutations } from "vuex";
// import detailsList from './components/songDetailsZH'
export default {
  components:{
    navInput,
    navSlider,
    // detailsList
  },
  data() {
    return {
      selectpath:'zonghe/',
      searchName:"",
    };
  },
  methods: {
    /**引入播放器 */
    ...mapMutations({
      searchAdd : 'search_Add',
      
    }),
  },
  watch:
  {
    selectpath(newVal){
      // console.log(newVal);
      this.$router.push({path:`${this.selectpath}${this.searchName}`})
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    this.searchName = this.$route.params.searchName;
    console.log(this.searchName);
    console.log(this.searchName);
    console.log(this.searchName);
    console.log(this.searchName);
    this.$router.push({path:`/zonghe/${this.searchName}`})
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style scoped lang="less">
/* @import url(); 引入css类 */
@color: #666;
@fontsize: 0.35rem;
.content{
  margin-top: 2.3rem ;
  margin-bottom:1.5rem ;
}
</style>