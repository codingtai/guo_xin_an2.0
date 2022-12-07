<template>
    <div>
        <div class="row02 w">
          <div class="video">
            <h3><a href="#">视频资源</a></h3>
          </div>
        </div>
        <div class="real-video">
         <ul>
           <li>
             <a href="">
               <img src="@/assets/logo.png" alt="" />
               <span>宜宾酒厂无酒排放</span>
             </a>
           </li>
           <li>
             <a href="">
               <img src="@/assets/logo.png" alt="" />
               <span>宜宾酒厂无酒排放</span>
             </a>
           </li>
           <li>
             <a href="">
               <img src="@/assets/logo.png" alt="" />
               <span>宜宾酒厂无酒排放</span>
             </a>
           </li>
         </ul>
       </div>
    </div>
</template>

<script>
   export default {
       name:'AppVideo'
   }
</script>

<style lang="less" scoped>
.real-video{
 height: 253px;
 ul{
   li{
     float: left;
     height: 240px;
     width: 300px;
     margin-right: 50px;
     float: left;
     img {
       height: 200px;
       width: 300px;
       .hoverShadow()
     }
     span {
       margin-top: 10px;
       height: 20px;
       display: block;
       text-align: center;
       &:hover{
         color: @xtxColor;
       }
     }
   }
   li:nth-child(3){
     margin-right: 0;
   }
 }
}
.row02{
  height: 45px;
  
}
.video{
  float: left;
  margin-top: 10px;
  a{
    &:hover{
      color: @xtxColor;
    }
  }
}
</style>