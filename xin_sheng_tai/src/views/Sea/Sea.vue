<template>
    <div>
        <!-- 分类列表 -->
        <sea-channel/>

        <!-- 轮播图 -->
        <sea-card/>

        <MyPanel title="精选话题" subTitle=""></MyPanel>
        <!-- 主体内容 -->
       <sea-select/>
       

    </div>
</template>

<script>
import SeaCard from './components/SeaCard.vue'
import SeaChannel from './components/SeaChannel.vue'
import SeaSelect from './components/SeaSelect.vue'
import MyPanel from '@/components/MyPanel.vue'
    export default {
  components: { SeaChannel, SeaCard, SeaSelect, MyPanel },
        
    }
</script>

<style lang="less" scoped>

</style>