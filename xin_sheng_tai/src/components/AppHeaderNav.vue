<template>
  <div class="app-header-nav">
    <ul class="header w">
      <li>
        <router-link to="/">首页</router-link>
        <!-- 弹出层 -->
        <div class="layer w">
          <ul>
            <li><a href="###"> 京 </a></li>
            <li><a href="###"> 津 </a></li>
            <li><a href="###"> 蒙 </a></li>
            <li><a href="###"> 冀 </a></li>
            <li><a href="###"> 鲁 </a></li>
            <li><a href="###"> 川 </a></li>
          </ul>
        </div>
      </li>
      <li><a href="###">热榜</a></li>
      <li><a href="###">地方</a></li>
      <li><a href="###">陆地</a></li>
      <li><a href="###">海洋</a></li>
      <li><a href="###">空气</a></li>
      <li><a href="###">水</a></li>
      <li><a href="###">放射</a></li>
      <li>
        <a href="###"><i class="iconfont icon-gengduo"></i></a>
      </li>
      <li>
        <a href="###"><i class="iconfont icon-sousuo"></i></a>
      </li>
      <li>
        <a href="###"><i class="iconfont icon-fabu"></i></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
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
    height: 50px;
    float: left;
    padding: 10px 32px;
    font-size: 20px;
    font-weight: bold;
    overflow: hidden;
    a {
      color: rgba(244, 244, 244, 0.971);
      padding-bottom: 0;
      margin-bottom: 0;
      &:hover{
        color: @xtxColor;
      }
      i {
        font-size: 25px;
      }    
    }
    &:hover {
        color: @xtxColor;
        .layer{
            opacity: 1;
            height: 50px;
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