<template>
  <div class="land">
    <MyPanel title="陆地污染" subTitle="保护陆地保护家园">
      <!-- 使用右侧插槽 -->
      <template #right>
        <app-more />
      </template>
      <div class="land-bottom">
        <!-- 左半部分 -->
        <div class="left">
          <span v-for="item in landList.slice(0, 1)" :key="item.id">
            <router-link :to="{ path: 'detail', query:{id:item.pk} }" tag="a" target="_blank"><img :src="baseUrl+item.fields.photo" ></router-link>
          </span>
          <h4 v-for="item in landList.slice(0, 1)" :key="item.id">
            <router-link :to="{ path: 'detail', query:{id:item.pk} }" tag="a" target="_blank">{{
              item.fields.title
            }}</router-link>
          </h4>
          <p v-for="item in landList.slice(0, 1)" :key="item.id">
            {{item.fields.content}}
          </p>
        </div>
        <!-- 中部 -->
        <div class="middle">
          <ul>
            <li v-for="item in landList.slice(2, 3)" :key="item.id">
              <router-link :to="{ path: 'detail', query:{id:item.pk} }" tag="a" target="_blank">{{
              item.fields.title
            }}</router-link>
            </li>
            <li class=" ellipsis-3" v-for="item in landList.slice(3, 7)" :key="item.id" >
              <router-link :to="{ path: 'detail', query:{id:item.pk} }" tag="a" target="_blank">{{
              item.fields.content
            }}</router-link>   
            </li>
          </ul>
        </div>
        <!-- 右半部分 -->
        <div class="right">
          <span v-for="item in landList.slice(1, 2)" :key="item.id">
            <router-link :to="{ path: 'detail' , query:{id:item.pk}}" tag="a" target="_blank"><img :src="baseUrl+item.fields.photo" ></router-link>
          </span>
          <h4 v-for="item in landList.slice(1, 2)" :key="item.id">
            <router-link :to="{ path: 'detail', query:{id:item.pk} }" tag="a" target="_blank">{{
              item.fields.title
            }}</router-link>
          </h4>
          <p v-for="item in landList.slice(1, 2)" :key="item.id">
            {{item.fields.content}}
          </p>
        </div>
      </div>
      <app-video :list="landList"/>
    </MyPanel>
  </div>
</template>
  
  <script>
import MyPanel from "@/components/MyPanel.vue";
import AppMore from "@/components/liarbry/AppMore.vue";
import { getLandList } from "@/api/LayOut";
import { ref } from '@vue/reactivity';
import { useLandStore } from "@/store/pinia/land";
import { storeToRefs } from 'pinia';

export default {
  components: {
    MyPanel,
    AppMore,
  },
  setup(props) {
    const landStoe = useLandStore()
    landStoe.getAllLand()
    const {landList} = storeToRefs(landStoe)
    const baseUrl = "http://localhost:3300/web/media/";

    // getLandList()
    //   .then((res) => {
    //     console.log(res);
    //     if((res.status)){
    //       list.value=res.land;
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    return { landList, baseUrl };
  },
};
</script>
  
  <style lang="less" scoped>
.land {
  height: 940px;
}
.land-bottom {
  height: 50 0px;
  overflow: hidden;
}
.left {
  float: left;
  overflow: hidden;
  img {
    height: 200px;
    width: 300px;
    .hoverLarge();
  }
  h4 {
    a {
      &:hover {
        color: @xtxColor;
      }
    }
    height: 20px;
    margin: 20px 0;
  }
  p {
    height: 240px;
    width: 300px;
    line-height: 30px;
  }
}
.middle {
  float: left;
  height: 500px;
  width: 400px;
  padding: 10px 20px;
  margin-left: 20px;
  ul {
    li {
      height: 80px;
      padding: 10px;
      .hoverShadow ();
      a {
        font-size: 16px;
        line-height: 28px;
      }
    }
    li:nth-child(1) {
      height: 70px;
      a {
        font-size: 20px;
        font-weight: 600;
        &:hover {
          color: @xtxColor;
        }
      }
    }
  }
}
.right {
  float: right;
  overflow: hidden;
  img {
    height: 200px;
    width: 300px;
    .hoverLarge();
  }
  h4 {
    a {
      &:hover {
        color: @xtxColor;
      }
    }
    height: 20px;
    margin: 20px 0;
  }
  p {
    height: 240px;
    width: 300px;
    line-height: 30px;
  }
}
</style>