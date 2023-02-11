<template>
  <div>
    <!-- 分类列表 -->
    <!-- <sea-channel /> -->

    <!-- 轮播图 -->
    <sea-card :list="seaList"/>

    <MyPanel title="精选话题" subTitle=""></MyPanel>
    <!-- 主体内容 -->
    <sea-select :list="seaList" />
  </div>
</template>

<script>
import SeaCard from "./components/SeaCard.vue";
import SeaChannel from "./components/SeaChannel.vue";
import SeaSelect from "./components/SeaSelect.vue";
import MyPanel from "@/components/MyPanel.vue";
import { useSeaStore } from "@/store/pinia/sea";
import { storeToRefs } from "pinia";
export default {
  components: { SeaChannel, SeaCard, SeaSelect, MyPanel },
  setup() {
    const seaStore = useSeaStore();
    const { seaList } = storeToRefs(seaStore);
    seaStore.getAllSea();
    return {
      seaList,
    };
  },
};
</script>

<style lang="less" scoped>
</style>