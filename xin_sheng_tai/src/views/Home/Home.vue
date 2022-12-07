<template>
    <div class="home w">
        <!-- 轮播图 -->
        <div class="home-top w">
            <div class="banner">
                <home-banner/>
            </div>
            <div class="rank">
                <AppRank/>
            </div>
        </div>
        <!-- 严重污染 -->
        <home-severe/>

        <!-- 当地问题 -->
        <home-local/>

        <!-- 陆地污染 -->
        <home-land/>

        <!-- 海洋污染 -->
        <home-sea/>

        <!-- 水污染 -->
        <home-water/>
    </div>
</template>

<script>
import AppRank from '../../components/liarbry/AppRank.vue';
import HomeBanner from './components/HomeBanner.vue';
import HomeLand from './components/HomeLand.vue';
import HomeLocal from './components/HomeLocal.vue';
import HomeSea from './components/HomeSea.vue';
import HomeSevere from './components/HomeSevere.vue';
import HomeTop from './components/HomeTop.vue';
import HomeWater from './components/HomeWater.vue';


    export default {
  components: { HomeSevere, HomeLocal, HomeLand, HomeSea, HomeWater, AppRank, HomeTop, HomeBanner},

    };
</script>

<style lang="less" scoped>
.home-top{
    overflow: hidden;
    height: 520px;
}
.banner{
    float: left;
    margin-right: 8px;
}
.rank{
    float: left;
    margin-left: 8px;
    margin-top: 3px;
}
</style>