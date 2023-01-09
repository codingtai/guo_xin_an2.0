<template>
  <div>
    <div class="upload">
      <div class="title">
        <span>视频投稿</span>
      </div>
      <div class="content">
        <div class="data">
          <div class="center">
            <div>
              <i class="iconfont icon-shangchuan"></i>
            </div>
            <div>
              <span>拖拽至此也可上传</span>
            </div>
            <div class="video">
              <span>上传视频</span>
            </div>
          </div>
        </div>
        <div class="footer">
            <span>上传视频，即表示您已同意 新生态使用协议与新生态创作公约，请勿上传涩情，反动等违法视频</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.title {
  height: 64px;
  border-bottom: 1px solid #e7e7e7;
  span {
    display: inline-block;
    line-height: 64px;
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    margin-left: 20px;
  }
}
.content {
  margin: 0 135px;
  .data {
    margin-top: 70px;
    height: 284px;
    border: 2px dashed #ccc;
    color: #999;
    .center{
        margin-top: 50px;
        text-align: center;
        .video{
            width: 200px;
            height: 44px;
            margin: 10px auto;
            background-color: #62c36c;
            border-radius: 4px;
            span{
                line-height: 44px;
                color: #fff;

            }
        }
    }
  }
  .iconfont {
    font-size: 60px;
  }
  .footer{
    text-align: center;
    margin-top: 200px;
    padding-bottom: 50px;
    color: #99a2aa;
  }
}
</style>