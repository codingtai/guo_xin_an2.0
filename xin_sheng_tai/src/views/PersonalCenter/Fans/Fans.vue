<template>
    <div class="fans w">
        <MyPanel class="panel" title="我的粉丝" subTitle=""></MyPanel>
        <my-fans/>
        <my-fans/>
    </div>
</template>

<script>
import MyPanel from '../../../components/MyPanel.vue'
import MyFans from './components/MyFans.vue'
    export default {
  components: { MyPanel, MyFans },
        
    }
</script>

<style lang="less" scoped>
.panel{
    border-bottom: 1px solid #e5e9ef;
}
</style>