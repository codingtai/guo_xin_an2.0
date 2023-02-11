<template>
  <div class="content w">
    <div class="contenter w" v-for="item in list" :key="item.id">
      <div class="image">
        <router-link :to="{path:'detail', query:{id:item.pk}}" tag="a" target="_blank"><img :src="baseUrl+item.fields.photo" alt=""></router-link>
      </div>
      <div class="title">
        <h3>
          <router-link
            class="ellipsis"
            :to="{ path: 'detail', query: { id: item.pk } }"
            tag="a"
            target="_blank"
            >{{ item.fields.title }}</router-link
          >
        </h3>
      </div>
      <div class="dis">
        <p>
          <router-link class="ellipsis-6" :to="{path:'detail', query:{id:item.pk}} " tag="a" target="_blank">{{item.fields.content}}</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppContent",
  props: {
    list: {
      type: Array,
      default: [],
    },
  },
  setup() {
    const baseUrl = "http://localhost:3300/web/media/";
    return { baseUrl };
  },
};
</script>

<style lang="less" scoped>
.content {
  overflow: hidden;
  padding: 20px 50px;
}
.contenter {
  padding: 20px 20px;
  margin: 10px 10px;
  border: 1px solid #cccc;
  float: left;
  width: 300px;
  overflow: hidden;
}
.image {
  img {
    float: left;
    height: 200px;
    width: 120px;
  }
}
.title {
  margin: 0 20px 0 140px;
  a {
    display: block;
  }
}
.dis {
  float: right;
  overflow: hidden;
  margin-top: 20px;
  width: 180px;
  line-height: 20px;
  a {
    margin-left: 20px;
    float: left;
    &:hover {
      color: @xtxColor;
    }
  }
}
</style>