<template>
    <div>
        <!-- 分类列表 -->
        <land-channel/>

        <!-- 轮播图 -->
        <land-card/>

        <MyPanel title="精选推荐" subTitle=""></MyPanel>
        <!-- 主体内容 -->
        <land-select/>

    </div>
</template>

<script>
import MyPanel from '../../components/MyPanel.vue'
import LandCard from './components/LandCard.vue'
import LandChannel from './components/LandChannel.vue'
import LandSelect from './components/LandSelect.vue'


    export default {
  components: {
    LandChannel,
    LandCard,
    MyPanel,
    LandSelect
    }
   
        
    }
</script>

<style lang="less" scoped>

</style>