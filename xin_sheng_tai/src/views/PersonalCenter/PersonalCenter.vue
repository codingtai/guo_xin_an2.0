<template>
    <div>
        <!-- 头部区域 -->
        <pc-my-header/>
        <!-- 主体区域 -->
        <div>
            <router-view/>       
        </div>
    </div>
</template>

<script>
import PcMyHeader from './components/PcMyHeader.vue'
    export default {
  components: {PcMyHeader  },
        
    }
</script>

<style lang="less" scoped>

</style>