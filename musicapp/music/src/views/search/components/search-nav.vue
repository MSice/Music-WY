<!--  -->
<template>
  <div>
    <div class="toper">
      <div class="left">
        <Return />
      </div>
      <div class="input">
        <input
          type="text"
          :placeholder="hotSearch"
          v-model.trim="searchDate"
          @keyup="getSearchDate(searchDate)"
        />
      </div>
      <div class="right" @click="goSinger">
        <i class="iconfont icon-person"></i>
      </div>
    </div>
  </div>
</template>

<script>
import Return from "@/components/return/return";
import {_getSearchSuggest} from "@/api/API";
export default {
components: {
    Return,
  },
data() {
return {

}
},
methods:{
    /**匹配搜索 */
    getSearchDate(keywords) {
      if (keywords) {
        _getSearchSuggest(keywords).then(res => {
          console.log(res.data.result.allMatch);
          this.searchList = res.data.result.allMatch;
        });
      }
    },
    /**跳转到歌手界面 */
    goSinger() {
      this.$router.push("singer");
    }
},
//生命周期 - 创建完成（访问当前this实例）
created() {

},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

}
}
</script>
<style scoped>
/* @import url(); 引入css类 */
.toper {
  background-color: #fff;
  position: fixed;
  top: 0;
  display: flex;
  width: 100%;
  height: 0.8rem;
  padding-top: 0.1rem;
  z-index: 100;
  line-height: 0.8rem;
}
.toper .left {
  flex-grow: 1;
  width: 5%;
  display: inline-block;
}
.toper .input {
  flex-grow: 8;
  height: 100%;
  margin-left: 0.3rem;
  margin-right: 0.5rem;
  width: 50%;
}
.toper .input input {
  padding-left: 5px;
  width: 100%;
  border: none;
  border-bottom: #666 solid 0.5px;
  background: none;
  outline: none;
  height: 100%;
  font-size: 0.35rem;
  line-height: 100%;
}
.toper .right {
  flex-grow: 1;
  width: 10%;
  display: inline-block;
}
.toper .right i {
  font-size: 0.5rem;
}
</style>