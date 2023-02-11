<template>
    <div class="login">
        <div class="contain">
              <!-- 注册登录头部导航 -->
              <div class="title">
                <!-- 密码登录转换按钮 -->
                <div class="login-title">
                  <div :class="{ ActivePwdBtnBox: btnPwd }" class="btn-box">
                    <button
                      :class="{ ActivePwdBtnBox: btnPwd }"
                      class="title-btn"
                      @click="changeTypeOnce"
                    >
                      密码登录
                    </button>
                  </div>
                </div>
                <!-- 注册登录转换按钮-->
                <div class="register-title">
                  <div :class="{ ActivePwdBtnBox: btnReg }" class="btn-box">
                    <button
                      :class="{ ActivePwdBtnBox: btnReg }"
                      class="title-btn"
                      @click="changeType"
                    >
                      短信登录注册
                    </button>
                  </div>
                </div>
              </div>
              <!-- 底部注册登录输入主要内容 -->
              <div class="content">
                <!-- 登录验证部分 -->
                <div class="login-content" v-if="isLogin">
                  <div class="form">
                    <!-- 登录-手机号输入框 -->
                    <div class="error">
                      <div class="form-content-f">
                        <span class="left">+86</span>
                        <input
                          type="text"
                          placeholder="手机号或邮箱"
                          v-model="formData.phonenum"
                        />
                      </div>
                      <span class="error-f" v-if="phoneError"
                        >手机号或邮箱填写错误</span
                      >
                    </div>
                    <!-- 登录-密码输入框 -->
                    <div class="error">
                      <div class="form-content-s">
                        <input
                          type="password"
                          placeholder="密码"
                          v-model="formData.password"
                        />
                      </div>
                      <span class="error-f" v-if="pwdError">密码填写错误</span>
                    </div>
                  </div>
                  <!-- 密码登录按钮 -->
                  <div class="form-bbtn">
                    <button class="bbtn" @click="Pwdlogin">登录</button>
                  </div>
                  <!-- 占位专用 -->
                  <div class="space"></div>
                </div>

                <!-- 注册验证部分 -->
                <div class="register-content" v-else>
                  <div class="form">
                    <!-- 注册-手机号输入框 -->
                    <div class="error">
                      <div class="form-content-f">
                        <span class="left">+86</span>
                        <input
                          type="text"
                          placeholder="手机号"
                          v-model="data.mobile_phone"
                        />
                      </div>
                      <span
                        class="error-f"
                        v-for="item in errdata.mobile_phone"
                        :key="item"
                        >{{ item }}</span
                      >
                    </div>
                    <!-- 注册验证码输入框 -->
                    <div class="error">
                      <div class="test-box">
                        <div class="form-content-t">
                          <input
                            type="text"
                            placeholder="验证码"
                            v-model="data.code"
                          />
                        </div>
                        <div class="test">
                          <button
                            v-if="!disabled"
                            class="test-btn"
                            @click="Test"
                          >
                            发送验证码
                          </button>
                          <button v-else class="test-btn" disabled="true">
                            {{count}}秒后重新发
                          </button>
                        </div>
                      </div>
                      <span class="error-f" v-for="item in errdata.code" :key="item"
                        >{{item}}</span
                      >
                    </div>
                  </div>
                  <!-- 注册登录按钮 -->
                  <div class="form-bbtn">
                    <button class="bbtn" @click="Reglogin">登录</button>
                  </div>
                  <!-- 占位专用 -->
                  <div class="space"></div>
                </div>
              </div>
            </div>
    </div>
</template>

