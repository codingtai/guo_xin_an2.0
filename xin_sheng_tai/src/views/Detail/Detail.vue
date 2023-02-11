<template>
  <div>
    <!-- 头部导航 -->
    <header-nav />
    <!-- 用户信息 -->
    <user-info :list="userData" :pim="personalData"/>
    <!-- 正文内容 -->
    <text-part :list="contentData"/>
    <!-- 解决方案 -->
    <solution />
    <!-- 评论区 -->
    <comments />
  </div>
</template>

<script>
import Comments from "./components/Comments.vue";
import Solution from "./components/Solution.vue";
import TextPart from "./components/TextPart.vue";
import UserInfo from "./components/UserInfo.vue";
import { useRoute } from "vue-router";
import { getDetail } from "@/api/Detail";
import { reactive, ref } from "vue";
export default {
  components: { UserInfo, TextPart, Solution, Comments },

  setup(props) {
    const route = useRoute();
    const userData = ref([]);
    const personalData = ref([]);
    const contentData = ref([]);
    const solutionData = ref([]);
    const commentData = ref([]);
    const DetailId = reactive({
        
        data:{
            id:route.query.id
        }
    })
   
    // console.log(route.query.id);
    getDetail(DetailId.data)
      .then((res) => {
        console.log(res)
        if(res.status){
            userData.value=res.user;
            personalData.value=res.personalData;
            contentData.value=res.detail;
        }
      })
      .catch((err) => {
        console.log(err);
      });

    return { userData, contentData, solutionData, commentData,personalData };
  },
};
</script>

<style lang="less" scoped>
</style>