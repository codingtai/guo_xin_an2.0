<template>
    <div class="sea">
      <MyPanel title="海洋污染" subTitle="保护海洋保护世界">
        <!-- 使用右侧插槽 -->
        <template #right>
          <app-more/>
        </template>
        <div class="severe">
        <!-- 第一排 -->
        <div class="rm_wt01 w">
        <!-- <ul class="all"> -->
          <!-- 左侧 -->
          <!-- <li> -->
            <div class="col_01_left">
              <div class="news">
                <h3>
                  <a href="">探索宜宾新城环境污染问题</a>
                </h3>
              </div>
              <p class="gray">
                <a href="">
                  一部中国陶瓷史，半部在浙江；一部浙江陶瓷史，半部在龙泉。龙泉青瓷传统烧制技艺始于三国两晋，兴于宋元，在南宋时期达到鼎盛，是与宋词、宋画等并列的“文化符号”，也是联合国教科文组织《人类非物质文化遗产代表作名录》中首个入选的陶瓷类项目。
                </a>
              </p>
            </div>
          <!-- </li> -->
          <!-- 右侧 -->
          <!-- <li> -->
            <div class="col_01_right">
              <ul class="list">
                <li>
                  <a href="">无影灯：让中医代代薪火相传</a>
                </li>
                <li>
                  <a href="">无影灯：让中医代代薪火相传</a>
                </li>
                <li>
                  <a href="">无影灯：让中医代代薪火相传</a>
                </li>
                <li>
                  <a href="">无影灯：让中医代代薪火相传</a>
                </li>
              </ul>
            </div>
          <!-- </li> -->
        <!-- </ul> -->
      </div>
      <!-- 第二排 -->
      <div class="rm_wt02 w">
          <!-- 左侧 -->        
            <div class="col_02_left">
              <ul class="list2">
                <li>
                  <a href="">保护环境人人有责</a>
                </li>
                <li>
                  <a href="">保护环境人人有责</a>
                </li>
                <li>
                  <a href="">保护环境人人有责</a>
                </li>
                <li>
                  <a href="">保护环境人人有责</a>
                </li>
              </ul>
            </div>
          <!-- 右侧 -->            
            <div class="col_02_right">
              <div class="news2">
                <h3>
                  <a href="">探索宜宾新城环境污染问题</a>
                </h3>
              </div>
              <p class="gray2">
                <a href="">
                  一部中国陶瓷史，半部在浙江；一部浙江陶瓷史，半部在龙泉。龙泉青瓷传统烧制技艺始于三国两晋，兴于宋元，在南宋时期达到鼎盛，是与宋词、宋画等并列的“文化符号”，也是联合国教科文组织《人类非物质文化遗产代表作名录》中首个入选的陶瓷类项目。
                </a>
              </p>
            </div>
      </div>
      </div> 
      <app-video/>
      </MyPanel>
    </div>
  </template>
  
  <script>
  import MyPanel from "@/components/MyPanel.vue";
  import AppMore from '@/components/liarbry/AppMore.vue';

  
  export default {
    components: { 
      MyPanel,
      AppMore

   },
  };
  </script>
  
  <style lang="less" scoped>
  .sea{
    overflow: hidden;
    height: 800px;
    background-color: #fff;
  }
  .severe{ 
  background-color: #fff;
  height: 420px;
}
.rm_wt01 {
  padding-top: 2px;
}
.rm_wt02 {
  padding-top: 2px;
}
.all {
  display: flex;
}
.col_01_left {
  background-color: rgb(241, 239, 239);
  height: 180px;
  width: 800px;
  float: left;
}
.col_02_right {
  background-color: rgb(241, 239, 239);
  height: 180px;
  width: 800px;
  float: left;
}
.news {
  padding: 20px;
  a{
    &:hover {
    color: @xtxColor;
  }
  }
}
.news2 {
  padding: 20px;
  a{
    &:hover {
    color: @xtxColor;
  }
  }
}
.gray {
  padding: 0 20px;
  
}
.gray2 {
  padding: 0 20px;
  
}
.col_01_right {
  width: 250px;
  height: 200px;
  padding-left: 30px;
  float: left;

}
.col_02_left {
  width: 250px;
  height: 200px;
  padding-right: 30px;
  float: left;
}
.list {
  height: 200px;
  background-color: #fff;
  li {
    padding: 13px 20px;
    font-size: 15px;
    border-bottom: 1px solid rgb(236, 233, 233);
    a{
        &:hover {
      color: @xtxColor;
    }
    }
  }
  li:nth-child(4){
    border-bottom: 0;
  }
}
.list2 {
  height: 200px;
  background-color: #fff;
  li {
    padding: 13px 20px;
    font-size: 15px;
    border-bottom: 1px solid rgb(236, 233, 233);
    a{
        &:hover {
      color: @xtxColor;
    }
    }
  }
  li:nth-child(4){
    border-bottom: 0;
  }
}
  </style>