<script>
import { ref, reactive, toRefs } from "vue";
import {postRegLogin ,getTest, postLogin} from "@/api/LayOut"
import { useRouter } from "vue-router";
import {useUserStore} from '@/store/pinia/user'
    export default {
    setup(props, context){
    const router = useRouter()
    const userStore = useUserStore()
    const titledata=reactive({
      isLogin: true,
      btnPwd: true,
      btnReg: false,
      
    });
    const changeType = () => {
      titledata.isLogin = false;
      titledata.btnPwd = false;
      titledata.btnReg = true;
    };
    const changeTypeOnce = () => {
      titledata.isLogin = true;
      titledata.btnPwd = true;
      titledata.btnReg = false;
    };
// 登录页数据
    const logindata = reactive({
        phoneError:false,
        pwdError:false,
        dialogForm:false,
        formData:{
          phonenum:"",
          password:"",          
        },
    });
    const loginError = ref([])
    const Pwdlogin=()=>{
      postLogin(logindata.formData).then((res)=>{
        console.log(res)
        if(res.status){
          userStore.$patch({
            loginStatus:true,
            userInfo:res.user,
            userDetail:res.detail
          }),
          
          context.emit('changedialogFormVisible',logindata.dialogForm)
        }
        else{
          loginError.value=res.error
        }
      }).catch((err)=>{
        console.log(err);
      })
    }
// 注册页数据
    const registerdata = reactive({
        disabled:false,
        testError:false,
        dialogForm:false,

        total:60,
        count:0,

        data:{
            mobile_phone: "",
            code:"",
            tpl:"register"
        }      
    });
// 倒计时功能
  //   const TimerHandler=()=>{
  //     registerdata.count = registerdata.total
  //     registerdata.disabled=true
  //   let timer=setInterval(()=>{
  //     if(registerdata.count>1 && registerdata.count<=registerdata.total){
  //       registerdata.count--
  //     }else{
  //       registerdata.disabled=false
  //       clearInterval(timer)
  //     }
  //   },1000)
  // };
// 错误信息
    const errdata = ref([]);
// 注册登录按钮
    // const Reglogin=()=>{
     
    //   postRegLogin(registerdata.data).then((res)=>{
    //     console.log(res)
    //     if(res.status){
    //       context.emit('changedialogFormVisible',registerdata.dialogForm)
    //     }else{
    //       errdata.value = res.error;
    //     }
    //   }).catch(()=>{
    //     console.log(err);
    //   })
    // }
// 发送验证码按钮
    // const Test = () => { 
    //   getTest(registerdata.data)
    //     .then((res) => {
    //       if (res.status) {
    //         TimerHandler();
    //         // console.log("发送成功，倒计时");
    //       } else {
    //         // 错误信息
    //         errdata.value = res.error;
    //       }
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // };
    return {
        ...toRefs(titledata),
      ...toRefs(logindata),
      changeType,
      changeTypeOnce,
      Pwdlogin,
      loginError,
      
    }
        }
    }
</script>

<style lang="less" scoped>
.ActivePwdBtnBox {
  color: #62c36c;
}
.ActivePwdBtnBox {
  border-bottom: 2px solid #62c36c;
}
.title {
  color: #40404c;
  overflow: hidden;
  border-bottom: 1px solid #e8e8e8;
}
.btn-box {
  float: left;
  margin-right: 20px;
  padding-bottom: 10px;
}

.title-btn {
  padding: 0 10px;
  font-size: 18px;
  border: none;
  background-color: #fff;
  cursor: pointer;
  &:hover {
    color: #62c36c;
  }
}
.login-content {
  padding-top: 20px;
}
.error {
  height: 70px;
}
.form-content-f {
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  span {
    font-size: 18px;
    padding: 0 20px;
    border-right: 1px solid #e8e8e8;
  }
  input {
    font-size: 18px;
    border: none;
    margin-left: 10px;
    width: 320px;
  }
}

.error-f {
  display: block;
  color: #fc0d1c;
  line-height: 25px;
}
.form-content-s {
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  input {
    font-size: 18px;
    border: none;
    margin-left: 10px;
    width: 320px;
  }
}
.register-content {
  padding-top: 20px;
}
.form-content-t {
  float: left;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  width: 280px;
  input {
    font-size: 18px;
    border: none;
    margin-left: 10px;
    width: 250px;
  }
}
.test {
  float: right;
  .test-btn {
    display: inline-block;
    text-align: center;
    line-height: 44px;
    width: 140px;
    border: 1px solid #62c36c;
    color: #62c36c;
    background-color: #fff;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
  }
}
.test-box {
  height: 44px;
}
.form-bbtn {
  .bbtn {
    display: block;
    text-align: center;
    line-height: 44px;
    cursor: pointer;
    width: 100%;
    border: none;
    background-color: #62c36c;
    font-size: 18px;
    color: #fff;
    border-radius: 4px;
    &:active {
      background-color: #ccc;
    }
  }
}
// .space{
//     height: 100px;
// }
</style>