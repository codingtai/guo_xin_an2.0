<template>
  <div class="app-top-nav">
    <div class="w">
      <ul>
        <li>
          <el-dialog v-model="dialogForm"  width="480px">
            <!-- 登录注册组件 -->
           <app-login @changedialogFormVisible="changeType"/>
          </el-dialog>
          <button class="btn" v-if="loginStatus" @click="loginOut">
            {{userInfo[0].fields.username}}|注销
          </button>
          <button class="btn" @click="dialogForm=true" v-else>
            登录|注册
          </button>
        </li>
        <li>
          <router-link to="/personalcenter">个人主页</router-link>
        </li>
        <li>
          <a href="###">客户服务</a>
        </li>
        <li>
          <a href="###">
            <i class="iconfont icon-lishi"></i>
            历史
          </a>
        </li><li>
          <a href="###">
            <i class="iconfont icon-xiaoxitongzhi"></i>
            消息
          </a>
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
import { useUserStore } from "@/store/pinia/user";
import { ref } from "vue";
import AppLogin from './AppLogin.vue';
import { storeToRefs } from 'pinia';
import {getLoginOut} from '@/api/LayOut'
export default {
  components: { AppLogin },
  setup() {
    const userStore = useUserStore()
    const {loginStatus,userInfo} = storeToRefs(userStore)
    const dialogForm = ref(false)
   const changeType=(value)=>{
    dialogForm.value=value
   }
   const loginOut=()=>{
    getLoginOut().then((res)=>{
      // console.log(res);
      if(res=='登出成功'){
        userStore.$patch({
          loginStatus:false
        });
        localStorage.removeItem('user')
      }
    }).catch((err)=>{
      console.log(err);
    })
   }
    return {
      dialogForm,     
      changeType,
      loginStatus,
      userInfo,
      loginOut
    };
  },
};
</script>

<style lang="less" scoped>
.app-top-nav {
  background-color: #333;
  ul {
    .btn {
      color: #ccc;
      background-color: #333;
      border: 0;
      margin-right: 12px;
      cursor: pointer;
      &:hover {
        color: @xtxColor;
      }
    }
    display: flex;
    height: 40px;
    line-height: 40px;
    justify-content: flex-end;
    li {
      a {
        padding: 0 12px;
        color: #ccc;
        border-left: 1px solid #ccc;
        &:hover {
          color: @xtxColor;
        }
      }
    }
    li:nth-child(1) {
      a {
        border-left: 0;
      }
    }
  }
}

</style>