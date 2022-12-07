<template>
    <div class="water">
      <MyPanel title="水污染" subTitle="保护水资源保护人身安全">
        <!-- 使用右侧插槽 -->
        <template #right>
          <app-more/>          
        </template>
        <!-- 第一排 -->
        <div class="row01">
          <div class="right-01">
            <a href="#">
              <img src="@/assets/logo.png" alt="" />
            </a>
            <a href="#">
              <span>长江上游最大的环境问题</span>
            </a>
          </div>
          <div class="right-02">
            <a href="#">
              <img src="@/assets/logo.png" alt="" />
            </a>
            <a href="#">
              <span>长江上游最大的环境问题</span>
            </a>
          </div>
          <div class="right-03">
            <a href="#">
              <img src="@/assets/logo.png" alt="" />
            </a>
            <a href="#">
              <span>长江上游最大的环境问题</span>
            </a>
          </div>
        </div>
        <!-- 第二排 -->
        <div class="row02">
          <div class="left-01">
            <a href="#"><img src="@/assets/logo.png" alt="" /></a>
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
          <div class="left-02">
            <a href="#"><img src="@/assets/logo.png" alt="" /></a>
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
        </div>
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
  .water{
    height: 600px;
  }
  .right-01 {
  height: 240px;
  width: 300px;
  margin-left: 50px;
  float: left;
  overflow: hidden;
  img {
    height: 200px;
    width: 300px;
    .hoverLarge();
  }
  span {
    height: 40px;
    display: block;
    text-align: center;
    &:hover{
      color: @xtxColor;
    }
  }
}
.right-02 {
  height: 240px;
  width: 300px;
  margin-left: 50px;
  float: left;
  overflow: hidden;
  img {
    height: 200px;
    width: 300px;
    .hoverLarge();
  }
  span {
    height: 40px;
    display: block;
    text-align: center;
    &:hover{
      color: @xtxColor;
    }
  }
}
.right-03 {
  height: 240px;
  width: 300px;
  margin-left: 50px;
  float: left;
  overflow: hidden;
  img {
    height: 200px;
    width: 300px;
    .hoverLarge();
  }
  span {
    height: 40px;
    display: block;
    text-align: center;
    &:hover{
      color: @xtxColor;
    }
  }
}
.left-01 {
  background-color: rgb(241, 239, 239);
  float: left;
  height: 240px;
  width: 530px;
  overflow: hidden;
  img {
    float: left;
    height: 240px;
    width: 200px;
    .hoverShadow()
  }
}
.left-02 {
  background-color: rgb(241, 239, 239);
  float: right;
  height: 240px;
  width: 530px;
  overflow: hidden;
  img {
    float: left;
    height: 240px;
    width: 200px;
    .hoverShadow()
  }
}
.news {
  float: left;
  margin: 30px 40px;
  a{
    &:hover{
      color: @xtxColor;
    }
  }
}
.gray {
  margin-top: 90px;
  padding: 0 20px;
  a{
    margin-left: 20px;
  }
}
  </style>