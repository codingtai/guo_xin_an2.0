<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <div class="header">
          <div class="title-left">
            <router-link to="/create/crhome">新生态</router-link>
          </div>
          <div class="title-right">
            <router-link to="/create/crhome">创作中心</router-link>
          </div>
          <div class="home">
            <router-link tag="a" target="_blank" to="/">返回主站</router-link>
          </div>
          <div class="image">
            <router-link tag="a" targrt="_blank" to="/personalcenter"
              ><img src="@/assets/images/cat.png" alt=""
            /></router-link>
          </div>
          <div class="icon">
            <a href="###">
              <i class="iconfont icon-youxiang"></i>
            </a>
          </div>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <div class="side">
            <ul>
              <li class="first">
                <router-link to="/create/upload">
                  <i class="iconfont icon-shangchuan"></i>
                  上传投稿</router-link
                >
              </li>
              <!-- <li>
                <router-link to="/create/crhome"
                  ><i class="iconfont icon-shouye"></i>首页</router-link
                >
              </li>
              <li>
                <router-link to="/create/content"
                  ><i class="iconfont icon-houtaiguanli-neirongguanli"></i
                  >内容管理</router-link
                >
              </li>
              <li>
                <router-link to="/create/data"
                  ><i class="iconfont icon-shujuzhongxin"></i
                  >数据中心</router-link
                >
              </li> -->
            </ul>
          </div>
          <el-menu
            :router="true"
          >
            <el-menu-item index="/create/crhome">
              <el-icon><House /></el-icon>
              <span>首页</span>
            </el-menu-item>
            <el-sub-menu>
              <template #title>
                <el-icon><Document /></el-icon>
                <span>内容管理</span>
              </template>
              <el-menu-item-group >
                <el-menu-item index="/create/content">我的作品</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
            <el-menu-item index="/create/data">
              <el-icon><DataLine /></el-icon>
              <span>数据中心</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <div class="main w">
            <router-view />
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.el-main {
  padding: 0 0 0 10px;
  background-color: #f5f5f5;
  .main {
    // height: 1000px;
    background-color: #fff;
  }
}

.el-header {
  height: 70px;
  background-color: #f5f5f5;
  padding: 0 0 10px 0;
  .header {
    background-color: #fff;
    height: 60px;
    overflow: hidden;
  }
  .title-left {
    float: left;
    height: 60px;
    background: #fff;
    a {
      font-size: 35px;
      font-weight: 700;
      display: block;
      padding-top: 5px;
      padding-left: 30px;
      color: #62c36c;
    }
  }
  .title-right {
    float: left;
    margin-top: 12px;
    margin-left: 6px;
    a {
      font-size: 25px;
      color: #62c36c;
    }
  }
  .home {
    float: left;
    margin-top: 17px;
    margin-left: 50px;
    font-size: 18px;
    a {
      &:hover {
        color: @xtxColor;
      }
    }
  }
  .icon {
    float: right;
    margin-top: 15px;
    margin-right: 100px;
    .iconfont {
      font-size: 30px;
    }
  }
  .image {
    float: left;
    margin-top: 15px;
    margin-left: 570px;
    img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: #ccc;
      border: 1px solid #f4f4f4;
    }
  }
}
.side {
  li {
    line-height: 40px;
    text-align: center;
  }
  .first {
    display: block;
    width: 136px;
    text-align: center;
    line-height: 40px;

    background-color: #62c36c;
    margin: 20px auto;
    a {
      font-size: 16px;
      color: #fff;
    }
    .iconfont {
      display: inline-block;
      font-size: 23px;
      height: 30px;
    }
  }
}
</style>