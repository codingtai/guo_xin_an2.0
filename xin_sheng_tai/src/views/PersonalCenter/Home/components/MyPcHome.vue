<template>
    <div>
        <app-content :list="userDetail" v-if="loginStatus"/>
        <app-content v-else/>
    </div>
</template>

<script>
import { useUserStore } from '@/store/pinia/user';
import { storeToRefs } from 'pinia';

    export default {
        setup(){
            const userStore = useUserStore()
            const {userDetail,loginStatus} = storeToRefs(userStore)
            return{
                userDetail,
                loginStatus
            }
        }
    }
</script>

<style lang="less" scoped>

</style>