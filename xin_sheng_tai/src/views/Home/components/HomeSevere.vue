<template>
  <div class="serve2 w">
    <my-panel title="严重污染领域" subTitle="">
      <!-- 使用右侧插槽 -->
      <template #right>
        <app-more />
      </template>
      <!-- 使用默认插槽 -->
      <div class="severe">
        <!-- 第一排 -->
        <div class="rm_wt01 w">
          <!-- <ul class="all"> -->
          <!-- 左侧 -->
          <!-- <li> -->
          <div class="col_01_left">
            <div class="news">
              <h3 v-for="item in serveList.slice(8, 9)" :key="item.id">
                <router-link
                  :to="{ path: 'detail', query: { id: item.pk } }"
                  tag="a"
                  target="_blank"
                  >{{ item.fields.title }}</router-link
                >
              </h3>
            </div>
            <p class="gray" v-for="item in serveList.slice(8, 9)" :key="item.id">
              <router-link
                :to="{ path: 'detail', query: { id: item.pk } }"
                tag="a"
                target="_blank"
                >{{ item.fields.content }}</router-link
              >
            </p>
          </div>
          <!-- </li> -->
          <!-- 右侧 -->
          <!-- <li> -->
          <div class="col_01_right">
            <ul class="list">
              <li
                class="ellipsis"
                v-for="item in serveList.slice(0, 4)"
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
          <!-- </li> -->
          <!-- </ul> -->
        </div>
        <!-- 第二排 -->
        <div class="rm_wt02 w">
          <!-- 左侧 -->
          <div class="col_02_left">
            <ul class="list2">
              <li
                class="ellipsis"
                v-for="item in serveList.slice(4, 8)"
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
              <h3 v-for="item in serveList.slice(9, 10)" :key="item.id">
                <router-link
                  :to="{ path: 'detail', query: { id: item.pk } }"
                  tag="a"
                  target="_blank"
                  >{{ item.fields.title }}</router-link
                >
              </h3>
            </div>
            <p class="gray2" v-for="item in serveList.slice(9, 10)" :key="item.id">
              <router-link
                :to="{ path: 'detail', query: { id: item.pk } }"
                tag="a"
                target="_blank"
                >{{ item.fields.content }}</router-link
              >
            </p>
          </div>
        </div>
      </div>
    </my-panel>
  </div>
</template>

<script>
import MyPanel from "@/components/MyPanel.vue";
import AppMore from "@/components/liarbry/AppMore.vue";
import {useServeStore} from '@/store/pinia/serve'
import { storeToRefs } from "pinia";
import { getServeList } from "@/api/LayOut";
import { ref } from "vue";
export default {
  components: {
    MyPanel,
    AppMore,
  },
  setup(props) {
    const serveStore = useServeStore()
    const {serveList} = storeToRefs(serveStore)
    serveStore.getAllServe()
    // const list=ref([]);
    // getServeList().then(res=>{
    //   console.log(res);
    //   if((res.status)){
    //     list.value=res.serve;
    //   }
    // }).catch(err=>{
    //   console.log(err);
    // })
    return { serveList };
  },
};
</script>

<style lang="less" scoped>
.serve2 {
  margin: 20px 0;
  overflow: hidden;
  height: 500px;
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