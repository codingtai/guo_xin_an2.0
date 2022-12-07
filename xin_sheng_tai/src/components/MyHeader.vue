<template>
    <div class="my-header">
        <!-- 上边区域 -->
        <div class="header-top w">
            <h1 class="logo">
                <router-link to="/">新生态</router-link>
            </h1>
        </div>
        <!-- 下边区域 -->
        <div class="herder-down">
            <!-- 二级导航 -->
            <AppHeaderNav/>
        </div>
    </div>
</template>

<script>
import AppHeaderNav from './AppHeaderNav.vue'
    export default {
  components: { AppHeaderNav },
        name:'myheader'
    }
</script>

<style lang="less" scoped>
.my-header{
    height: 120px;
    background-color: #fff;

}
.header-top{
    height: 60px;
    
}
.logo{
    padding: 7px;
}
</style>