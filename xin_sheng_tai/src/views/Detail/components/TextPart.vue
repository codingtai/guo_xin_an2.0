<template>
  <div class="text-part">
    <div class="part w">
      <div class="title">
        <h1>{{list[0].fields.title}}</h1>
      </div>
      <div class="image">
        <img :src="baseUrl+list[0].fields.photo" alt="" />
      </div>
      <div>
        <div class="wrapper">
        <input id="exp1" class="exp" type="checkbox" />
        <div class="text">
          <label class="btn" for="exp1"></label>
          {{list[0].fields.content}}
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  props:{
    list:{
      type:Array,
      default:[]
    }
  },
  setup(){
    const baseUrl = "http://localhost:3300/web/media/";
    return {baseUrl}
  }
};
</script>

<style lang="less" scoped>
.title {
  text-align: center;
}
.image {
  text-align: center;
  margin-top: 50px;
  img {
    height: 500px;
    width: 800px;
  }
}

.wrapper {
  margin: 50px 20px 20px 10px;
  display: flex;
  //   margin: 50px auto;
  overflow: hidden;
  //   border-radius: 8px;
  //   padding: 15px;
  //   box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
}
.text {
  line-height: 38px;
  font-size: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: justify;
  /* display: flex; */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  position: relative;
  z-index: 9;
}
.text::before {
  content: "";
  height: calc(100% - 24px);
  float: right;
}
.text::after {
  content: "";
  width: 999vw;
  height: 999vw;
  position: absolute;
//   box-shadow: inset calc(100px - 999vw) calc(30px - 999vw) 0 0 #fff;
  margin-left: -100px;
}
.btn {
  float: right;
  clear: both;
  margin-left: 10px;
  font-size: 16px;
  padding: 0 8px;
  background: #fff;
  line-height: 24px;
//   border-radius: 4px;
  color: #62c36c;
  cursor: pointer;
  /* margin-top: -30px; */
}
.btn::before {
  content: "展开";
}
.exp {
  display: none;
}
.exp:checked + .text {
  -webkit-line-clamp: 999;
}
.exp:checked + .text::after {
  visibility: hidden;
}
.exp:checked + .text .btn::before {
  content: "收起";
}
</style>