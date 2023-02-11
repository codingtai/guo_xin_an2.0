<template>
    <div>
        <!-- 1、顶部通栏 -->
    <AppTopNav/>
    <!-- 2、头部区域 -->
    <MyHeader/>
    <!-- 3、主体区域 -->
    <div class="main">   
    <router-view/>
    </div>
    <!-- 底部区域 -->
    <AppFooter/>
   
</div>
</template>

<script>
import AppTopNav from '@/components/AppTopNav.vue';
import MyHeader from '@/components/MyHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

    export default {
    components: {
    AppTopNav,
    MyHeader,
    AppFooter
    
}
    }

</script>

<style lang="less" scoped>

</style>