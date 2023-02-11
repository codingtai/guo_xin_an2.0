<template>
    <div>
        <app-card :list="list"/>
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