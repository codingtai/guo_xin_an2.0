<template>
  <div class="app-header-nav">
    <ul class="header w">
      <li class="item">
            <router-link class="link" to="/">首页</router-link>
        </li>
      <li v-for="item in list" :key="item.id">
        <router-link :to="item.router">{{item.name}}</router-link>
        <!-- 弹出层 -->
        <!-- <div class="layer w">
          <ul>
            <li v-for="ele in list.CateGroupList" :key="ele.id">
              <router-link :to="('/category/'+ele.id)">{{ele.name}}</router-link>   
            </li>
            
          </ul>
        </div> -->
      </li>
      <li>
        <a href="###"><i class="iconfont icon-gengduo"></i></a>
      </li>
      <li>
        <router-link tag="a" target="_blank" to="/search"><i class="iconfont icon-sousuo"></i></router-link>
      </li>
      <li>
        <router-link tag="a" target="_blank" to="/create"><i class="iconfont icon-fabu"></i></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { getCategoryList } from '@/api';
import { ref } from 'vue';
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';
export default {
  setup(props){
    const list=ref([]);
    getCategoryList().then(res=>{
      console.log(res);
      if(res.code==='200'){
        list.value=res.data[0].cateList;
      }
    }).catch(err=>{
      console.log(err);
    })
    return {list}
  }
  // setup(props){
  //   const store = useStore();
  //   const list = computed(()=>{
  //     return store.state.category.cateList
  //   });

  //   return {list};
  // }

};
</script>

<style lang="less" scoped>
.app-header-nav{
    background-color: #62c36c;
}
.header {
  height: 50px;
  position: relative;
  clear: both;
  z-index: 999;
  li { 
    height: 30px;
    float: left;
    margin: 10px 32px;
    font-size: 20px;
    font-weight: bold;
    overflow: hidden;
    a {
      margin-top: 12px;
      color: rgba(244, 244, 244, 0.971);
      &:hover {
        color: @xtxColor;
        .layer{
            opacity: 1;
            height: 50px;
            ul{
              li{
                margin-left: 20px;
              }
            }
        }    
    }
      &:hover{
        color: @xtxColor;
      }
      i {
        font-size: 25px;
      }
    
      }
      
  }

  .layer {
    float: left;
    position: absolute;
    left: 0;
    top: 50px;
    overflow: hidden;
    opacity: 0;
    background-color: rgb(243, 243, 243);
    width: 1100px;
    height: 0px;
    transition: all .5s;
    ul {
        display: flex;
      li {
        font-size: 20px;
        padding: 0px 0px;
        a { 
          padding-bottom: 0;         
          color: rgb(87, 85, 85);          
          &:hover {
            color: @xtxColor;
          }
        }
      }
    }
  }
}
</style>