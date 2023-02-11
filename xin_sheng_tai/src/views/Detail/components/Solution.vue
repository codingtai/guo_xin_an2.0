<template>
  <div class="solution w">
    <div class="solu">
      <div class="title">
        <h1>解决方案</h1>
      </div>
      <div>
        <div class="sub">
          <div class="image">
            <a href="###">
              <img src="@/assets/images/cat.png" alt="" />
            </a>
          </div>
          <span class="name"> 环境指挥部 </span>
          <p class="discuss">
            暂无消息
            <!-- 今天还在被父母催着在家里的县城找工作[保卫萝卜_哭哭]我知道现在找工作不容易，但是我总觉得出去还是有很多选择，真的不想留在家里，从小父母就一直让我舍弃远方的选择待在家里，不管是上高中还是上大学还是找工作[保卫萝卜_哭哭]真的好烦，聊不了几句就感觉很窒息。明明很多事情父母也没有经历过，但他们就是很笃定他们说的一定是对的[无语] -->
          </p>
          <span class="time">2023-02-23</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.sub{
    margin-top: 30px;
    margin-bottom: 30px;
}
.image {
  a {
    img {
      float: left;
      border-radius: 50%;
      overflow: hidden;
      height: 40px;
      width: 40px;
      border: 1px solid rgba(232, 232, 232, 0.5);
    }
  }
}
.name{
    display: block;
    margin-left: 60px;
    margin-top: 20px;
    padding-top: 8px;
    color: #61666D;
}
.discuss{
    width: 900px;
    margin-top: 20px;
    margin-left: 50px;
    line-height: 25px;
    font-size: 18px;
}
.time{
    display: block;
    color: #9499A0;;
    margin-left: 50px;
    margin-top: 10px;
}
</style>