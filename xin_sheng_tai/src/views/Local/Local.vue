<template>
    <div>
        <!-- 分类列表 -->
        <local-channel/>

        <!-- 轮播图 -->
        <local-card/>

        <MyPanel title="精选话题" subTitle=""></MyPanel>
        <!-- 主体内容 -->
       <local-select/>
       

    </div>
</template>

<script>
import MyPanel from '@/components/MyPanel.vue';
import LocalChannel from './components/LocalChannel.vue';
import LocalCard from './components/LocalCard.vue';
import LocalSelect from './components/LocalSelect.vue';
    export default {
  components: { 
    
    MyPanel,
    LocalChannel,
    LocalCard,
    LocalSelect
    },
        
    }
</script>

<style lang="less" scoped>

</style>