<template>
    <div class="center">
        <!-- 顶部 -->
        <img class="bgc" src="@/assets/images/download.jpg" alt=""> 
        <div class="content w">
            <div class="header">
                <img src="@/assets/images/cat.png" alt="">
            </div>
        <div class="right">
            <div class="name">
                <h1>
                    环境保护者001
                </h1>
            </div>
            <div class="focus">
                <h1>
                    关注数 8万
                </h1>
            </div>
            <div class="fans">
                <h1>
                    粉丝数 8万
                </h1>
            </div>
            <div class="local">
                <h1>
                    四川省 宜宾市 翠屏区
                </h1>
            </div>
        </div>
        </div>
        <!-- 底部分类 -->
        <div class="nav w">
            <pc-my-header-nav/>
        </div>
    </div>
    
</template>

<script>
import PcMyHeaderNav from './PcMyHeaderNav.vue'
    export default {
  components: { PcMyHeaderNav },
        
    }
</script>

<style lang="less" scoped>
.center{
    height: 377px;
}
.bgc{
    position: absolute;
    width: 100%;
    height: 320px;
    background-size: cover;   
}
.content{
    position: relative;
    overflow: hidden;
    height: 120px;
    top: 180px;
    
}
.header{
    float: left;
    img{       
        border-radius: 55px;
        overflow: hidden;
        height: 110px;
        width: 110px;
        border: 1px solid rgba(232,232,232,.5);
    }
}
.right{
    float: left;
    overflow: hidden;
    margin-left: 40px;
    margin-top: 20px;
}
.name{
    float: left;
    font-size: 12px;
    color: #FFFFFF;
}
.focus{
    float: left;
    font-size: 8px;
    color: #FFFFFF;
    margin-left: 20px;
    margin-top: 5px;
}
.fans{
    float: left;
    font-size: 8px;
    color: #FFFFFF;
    margin-left: 15px;
    margin-top: 5px;
}
.local{
    font-size: 7px;
    color: #ccc;
    margin-top: 50px;
}
.nav{
    position: relative;
    top: 100px;
    height: 27px;
}
</style>