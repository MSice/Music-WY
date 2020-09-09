<!--  -->
<template>
<div>
    <div class="history" v-show="historyList.length && !showsearchList">
      <div class="top clearfix">
        <div class="left">
          <span>历史纪录</span>
        </div>
        <div class="right" @click="clearfull">
          <i class="iconfont icon-lajitong"></i>
        </div>
      </div>
      <div class="info clearfix">
        <ul class="clearfix">
          <li v-for="(item,index) in historyList" :key="index">
            <button @click="goDetails(item)">{{item}}</button>
          </li>
        </ul>
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
methods:{

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
.history {
  width: 100%;
  margin-bottom: 0.8rem;
}
.history .top {
  margin: 10px 10px;
}
.history .top .left {
  float: left;
}
.history .left span {
  font-size: 0.4rem;
  font-weight: bolder;
  color: black;
}
.history .top .right {
  float: right;
}
.history .right i {
  font-size: 0.4rem;
  color: #666;
}
.history .info {
  margin: 10px 10px;
}
.history .info ul {
  /* display: flex; */
}
.history .info li {
  float: left;
  margin-top: 0.2rem;
  margin-right: 0.2rem;
}
.history .info button {
  height: 0.6rem;
  background-color: #dddddd;
  border: none;
  border-radius: 25px;
  opacity: 0.8;
  padding: 5px;
}
</style>