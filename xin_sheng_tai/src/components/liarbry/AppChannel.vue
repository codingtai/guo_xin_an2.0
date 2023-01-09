<template>
    <div class="channel w">
       <ul>
        <li class="channel-li"><a href="###">片段</a></li>
        <li class="channel-li"><a href="###">片段</a></li>
        <li class="channel-li"><a href="###">片段</a></li>
        <li class="channel-li"><a href="###">片段</a></li>
        <li class="channel-li"><a href="###">片段</a></li>
        <li class="channel-li"><a href="###">片段</a></li>
        <li class="channel-li"><a href="###">片段</a></li>
        <li class="channel-li"><a href="###">片段</a></li>
        <li class="channel-li"><a href="###">片段</a></li>
        <li class="channel-li"><a href="###">片段</a></li>
        <li class="channel-li"><a href="###">片段</a></li>
        <li class="channel-li"><a href="###">片段</a></li>
        <li class="channel-li"><a href="###">片段</a></li>
        <li class="channel-li"><a href="###">片段</a></li>
        <li class="channel-li"><a href="###">片段</a></li>
        <li class="channel-li"><a href="###">片段</a></li>
        <li class="channel-li"><a href="###">片段</a></li>
        <li class="channel-li"><a href="###">片段</a></li>
       </ul>
    </div>
</template>

<script>
    export default {
        name:'AppChannel'
    }
</script>

<style lang="less" scoped>
.channel{
    height: 100px;
}
.channel-li{
    float: left;
    width: 65px;
    height: 30px;
    background-color: #F6F7F8;
   margin-left: 50px;
   margin-top: 10px;
   border-radius: 6px;
   
   a{
    margin-left: 17px;
    text-align: center;
    line-height: 30px;
    &:hover{
        color: @xtxColor;
   }
   }

}
</style>