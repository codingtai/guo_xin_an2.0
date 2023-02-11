<template>
  <div>
    <div class="row02 w">
      <div class="video">
        <h3>视频资源</h3>
      </div>
    </div>
    <div class="real-video">
      <ul>
        <li v-for="item in list.slice(0,3)" :key="item.id">
          <router-link :to="{ path: 'detail' , query:{id:item.pk}}" tag="a" target="_blank"
            ><img :src="baseUrl + item.fields.photo"
          /></router-link>
          <router-link :to="{ path: 'detail' , query:{id:item.pk}}" tag="a" target="_blank"
            ><span>{{ item.fields.title }}</span></router-link
          >
          <!-- <a href="">
            <img src="@/assets/logo.png" alt="" />
            <span>宜宾酒厂无酒排放</span>
          </a> -->
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppVideo",
   props:{
    list:{
      type:Array,
      default:[]
    }
   },
  setup(props, context) {
    const baseUrl = "http://localhost:3300/web/media/";
    return { baseUrl };
  },
};
</script>

<style lang="less" scoped>
.real-video {
  height: 253px;
  ul {
    li {
      float: left;
      height: 240px;
      width: 300px;
      margin: 20px 25px;
      float: left;
      img {
        height: 200px;
        width: 300px;
        .hoverShadow();
      }
      span {
        padding: 0 20px;
        margin-top: 10px;
        height: 20px;
        display: block;
        text-align: center;
        &:hover {
          color: @xtxColor;
        }
      }
    }
    li:nth-child(3) {
      margin-right: 0;
    }
  }
}
.row02 {
  height: 45px;
}
.video {
  margin-top: 10px;
  a {
    &:hover {
      color: @xtxColor;
    }
  }
}
</style>