<template>
    <div>
        <!-- 分类列表 -->
        <air-channel/>

        <!-- 轮播图 -->
        <air-card/>

        <MyPanel title="精选话题" subTitle=""></MyPanel>
        <!-- 主体内容 -->
       <air-select/>
       

    </div>
</template>

<script>
import AirCard from './components/AirCard.vue'
import AirChannel from './components/AirChannel.vue'
import AirSelect from './components/AirSelect.vue'
import MyPanel from '@/components/MyPanel.vue'
    export default {
  components: { AirChannel, AirCard, AirSelect, MyPanel },
        
    }
</script>

<style lang="less" scoped>

</style>