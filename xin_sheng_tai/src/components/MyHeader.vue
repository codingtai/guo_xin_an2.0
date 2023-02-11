<template>
  <div class="my-header">
    <!-- 上边区域 -->
    <div class="header-top w">
      <h1 class="logo">
        <router-link to="/">新生态</router-link>
        <img src="" alt="" />
      </h1>
    </div>
    <!-- 下边区域 -->
    <div class="herder-down">
      <!-- 二级导航 -->
      <AppHeaderNav />
      <div class="app-header-sticky" :class="{ show: y >= 110 }">
        <div class="container">
          <header-nav />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import AppHeaderNav from "./AppHeaderNav.vue";
import { useWindowScroll } from '@vueuse/core'
export default {
  components: { AppHeaderNav },
  setup(props) {
    const { y } = useWindowScroll()
    return { y }
  },
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
.app-header-sticky {
  width: 100%;
  height: 60px;
  position: fixed;
  text-align: center;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
  // 默认隐藏
  transform: translateY(-100%);
  opacity: 0;
  // css显示
  &.show {
    transition: all 0.3s linear;
    transform: none;
    opacity: 1;
  }
  .container {
    display: flex;
    align-items: center;
    text-align: center;
  }
}

</style>