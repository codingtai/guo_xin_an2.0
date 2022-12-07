<template>
    <div class="land">
      <MyPanel title="陆地污染" subTitle="保护陆地保护家园">
        <!-- 使用右侧插槽 -->
        <template #right>
          <app-more/>
        </template>
        <div class="land-bottom">
          <!-- 左半部分 -->
          <div class="left">
              <span>
                <a href="###"><img src="http://www.people.com.cn/NMediaFile/2022/1106/MAIN202211060540516575257388291.jpg" alt=""></a>
              </span> 
              <h4>
                <a href="###">“立冬”时节到 “小雪”翩然来</a>
              </h4> 
              <p>
                “细雨生寒未有霜，庭前木叶半青黄。”一场诗意的冬雨开启一段秋收冬藏的旅程。立冬是二十四节气中的第十九个节气，一般在公历每年11月7日前后。“冬，终也，万物收藏也。”立冬时，秋季作物全部收晒完毕，收藏入库。这个时节是农耕社会的一个重要时刻，人们更鲜衣以相揖，喜庆热闹，谓之“贺冬”。
              </p>          
          </div>
          <!-- 中部 -->
          <div class="middle">
              <ul>
                <li><a href="###">第五届虹桥论坛"中国发展新蓝图与全球发展新机遇"分论坛举行 李书磊致辞</a></li>
                <li><a href="###">万钢出席中德对话论坛专题视频会议并致辞,万钢出席中德对话论坛专题视频会议并致辞,万钢出席中德对话论坛专题视频会议并致辞</a></li>
                <li><a href="###">万钢出席中德对话论坛专题视频会议并致辞,万钢出席中德对话论坛专题视频会议并致辞,万钢出席中德对话论坛专题视频会议并致辞</a></li>
                <li><a href="###">万钢出席中德对话论坛专题视频会议并致辞,万钢出席中德对话论坛专题视频会议并致辞,万钢出席中德对话论坛专题视频会议并致辞</a></li>
                <li><a href="###">万钢出席中德对话论坛专题视频会议并致辞,万钢出席中德对话论坛专题视频会议并致辞,万钢出席中德对话论坛专题视频会议并致辞</a></li>
              </ul>
          </div>
          <!-- 右半部分 -->
          <div class="right">
            <span>
                <a href="###"><img src="http://www.people.com.cn/NMediaFile/2022/1106/MAIN202211060540516575257388291.jpg" alt=""></a>
              </span> 
              <h4>
                <a href="###">“立冬”时节到 “小雪”翩然来</a>
              </h4> 
              <p>
                “细雨生寒未有霜，庭前木叶半青黄。”一场诗意的冬雨开启一段秋收冬藏的旅程。立冬是二十四节气中的第十九个节气，一般在公历每年11月7日前后。“冬，终也，万物收藏也。”立冬时，秋季作物全部收晒完毕，收藏入库。这个时节是农耕社会的一个重要时刻，人们更鲜衣以相揖，喜庆热闹，谓之“贺冬”。
              </p>
          </div>
        </div>
    
    <app-video/>
      </MyPanel>
    </div>
  </template>
  
  <script>
  import MyPanel from "@/components/MyPanel.vue";
  import AppMore from '@/components/liarbry/AppMore.vue';
  
  export default {
    components: { 
      MyPanel,
      AppMore
   },
  };
  </script>
  
  <style lang="less" scoped>
  .land{
    height: 930px;
  }
  .land-bottom{
    height: 50 0px;
    overflow: hidden;
  }
  .left{
    float: left;
    overflow: hidden;
    img{
      height: 200px;
      width: 300px;
      .hoverLarge();
    }
    h4{
      a{
        &:hover{
          color: @xtxColor;
        }
      }
      height: 20px;
      margin: 20px 0;
      
    }
    p{
      height: 240px;
      width: 300px;
      line-height: 30px;
    }
  }
  .middle{
    float:left;
    height: 500px;
    width: 400px;
    padding: 10px 20px;
    margin-left: 20px;
    ul{
      li{
        height: 80px;
        padding: 10px;
        .hoverShadow ();
        a{
          line-height: 25px;
          
        }
      }
      li:nth-child(1){
        height: 70px;
        a{
          font-size: 20px;
          font-weight: 600;
          &:hover{
          color: @xtxColor;
        }
        }
      }
    }
  }
  .right{
    float: right;
    overflow: hidden;
    img{
      height: 200px;
      width: 300px;
      .hoverLarge();
    }
    h4{
      a{
        &:hover{
          color: @xtxColor;
        }
      }
      height: 20px;
      margin: 20px 0;
      
    }
    p{
      height: 240px;
      width: 300px;
      line-height: 30px;
    }
  }
  </style>