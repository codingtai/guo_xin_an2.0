<template>
    <div>
        <app-content :list="list"/>
    </div>
</template>

<script>
    export default {
        props:{
            list:{
                type:Array,
                default:[]
            }
        }
    }
</script>

<style lang="less" scoped>

</style>