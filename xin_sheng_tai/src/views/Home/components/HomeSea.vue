<template>
  <div class="sea">
    <MyPanel title="海洋污染" subTitle="保护海洋保护世界">
      <!-- 使用右侧插槽 -->
      <template #right>
        <app-more />
      </template>
      <div class="severe">
        <!-- 第一排 -->
        <div class="rm_wt01 w">
          <ul class="all">
          <!-- 左侧 -->
          <li>
          <div class="col_01_left">
            <div class="news">
              <h3 v-for="item in seaList.slice(0, 1)" :key="item.id">
                <router-link
                  :to="{ path: 'detail', query: { id: item.pk } }"
                  tag="a"
                  target="_blank"
                  >{{ item.fields.title }}</router-link
                >
              </h3>
            </div>
            <p class="gray" v-for="item in seaList.slice(0, 1)" :key="item.id">
              <router-link
                class="ellipsis-2"
                :to="{ path: 'detail', query: { id: item.pk } }"
                tag="a"
                target="_blank"
                >{{ item.fields.content }}</router-link
              >
            </p>
          </div>
          </li>
          <!-- 右侧 -->
          <li>
          <div class="col_01_right">
            <ul class="list">
              <li
                class="ellipsis"
                v-for="item in seaList.slice(2, 6)"
                :key="item.id"
              >
                <router-link
                  :to="{ path: 'detail', query: { id: item.pk } }"
                  tag="a"
                  target="_blank"
                  >{{ item.fields.title }}</router-link
                >
              </li>
            </ul>
          </div>
          </li>
          </ul>
        </div>
        <!-- 第二排 -->
        <div class="rm_wt02 w">
          <!-- 左侧 -->
          <div class="col_02_left">
            <ul class="list2">
              <li
                class="ellipsis"
                v-for="item in seaList.slice(6, 10)"
                :key="item.id"
              >
                <router-link
                  :to="{ path: 'detail', query: { id: item.pk } }"
                  tag="a"
                  target="_blank"
                  >{{ item.fields.title }}</router-link
                >
              </li>
            </ul>
          </div>
          <!-- 右侧 -->
          <div class="col_02_right">
            <div class="news2">
              <h3 v-for="item in seaList.slice(1, 2)" :key="item.id">
                <router-link
                  :to="{ path: 'detail', query: { id: item.pk } }"
                  tag="a"
                  target="_blank"
                  >{{ item.fields.title }}</router-link
                >
              </h3>
            </div>
            <p class="gray2" v-for="item in seaList.slice(1, 2)" :key="item.id">
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
      <app-video :list="seaList" />
    </MyPanel>
  </div>
</template>
  
  <script>
import MyPanel from "@/components/MyPanel.vue";
import AppMore from "@/components/liarbry/AppMore.vue";
import { getSeaList } from "@/api/LayOut";
import { ref } from "vue";
import {useSeaStore} from '@/store/pinia/sea'
import { storeToRefs } from 'pinia';
export default {
  components: {
    MyPanel,
    AppMore,
  },
  setup(props) {
    const seaStoe = useSeaStore()
    seaStoe.getAllSea()
    const {seaList} = storeToRefs(seaStoe)
    // const list=ref([]);
    // getSeaList().then(res=>{
    //   console.log(res);
    //   if((res.status)){
    //     list.value=res.sea;
    //   }
    // }).catch(err=>{
    //   console.log(err);
    // })
    return { seaList };
  },
};
</script>
  
  <style lang="less" scoped>
.sea {
  margin: 20px 0;
  overflow: hidden;
  height: 840px;
  background-color: #fff;
}
.severe {
  background-color: #fff;
  height: 420px;
}
.rm_wt01 {
  padding-top: 2px;
}
.rm_wt02 {
  padding-top: 2px;
}
.all {
  display: flex;
}
.col_01_left {
  background-color: rgb(241, 239, 239);
  height: 180px;
  width: 800px;
  float: left;
}
.col_02_right {
  background-color: rgb(241, 239, 239);
  height: 180px;
  width: 800px;
  float: left;
}
.news {
  padding: 20px;
  a {
    &:hover {
      color: @xtxColor;
    }
  }
}
.news2 {
  padding: 20px;
  a {
    &:hover {
      color: @xtxColor;
    }
  }
}
.gray {
  padding: 0 20px;
}
.gray2 {
  padding: 0 20px;
}
.col_01_right {
  width: 250px;
  height: 200px;
  padding-left: 30px;
  float: left;
}
.col_02_left {
  width: 250px;
  height: 200px;
  padding-right: 30px;
  float: left;
}
.list {
  height: 200px;
  background-color: #fff;
  li {
    padding: 13px 20px;
    font-size: 15px;
    border-bottom: 1px solid rgb(236, 233, 233);
    a {
      &:hover {
        color: @xtxColor;
      }
    }
  }
  li:nth-child(4) {
    border-bottom: 0;
  }
}
.list2 {
  height: 200px;
  background-color: #fff;
  li {
    padding: 13px 20px;
    font-size: 15px;
    border-bottom: 1px solid rgb(236, 233, 233);
    a {
      &:hover {
        color: @xtxColor;
      }
    }
  }
  li:nth-child(4) {
    border-bottom: 0;
  }
}
</style>