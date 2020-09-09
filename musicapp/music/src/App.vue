<template>
  <div id="app" :style="{'padding-top':isMargin}">
    <div v-show="isShow">
      <Navitation />
    </div>
    <musicplayer />
    <router-view />
  </div>
</template>
<script>
import Navitation from "@/components/navigation/Navigation";
export default {
  components: {
    Navitation
  },
  data() {
    return {
      isShow: true,
      isMargin: "1rem"
    };
  },
  watch: {
    $route(to, from) {
      if (
        to.path === "/" ||
        to.path === "/finding" ||
        to.path === "/mine" ||
        to.path === "/video" ||
        to.path === "/friend"||to.path === "/test"
      ) {
        this.isShow = true;
        this.isMargin = "1rem";
      } else {
        this.isShow = false;
        this.isMargin = "0rem";
      }
    }
  }
};
</script>
<style lang="less">
#app {
  font-family: Arial, Microsoft Yahei, Helvetica Neue, Helvetica, sans-serif;
  font-size: 0.35rem;
  /* margin: 0 0.3rem; */
}
body::-webkit-scrollbar {
  display: none;
}
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
li {
  list-style: none;
}
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
</style>
