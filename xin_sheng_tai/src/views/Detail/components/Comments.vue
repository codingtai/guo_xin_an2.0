<template>
  <div class="comments">
    <div class="w">
      <div class="all">
        <div class="navtop">
          <div class="top">
            <h1>评论区</h1>
          </div>
          <div class="commit">
            <img src="@/assets/images/qinxi.jpg" alt="" />
            <div class="send">
              <div class="input">
                <input type="text" placeholder="发表一条友善的评论" />
              </div>
              <button class="btn">发布</button>
            </div>
          </div>
        </div>
        <div class="com">
          <h3>
            评论区待更新
          </h3>
          <div class="space">

          </div>
          <!-- <div class="com01">
            <div>
              <div class="image">
                <a href="###">
                  <img src="@/assets/images/cat.png" alt="" />
                </a>
              </div>
              <span class="name"> 京海高启强 </span>
              <p class=" discuss">
                今天还在被父母催着在家里的县城找工作[保卫萝卜_哭哭]我知道现在找工作不容易，但是我总觉得出去还是有很多选择，真的不想留在家里，从小父母就一直让我舍弃远方的选择待在家里，不管是上高中还是上大学还是找工作[保卫萝卜_哭哭]真的好烦，聊不了几句就感觉很窒息。明明很多事情父母也没有经历过，但他们就是很笃定他们说的一定是对的[无语]
              </p>
              <span class="time">2023-02-23</span>
            </div>
            <div class="sub-com">
              <div class="sub-image">
                <a href="###">
                  <img src="@/assets/images/cat.png" alt="" />
                </a>
              </div>
              <span class="sub-name"> 京海高启兰 </span>
              <p class="sub-discuss">好吃</p>
              <span class="time">2023-02-23</span>
            </div>
            <div class="sub-com">
              <div class="sub-image">
                <a href="###">
                  <img src="@/assets/images/cat.png" alt="" />
                </a>
              </div>
              <span class="sub-name"> 京海高启兰 </span>
              <p class="sub-discuss">好吃</p>
              <span class="time">2023-02-23</span>
            </div>
          </div> -->
          <!-- <div class="com01">
            <div>
              <div class="image">
                <a href="###">
                  <img src="@/assets/images/cat.png" alt="" />
                </a>
              </div>
              <span class="name"> 京海高启强 </span>
              <p class=" discuss">
                今天还在被父母催着在家里的县城找工作[保卫萝卜_哭哭]我知道现在找工作不容易，但是我总觉得出去还是有很多选择，真的不想留在家里，从小父母就一直让我舍弃远方的选择待在家里，不管是上高中还是上大学还是找工作[保卫萝卜_哭哭]真的好烦，聊不了几句就感觉很窒息。明明很多事情父母也没有经历过，但他们就是很笃定他们说的一定是对的[无语]
              </p>
              <span class="time">2023-02-23</span>
            </div>
            <div class="sub-com">
              <div class="sub-image">
                <a href="###">
                  <img src="@/assets/images/cat.png" alt="" />
                </a>
              </div>
              <span class="sub-name"> 京海高启兰 </span>
              <p class="sub-discuss">好吃</p>
              <span class="time">2023-02-23</span>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.space{
  height: 200px;
}
.commit {
  margin-top: 20px;
  height: 70px;
  img {
    float: left;
    border-radius: 50%;
    overflow: hidden;
    height: 40px;
    width: 40px;
    border: 1px solid rgba(232, 232, 232, 0.5);
  }
}
.com01{
    border-bottom: 1px solid #61666D;
    width: 800px;
    padding-bottom: 30px;
}
.send {
  margin-left: 60px;
  height: 50px;
  // padding-top: 10px;
}
.input {
  float: left;
  input {
    height: 50px;
    width: 500px;
    padding-left: 10px;
    background-color: #f1f2f3;
    border: none;
    border-radius: 5px;
  }
}
.btn {
  height: 50px;
  width: 100px;
  margin-left: 10px;
  border: none;
  background-color: #62c36c;
  color: #fff;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
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
    width: 700px;
    margin-top: 20px;
    margin-left: 50px;
    line-height: 23px;
}
.time{
    display: block;
    color: #9499A0;;
    margin-left: 50px;
    margin-top: 10px;
}
.sub-image{
    img {
      float: left;
      border-radius: 50%;
      overflow: hidden;
      height: 32px;
      width: 32px;
      border: 1px solid rgba(232, 232, 232, 0.5);
    }
}
.sub-com{
    margin-left: 50px;
    margin-top: 20px;
}
.sub-name{
    display: inline-block;
    margin-top: 5px;
    margin-left: 20px;
    color: #61666D;
}
.sub-discuss{
    display: inline-block;
    margin-left: 20px;
}
</style>