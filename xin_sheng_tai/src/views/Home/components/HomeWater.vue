<template>
  <div class="water">
    <MyPanel title="水污染" subTitle="保护水资源保护人身安全">
      <!-- 使用右侧插槽 -->
      <template #right>
        <app-more />
      </template>
      <!-- 第一排 -->
      <div class="row01" v-for="item in waterList.slice(0, 3)" :key="item.id">
        <div class="right-01">
          <router-link
            :to="{ path: 'detail', query: { id: item.pk } }"
            tag="a"
            target="_blank"
            ><img :src="baseUrl + item.fields.photo"
          /></router-link>
          <router-link
            :to="{ path: 'detail', query: { id: item.pk } }"
            tag="a"
            target="_blank"
            ><span>{{ item.fields.title }}</span></router-link
          >
        </div>
      </div>
      <!-- 第二排 -->
      <div class="row02">
        <div class="left-01" v-for="item in waterList.slice(3, 5)" :key="item.id">
          <div class="imge">
            <router-link
              :to="{ path: 'detail', query: { id: item.pk } }"
              tag="a"
              target="_blank"
              ><img :src="baseUrl + item.fields.photo"
            /></router-link>
          </div>
          <div class="content">
            <div class="news">
              <h3>
                <router-link
                  :to="{ path: 'detail', query: { id: item.pk } }"
                  tag="a"
                  target="_blank"
                  >{{ item.fields.title }}</router-link
                >
              </h3>
            </div>
            <div class="gray">
              <p>
                <router-link
                  class="ellipsis-2"
                  :to="{ path: 'detail', query: { id: item.pk } }"
                  tag="a"
                  target="_blank"
                  >{{ item.fields.content }}</router-link
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </MyPanel>
  </div>
</template>
  
  <script>
import MyPanel from "@/components/MyPanel.vue";
import AppMore from "@/components/liarbry/AppMore.vue";
import { getWaterList } from "@/api/LayOut";
import { ref } from "vue";
import { useWaterStore } from "@/store/pinia/water";
import { storeToRefs } from 'pinia';
export default {
  components: {
    MyPanel,
    AppMore,
  },
  setup(props) {
    const baseUrl = "http://localhost:3300/web/media/";
    const waterStore = useWaterStore()
    const {waterList} = storeToRefs(waterStore)
    waterStore.getAllWater()
    // const list = ref([]);
    // getWaterList()
    //   .then((res) => {
    //     console.log(res);
    //     if (res.status) {
    //       list.value = res.water;
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    return { waterList, baseUrl };
  },
};
</script>
  
  <style lang="less" scoped>
.water {
  height: 700px;
  margin-bottom: 20px;
}

.right-01 {
  height: 300px;
  width: 300px;
  margin-left: 50px;
  float: left;
  overflow: hidden;
  img {
    height: 200px;
    width: 300px;
    .hoverLarge();
  }
  span {
    margin-top: 20px;
    height: 40px;
    display: block;
    text-align: center;
    &:hover {
      color: @xtxColor;
    }
  }
}

.imge {
  float: left;
  height: 240px;
  width: 200px;
  img {
    height: 240px;
    width: 200px;
    .hoverShadow();
  }
}
.content {
  display: inline;
}
.left-01 {
  float: left;
  height: 240px;
  width: 500px;
  margin: 20px 20px;
  background-color: rgb(241, 239, 239);
}
.news {
  margin: 20px 20px 20px 220px;
  a {
    &:hover {
      color: @xtxColor;
    }
  }
}
.gray {
  margin: 30px 20px 20px 220px;
}
</style>