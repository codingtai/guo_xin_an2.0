<template>
    <div class="banner">
        <el-carousel height="500px" width="500px">
      <el-carousel-item v-for="item in list" :key="item.id">
        <img :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
    </div>
</template>

<script>
import { getBanner } from '@/api';
import { ref } from 'vue';
    export default {
        setup(props){
          const list=ref([]);
          getBanner().then(res=>{
            console.log(res);
            if((res.msg='操作成功')){
              list.value=res.result;
            }
          }).catch(err=>{
            console.log(err);
          })

          return {list}
        }
    }
</script>

<style lang="less" scoped>
.banner{
    margin-top: 5px;
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