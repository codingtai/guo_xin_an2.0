<template>
     <div>
        <!-- 分类列表 -->
       <water-channel/>

        <!-- 轮播图 -->
        <water-card/>

        <MyPanel title="精选话题" subTitle=""></MyPanel>
        <!-- 主体内容 -->
       <water-select/>
       

    </div>
</template>

<script>
import WaterCard from './components/WaterCard.vue'
import WaterChannel from './components/WaterChannel.vue'
import WaterSelect from './components/WaterSelect.vue'
import MyPanel from '@/components/MyPanel.vue'
    export default {
  components: { WaterChannel, WaterCard, WaterSelect, MyPanel },
        
    }
</script>

<style lang="less" scoped>

</style>