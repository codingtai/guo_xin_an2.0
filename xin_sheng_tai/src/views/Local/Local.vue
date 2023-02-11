<template>
  <div>
    <!-- 分类列表 -->
    <!-- <local-channel /> -->

    <!-- 轮播图 -->
    <local-card :list="localList"/>

    <MyPanel title="精选话题" subTitle=""></MyPanel>
    <!-- 主体内容 -->
    <local-select :list="localList"/>
  </div>
</template>

<script>
import MyPanel from "@/components/MyPanel.vue";
import LocalChannel from "./components/LocalChannel.vue";
import LocalCard from "./components/LocalCard.vue";
import LocalSelect from "./components/LocalSelect.vue";
import { useLocalStore } from "@/store/pinia/local";
import { storeToRefs } from 'pinia';
export default {
  components: {
    MyPanel,
    LocalChannel,
    LocalCard,
    LocalSelect,
  },
  setup(){
    const localStore = useLocalStore()
    localStore.getAllLocal()
    const {localList} = storeToRefs(localStore)

    return {localList}
    
  }
};
</script>

<style lang="less" scoped>
</style>