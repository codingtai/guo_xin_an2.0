<template>
  <div>
    <!-- 分类列表 -->
    <!-- <land-channel /> -->

    <!-- 轮播图 -->
    <land-card :list="landList"/>

    <MyPanel title="精选推荐" subTitle=""></MyPanel>
    <!-- 主体内容 -->
    <land-select :list="landList"/>
  </div>
</template>

<script>
import { useLandStore } from "@/store/pinia/land";
import MyPanel from "../../components/MyPanel.vue";
import LandCard from "./components/LandCard.vue";
import LandChannel from "./components/LandChannel.vue";
import LandSelect from "./components/LandSelect.vue";
import { storeToRefs } from 'pinia';

export default {
  components: {
    LandChannel,
    LandCard,
    MyPanel,
    LandSelect,
  },
  setup() {
    const landStore = useLandStore()
    landStore.getAllLand()
    const {landList} = storeToRefs(landStore)
    return {
        landList
    }

  },
};
</script>

<style lang="less" scoped>
</style>