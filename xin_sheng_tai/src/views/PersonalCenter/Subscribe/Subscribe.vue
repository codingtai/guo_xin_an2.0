<template>
    <div class="subscribe w">
        <MyPanel title="我的订阅" subTitle=""></MyPanel>
        <my-subscribe/>
    </div>
</template>

<script>
import MyPanel from '../../../components/MyPanel.vue'
import MySubscribe from './components/MySubscribe.vue'
    export default {
  components: { MyPanel, MySubscribe },
        
    }
</script>

<style lang="less" scoped>

</style>