<template>
  <div class="card w">
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in list.slice(0, 4)" :key="item.id">
        <h3 text="2xl" justify="center">
          <router-link :to="{path:'detail', query:{id:item.pk}}" tag="a" target="_blank"><img :src="baseUrl + item.fields.photo" alt="" /></router-link>
        </h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "AppCard",
  props: {
    list: {
      type: Array,
      default: [],
    },
  },
  setup() {
    const baseUrl = "http://localhost:3300/web/media/";
    return {
      baseUrl,
    };
  },
};
</script>

<style lang="less" scoped>
.card {
  margin: 30px auto;
  img{
    height: 200px;
    width: 100%;
  }
}
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>