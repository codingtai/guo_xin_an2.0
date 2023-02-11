<template>
  <div class="user-info">
    <div class="user w">
      <div class="header">
        <img :src="baseUrl+list[0].fields.header_img" alt="" />
        <!-- <a href="###">
          <img :src="baseUrl+list[0].fields.header_img" alt="" />
        </a> -->
      </div>
      <div class="name">
        <span> {{list[0].fields.username}} </span>
      </div>
      <div class="sign">
        <p>{{pim[0].fields.resume}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: [],
    },
    pim:{
        type:Array,
        default:[]
    }
  },
  setup() {
    const baseUrl = "http://localhost:3300/web/media/";
    return { baseUrl };
  },
};
</script>

<style lang="less" scoped>
.user {
  margin-top: 20px;
  height: 80px;
}
.header {
  float: left;
  img {
    border-radius: 50%;
    overflow: hidden;
    height: 50px;
    width: 50px;
    border: 1px solid rgba(232, 232, 232, 0.5);
  }
}
.name {
  margin-left: 60px;
  span {
    display: block;
    font-size: 20px;
  }
}
.sign {
  margin-left: 60px;
  margin-top: 7px;
  p {
    color: #9499a0;
  }
}
</style>