<template>
    <div class="login-wrap w">
        <div class="form-wrap ">
            <el-form
                ref="formRef"
                :model="loginData"
                label-width="100px"
                class="demo-dynamic"
            >
                <el-form-item
                prop="username"
                label="用户名"
                :rules="[
                    {
                    required: true,
                    message: '此项为必填项',
                    trigger: 'blur',
                    },
                    
                ]"
                >
      <el-input v-model="loginData.username" />
    </el-form-item>

            <el-form-item
                prop="password"
                label="密码"
                :rules="[
                    {
                    required: true,
                    message: '此项为必填项',
                    trigger: 'blur',
                    },
                    
                ]"
                >
                <el-input type="password" v-model="loginData.password" />
                </el-form-item>
            </el-form>
            <el-button type="primary" class="login-button" @click="handleLogin">登录</el-button>
           
        </div>
    </div>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
import { useStore } from 'vuex';
export default {
  name: "login",
  setup() {
    // const store = useStore()
    // const count = store.state.count
    // const data = reactive({
    //   loginData: {
    //     username:"",
    //     password:""
    //   },
    //   num:count

    // });
    // const handleLogin=()=>{
    //     store.commit('setCount',100);
    //     console.log(store.state.count)
    // }



    // return {
    //   ...toRefs(data),
    //   handleLogin
    // };
  },
};
</script>

<style lang="less" scoped>
body,
html {
  padding: 0;
  margin: 0;
}
.login-wrap {
  width: 100%;
  height: 100vh;
  background-color: rgb(71, 129, 168);
  position: relative;
}
.form-wrap {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 30px 50px;
  border-radius: 5px;
}
.login-button{
    display: block;
    margin: 10px auto;
}
</style>