<!--  -->
<template>
<div>
    <div class="searchList" v-show="showsearchList">
      <div class="searchContent">搜索&nbsp;“{{searchDate}}”</div>
      <div
        v-for="(item,index) in searchList"
        :key="index"
        class="clearfix searchList-List"
        @click="songDetails(item.keyword)"
      >
        <div class="iconfont icon-sousuo"></div>
        <div class="songName">{{item.keyword}}</div>
      </div>
    </div>
</div>
</template>

<script>
export default {
data() {
return {

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
.searchList {
  position: fixed;
  top: 1.5rem;
}
.searchList .searchContent {
  font-size: 0.35rem;
  color: cornflowerblue;
}
.searchList .searchList-List {
  margin-top: 0.5rem;
  font-size: 0.35rem;
  color: #666;
}
.searchList .icon-sousuo {
  float: left;
  font-size: 0.4rem;
}
.searchList .songName {
  float: left;
  margin-left: 0.5rem;
}
</style>