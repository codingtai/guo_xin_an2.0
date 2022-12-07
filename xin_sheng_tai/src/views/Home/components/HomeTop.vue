<template>
    <div>
        <top-panel>
            <template #left>
               <home-banner/>
            </template>
            <template #right>
                <app-rank/>
            </template>
        </top-panel>
    </div>
</template>

<script>
import HomeBanner from './HomeBanner.vue'
import TopPanel from './TopPanel.vue'
    export default {
  components: { TopPanel, HomeBanner },
        
    }
</script>

<style lang="less" scoped>
img{
    height: 500px;
    width: 750px;
}
</style>