<template>
    <div class="common-layout w">
      <el-container>
        <el-aside width="170px">
            <ul>
                <li><router-link to="/rank/recommend">推荐</router-link></li>
                <li><router-link to="/rank/hot">热点榜</router-link></li>
                <li><router-link to="/rank/good">好评榜</router-link></li>
            </ul>
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
      </el-container>
    </div>
  </template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
.el-container{
    margin-top: 40px;
}
.el-aside{
    
    li{
        height: 41px;
        color: #999;
        border-bottom: 1px dotted #E0E0E0;
        a{
            display: block;
            line-height: 41px;
            margin-left: 20px;
            &:hover{
                color: @xtxColor;
            }
        }
    }
}
</style>