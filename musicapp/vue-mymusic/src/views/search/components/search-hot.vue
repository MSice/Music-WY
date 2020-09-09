<!--  -->
<template>
<div>
    <div class="searchHost" v-show="!showsearchList">
      <div class="top">
        <span>热搜榜</span>
      </div>
      <div class="list" v-for="(item,index) in hotSearchList" :key="index" @click="goDetails(item.searchWord)">
        <li class="left">
          <span :class="{active:index==1||index==0||index==2}">{{index+1}}</span>
        </li>
        <div class="details">
          <div class="name">
            <span>{{item.searchWord}}</span>
            <img
              :style="{width:setWidth(item.iconType)}"
              v-if="item.iconUrl"
              :src="item.iconUrl"
              alt
            />
          </div>
          <div class="info">
            <span>{{item.content}}</span>
          </div>
        </div>
        <div class="right">
          <span>{{item.score}}</span>
        </div>
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
.searchHost {
  margin: 0rem auto;
  width: 94%;
  /* overflow: scroll; */
}
.searchHost .top {
  margin-bottom: 20px;
}
.searchHost .top span {
  font-size: 0.4rem;
  font-weight: bolder;
  color: black;
}
.searchHost .list {
  display: flex;
  margin-top: 10px;
  height: 1rem;
}
.searchHost .list .left {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 10%;
  margin-left: -20px;
  margin-right: 10px;
}
.searchHost .left span {
  line-height: 1rem;
  color: #666;
}
.searchHost .list .active {
  color: red;
}
.searchHost .list .details {
  flex-grow: 6;
  width: 60%;
  height: 100%;
}
.searchHost.name span {
  font-size: 0.4rem;
  color: black;
}
.searchHost img {
  margin-left: 10px;
  height: 0.3rem;
  width: 0.25rem;
}
.searchHost .details .info {
  width: 100%;
  height: 100%;
}
.searchHost .info span {
  width: 100%;
  font-size: 0.25rem;
  color: #aaaaaa;
  /* text-overflow:ellipsis; */
  /* overflow: hidden; */
}
.searchHost .list .right {
  flex-grow: 3;
  height: 100%;
  width: 10%;
  margin-left: 10px;
}
.searchHost .right span {
  line-height: 1rem;
  font-size: 0.3rem;
  color: #aaa;
}
</style>