<template>
  <div class="home-local w">
    <MyPanel title="当地问题" subTitle="四川省 宜宾市 翠屏区">
      <!-- 使用右侧插槽 -->
      <template #right>
        <app-more />
      </template>
    </MyPanel>
    <div class="local">
      <!-- 第一排 -->
      <div class="row01">
        <!-- 左半部分 -->
        <div class="left-01" v-for="item in localList.slice(0, 1)" :key="item.id">
          <div class="image">
            <router-link :to="{ path: 'detail' , query:{id:item.pk}}" tag="a" target="_blank"
              ><img :src="baseUrl + item.fields.photo"
            /></router-link>
          </div>
          <div class="content">
            <div class="news">
              <h3 v-for="item in localList.slice(0, 1)" :key="item.id">
                <router-link :to="{ path: 'detail' , query:{id:item.pk}}" tag="a" target="_blank">{{
                  item.fields.title
                }}</router-link>
              </h3>
            </div>
            <div class="graybox">
              <p v-for="item in localList.slice(0, 1)" :key="item.id">
                <router-link
                  class="ellipsis-6"
                  :to="{ path: 'detail' , query:{id:item.pk}}"
                  tag="a"
                  target="_blank"
                  >{{ item.fields.content }}</router-link
                >
              </p>
            </div>
          </div>
        </div>
        <!-- 右半部分 -->
        <div class="right-01" v-for="item in localList.slice(1, 2)" :key="item.id">
          <router-link :to="{ path: 'detail' , query:{id:item.pk}}" tag="a" target="_blank"
            ><img :src="baseUrl + item.fields.photo"
          /></router-link>
          <router-link :to="{ path: 'detail' , query:{id:item.pk}}" tag="a" target="_blank"
            ><span>{{ item.fields.title }}</span></router-link
          >
        </div>
      </div>
    </div>
    <div>
      <app-video :list="localList"/>
    </div>
  </div>
</template>

<script>
import {useLocalStore} from '@/store/pinia/local'
import MyPanel from "@/components/MyPanel.vue";
import { computed, ref } from "vue";
import { useStore } from 'vuex';
import { storeToRefs } from 'pinia';
export default {
  components: {
    MyPanel,
  },
  setup(props, context) {
    const localStore = useLocalStore()
    localStore.getAllLocal()
    const {localList} = storeToRefs(localStore)
    // const store = useStore()
    // store.dispatch('getAllLocal')
    // const list = computed(()=>{
    //   return store.state.local.localList
    // })

    const baseUrl = "http://localhost:3300/web/media/";
    // getLocalList()
    //   .then((res) => {
    //     console.log(res);
    //     if (res.status) {
    //       list.value = res.local;
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    return {  baseUrl,localList };
  },
};
</script>

<style lang="less" scoped>
.home-local {
  overflow: hidden;
}
.local {
  height: 250px;
  margin: 20px 0;
}
.left-01 {
  background-color: rgb(241, 239, 239);
  float: left;
  height: 240px;
  width: 700px;
  overflow: hidden;
}
.image {
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
.news {
  margin: 20px 20px 20px 220px;
  a {
    &:hover {
      color: @xtxColor;
    }
  }
}
.graybox {
  margin: 30px 20px 20px 220px;
  line-height: 22px;
}

.right-01 {
  height: 240px;
  width: 300px;
  margin-left: 50px;
  float: left;
  img {
    height: 200px;
    width: 300px;
    .hoverShadow();
  }
  span {
    padding: 2px 15px;
    height: 40px;
    display: block;
    text-align: center;
    &:hover {
      color: @xtxColor;
    }
  }
}
</style>