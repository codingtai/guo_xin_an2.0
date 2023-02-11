<template>
    <div class="banner">
        <el-carousel height="500px" width="500px">
      <el-carousel-item v-for="item in list" :key="item.id">
        <img :src="baseUrl+item.fields.banner_photo" alt="">
      </el-carousel-item>
    </el-carousel>
    </div>
</template>

<script>
import { getBanner } from '@/api/LayOut';
import { ref } from 'vue';
    export default {
        setup(props){
          const list=ref([]);
          const baseUrl='http://localhost:3300/web/media/'
          getBanner().then(res=>{
            console.log(res);
            if((res.status)){
              list.value=res.banner;
            }
          }).catch(err=>{
            console.log(err);
          })

          return {list,baseUrl}
        }
    }
</script>

<style lang="less" scoped>
.banner{
    margin-top: 25px;
    width: 750px;
    img{
      width: 750px;
      height: 500px;
    }
}
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
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