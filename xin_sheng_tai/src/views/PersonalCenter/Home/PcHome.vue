<template>
    <div class="pchome w">
        <MyPanel title="我的发布" subTitle=""></MyPanel>
        <my-pc-home/>
    </div>
</template>

<script>
import MyPanel from '../../../components/MyPanel.vue'
import MyPcHome from './components/MyPcHome.vue'
    export default {
  components: { MyPanel, MyPcHome },
        
    }
</script>

<style lang="less" scoped>

</style>