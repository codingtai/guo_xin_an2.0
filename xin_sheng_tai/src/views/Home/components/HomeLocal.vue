<template>
  <div class="home-local w">
    <MyPanel title="当地问题" subTitle="四川省 宜宾市 翠屏区">
      <!-- 使用右侧插槽 -->
      <template #right>
        <app-more />
      </template>
      <div class="local">
        <!-- 第一排 -->
        <div class="row01">
          <!-- 左半部分 -->
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
          <!-- 右半部分 -->
          <div class="right-01">
            <a href="#">
              <img src="@/assets/logo.png" alt="" />
            </a>
            <a href="#">
              <span>长江上游最大的环境问题</span>
            </a>
          </div>
        </div>
        <!-- 第二排 -->
        <div class="row02 w">
          <div class="video">
            <h3><a href="#">视频资源</a></h3>
          </div>
        </div>
        <!-- 第三排 -->
         <div class="real-video">
          <ul>
            <li>
              <a href="">
                <img src="@/assets/logo.png" alt="" />
                <span>宜宾酒厂无酒排放</span>
              </a>
            </li>
            <li>
              <a href="">
                <img src="@/assets/logo.png" alt="" />
                <span>宜宾酒厂无酒排放</span>
              </a>
            </li>
            <li>
              <a href="">
                <img src="@/assets/logo.png" alt="" />
                <span>宜宾酒厂无酒排放</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </MyPanel>
  </div>
</template>

<script>
import MyPanel from "@/components/MyPanel.vue";
import AppMore from "@/components/liarbry/AppMore.vue";

export default {
  components: {
    MyPanel,
    AppMore,
    

  },
};
</script>

<style lang="less" scoped>
.home-local {
  height: 650px;
  overflow: hidden;
}
.local {
  height: 300px;
}
.left-01 {
  background-color: rgb(241, 239, 239);
  float: left;
  height: 240px;
  width: 700px;
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
.right-01 {
  height: 240px;
  width: 300px;
  margin-left: 50px;
  float: left;
  img {
    height: 200px;
    width: 300px;
    .hoverShadow()
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
.row01{
  height: 249px;
}
.row02{
  height: 45px;
  
}
.video{
  float: left;
  margin-top: 10px;
  a{
    &:hover{
      color: @xtxColor;
    }
  }
}
.real-video{
  height: 260px;
  ul{
    li{
      float: left;
      height: 240px;
      width: 300px;
      margin-right: 50px;
      float: left;
      img {
        height: 200px;
        width: 300px;
        .hoverShadow()
      }
      span {
        margin-top: 10px;
        height: 20px;
        display: block;
        text-align: center;
        &:hover{
          color: @xtxColor;
        }
      }
    }
    li:nth-child(3){
      margin-right: 0;
    }
  }
}

</style>