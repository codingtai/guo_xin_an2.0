<template>
    <div class="app-top-nav">
        <div class="w">
                <ul>
                    <template v-if="false">
                        <li>
                        <a href="###">张三</a>
                    </li>
                    <li>
                        <a href="###">退出登录</a>
                    </li>
                    </template>
                    <li v-else>
                        <a href="###">
                            <i class="iconfont icon-denglu"></i>
                            登录|注册
                        </a>
                    </li>
                    <li>
                        <a href="###">个人中心</a>
                    </li>
                    <li>
                        <a href="###">客户服务</a>
                    </li>
                    <li>
                        <a href="###">
                        <i class="iconfont icon-shouji"></i>
                        App
                    </a>
                </li>
                </ul>
        </div>
    </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';

    export default {
        setup(props){
            const store = useStore();
            let userinfo = computed(()=>{
                return store.state.user.userinfo;
            });

            return {userinfo};
        }
    };
</script>

<style lang="less" scoped>
.app-top-nav{
    background-color: #333;
    ul{
        
        display: flex;
        height: 40px;
        line-height: 40px;
        justify-content: flex-end;
        li{
            a{
                padding: 0 12px;
                color: #ccc;
                border-left: 1px solid #ccc;
                &:hover{
                    color: @xtxColor;
                }
            }
        }
        li:nth-child(1){
            a{
                border-left: 0;
            }
        }
    }

}
</style>