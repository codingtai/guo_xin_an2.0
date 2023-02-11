<template>
 <div class="top">
  <div class="header-nav">
      <div class="header">
      <div class="w">
        <div class="logo">
          <h1>
            <router-link to="/">新生态</router-link>
          </h1>
        </div>
        <div class="left">
          <ul>
            <li>
              <a href="###"
                >详情分类<i class="iconfont icon-xiangxiajiantou"></i
              ></a>
            </li>
            <li>
              <a href="###">客户端</a>
            </li>
          </ul>
        </div>
        <div class="search">
          <input class="input" type="text" placeholder="搜索" />
          <button class="btn">
            <i class="iconfont icon-sousuo"></i>
          </button>
        </div>
        <div class="right">
          <ul>
            <li>
              <router-link to="/create">
                <i class="iconfont icon-shangchuan1"></i>
                <span>上传投稿</span>
              </router-link>
            </li>
            <li>
              <router-link to="/">
                <i class="iconfont icon-chuangzuozhezhongxin"></i>
                <span>创作中心</span>
              </router-link>
            </li>
            <li>
              <router-link to="/">
                <i class="iconfont icon-lishi"></i>
                <span>历史</span>
              </router-link>
            </li>
            <li>
              <router-link to="/">
                <i class="iconfont icon-xiaoxitongzhi"></i>
                <span>消息</span>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="image" v-if="loginStatus">
          <router-link to="/personalcenter" >
            <img :src="baseUrl+userInfo[0].fields.header_img" alt="" />
          </router-link>
        </div>
        <div class="image" v-else>
          <router-link to="/personalcenter" >
            <img src="@/assets/images/cat.png" alt="" />
          </router-link>
        </div>
        
      </div>
    </div>
  </div>
 </div>
</template>

<script>
import { useUserStore } from '@/store/pinia/user';
import { storeToRefs } from 'pinia';

export default {
  name:'HeaderNav',
  setup(){
    const userStore = useUserStore()
    const {userInfo,loginStatus} = storeToRefs(userStore)
    const baseUrl = "http://localhost:3300/web/media/";
    return {
      userInfo,
      loginStatus,
      baseUrl
    }
  }
};
</script>

<style lang="less" scoped>
.top{
  height: 60px;
}
.header-nav {
  height: 60px;
  background-color: #f5f5f5;
  padding-bottom: 10px;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
}
.header {
  background-color: #fff;
  overflow: hidden;
  height: 60px;
}
.logo {
  float: left;
  line-height: 60px;
  text-align: center;
  a {
    color: #62c36c;
  }
}
.left {
  float: left;
  line-height: 60px;
  text-align: center;
  overflow: hidden;
  ul {
    li {
      float: left;
      margin: 0 30px;
    }
  }
}
.search {
  float: left;
  line-height: 60px;
  text-align: center;
  width: 400px;
  .input {
    padding-left: 10px;
    border-radius: 5px 0 0 5px;
    height: 30px;
    width: 280px;
    border: none;
    background-color: #f5f5f5;
    margin-right: 2px;
  }
  .btn {
    height: 30px;
    width: 60px;
    border: none;
    border-radius: 0 5px 5px 0;
    background-color: #62c36c;
  }
  .iconfont {
    color: #fff;
    
    // font-size: 20px;
  }
}
.right {
  display: block;
  float: right;
 
  ul {
    li {
        a{
            &:hover{
            color: #62c36c;
            }
        }
       text-align: center;
        float: left;
        margin: 10px 20px;
        span{
            display: block;
            
        }
        
    }
  }
}
.image {
  float: right;
  margin-top: 12px;
  a {
    img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: #ccc;
      border: 1px solid #f4f4f4;
    }
  }
}
</style>