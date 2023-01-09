<template>
     <div>
        <!-- 分类列表 -->
       <radiate-channel/>

        <!-- 轮播图 -->
        <radiate-card/>

        <MyPanel title="精选话题" subTitle=""></MyPanel>
        <!-- 主体内容 -->
       <radiate-select/>
       

    </div>
</template>

<script>
import RadiateCard from './components/RadiateCard.vue'
import RadiateChannel from './components/RadiateChannel.vue'
import RadiateSelect from './components/RadiateSelect.vue'
import MyPanel from '@/components/MyPanel.vue';

    export default {
  components: { RadiateChannel, RadiateCard, RadiateSelect, MyPanel },
        
    }
</script>

<style lang="less" scoped>

</style>