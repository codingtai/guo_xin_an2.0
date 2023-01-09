<template>
    <div class="nav w">
       <ul>
        <li>
            <i class="iconfont icon-zhuye"></i>
            <router-link to="/personalcenter/pchome">主页</router-link>
        </li>
        <li>
            <i class="iconfont icon-dingyue"></i>
            <router-link to="/personalcenter/subscribe">订阅</router-link>
         </li>
        <li>
            <i class="iconfont icon-wodeguanzhu"></i>
            <router-link to="/personalcenter/focus">关注</router-link>
        </li>
        <li>
            <i class="iconfont icon-fensi"></i>
            <router-link to="/personalcenter/fans">粉丝</router-link>
        </li>
       </ul>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
.nav{
    padding: 15px 0 15px 20px;
    li{
        
        float: left;
        font-size: 20px;
        margin-right: 20px;
        padding: 0 10px;
        &:hover{
            a{
               padding-bottom: 5px;
                color: @xtxColor;
                border-bottom: 2px solid @xtxColor;
            }
        }
    }
}
</style>