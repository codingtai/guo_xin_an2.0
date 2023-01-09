<template>
  <div class="my-header">
    <!-- 上边区域 -->
    <div class="header-top w">
      <h1 class="logo">
        <router-link to="/">新生态</router-link>
        <img src="" alt="">
      </h1>
    </div>
    <!-- 下边区域 -->
    <div class="herder-down">
      <!-- 二级导航 -->
      <AppHeaderNav />
    </div>
  </div>
</template>

<script>
import AppHeaderNav from "./AppHeaderNav.vue";
import { useStore } from "vuex";
export default {
  components: { AppHeaderNav },
  setup(props){
    const store = useStore();
    //出发action
    store.dispatch('category/getAllCategory');
  }
};
</script>

<style lang="less" scoped>
.my-header {
  height: 110px;
  background-color: #fff;
}
.header-top {
  height: 60px;
}
.logo {
  padding: 7px;
  width: 100px;
}
</style>