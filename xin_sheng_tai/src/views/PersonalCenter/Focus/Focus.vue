<template>
    <div class="focus w">
        <MyPanel class="panel" title="我的关注" subTitle=""></MyPanel>
        <!-- <my-focus/>
        <my-focus/> -->
    </div>
</template>

<script>
import MyPanel from '../../../components/MyPanel.vue'
import MyFocus from './components/MyFocus.vue'
    export default {
  components: { MyPanel, MyFocus },
        
    }
</script>

<style lang="less" scoped>
.panel{
    border-bottom: 1px solid #e5e9ef;
}
</style>