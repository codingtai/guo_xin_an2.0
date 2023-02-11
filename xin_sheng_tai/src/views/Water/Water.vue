<template>
     <div>
        <!-- 分类列表 -->
       <!-- <water-channel/> -->

        <!-- 轮播图 -->
        <water-card :list="waterList"/>

        <MyPanel title="精选话题" subTitle=""></MyPanel>
        <!-- 主体内容 -->
       <water-select :list="waterList"/>
       

    </div>
</template>

<script>
import WaterCard from './components/WaterCard.vue'
import WaterChannel from './components/WaterChannel.vue'
import WaterSelect from './components/WaterSelect.vue'
import MyPanel from '@/components/MyPanel.vue'
import { useWaterStore } from '@/store/pinia/water'
import { storeToRefs } from 'pinia'
    export default {
  components: { WaterChannel, WaterCard, WaterSelect, MyPanel },
        setup(){
          const waterStore = useWaterStore()
          const {waterList} = storeToRefs(waterStore)
          waterStore.getAllWater()
          return {
            waterList
          }
        }
    }
</script>

<style lang="less" scoped>

</style>