<!--  -->
<template>
  <div class="nav_input">
    <div class="nav_input_left">
      <i class="iconfont icon-fanhui-wangyiicon" @click="goSearch"></i>
    </div>
    <div class="nav_input_right">
        <i class="iconfont icon-sousuo"></i>
      <input type="text" placeholder="请输入查询内容" v-model.trim="searchDate"
          @keyup="getSearchDate(searchDate)"/>
    </div>
  </div>
</template>

<script>
import {
  _getSearchSuggest,
} from "@/api/API";
export default {
    props:['name'],
    props:{
        'name':String
    },
  data() {
    return {
      searchDate:"",
    };
  },
  methods:{
      /**返回搜索 */
    goSearch(){
      this.$router.push("/search");
    },
    /**匹配搜索 */
    getSearchDate(keywords) {
      if (keywords) {
        _getSearchSuggest(keywords).then(res => {
          console.log(res.data.result.allMatch);
          this.searchList = res.data.result.allMatch;
        });
      }
    },
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
     this.searchDate= this.name;
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style scoped lang="less">
/* @import url(); 引入css类 */
.nav_input {
  padding: 0.2rem;
  background-color: #fff;
  position: fixed;
  top: 0;
  display: flex;
  width: 100%;
  height: 0.8rem;
  padding-top: 0.1rem;
  z-index: 100;
  line-height: 0.8rem;
  &_left {
    i {
      font-size: 0.5rem;
    }
  }
  &_right {
    height: 100%;
    margin-left: 0.3rem;
    margin-right: 0.5rem;
    width: 140%;
    position: relative;
    i{
        position: absolute;
        margin-left:0.1rem;
    }
    input {
      padding-left: 5px;
      width: 100%;
      border: none;
      border-bottom: #666 solid 0.5px;
      background: none;
      outline: none;
      height: 100%;
      font-size: 0.35rem;
      line-height: 100%;
      text-indent: 0.5rem;
    }
  }
}
</style>