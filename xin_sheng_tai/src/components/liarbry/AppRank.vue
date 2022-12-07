<template>
    <div class="rank w">
        <!-- 热搜头 -->
        <div class="rank-header">
            <div class="top">
                热搜排行榜
            </div>
            <!-- <div class="new">
                <i class="iconfont icon-shuaxin"></i>
                <span>点击刷新</span>
            </div> -->
        </div>
        <!-- 热搜内容 -->
        <div class="content">
            <ul>
                <li><span>1</span><a href="">宜宾市......</a></li>
                <li><span>2</span><a href="">宜宾市......</a></li>
                <li><span>3</span><a href="">宜宾市......</a></li>
                <li><span>4</span><a href="">宜宾市......</a></li>
                <li><span>5</span><a href="">宜宾市......</a></li>
                <li><span>6</span><a href="">宜宾市......</a></li>
                <li><span>7</span><a href="">宜宾市......</a></li>
                <li><span>8</span><a href="">宜宾市......</a></li>
            </ul>
        </div>
        <!-- 热搜底 -->
        <div class="rank-bottom">
            <a href="">
                    <span>查看完整热榜消息</span>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name:'AppRank'
    }
</script>

<style lang="less" scoped>
.rank{
    background-color: #fff;
    width: 280px;
    float: right;
    height: 500px;
    width: 280px;
    padding: 0 18px;
    border: 1px solid #ccc;
}
.rank-header{
    height: 40px;
    padding-top: 10px;
}
.top{
    float: left;
    padding-bottom: 8px;
    border-bottom: 2px solid #ccc;
}
.new{
    float: left;

}
.content{
    height: 400px;
    ul{
        li{
            padding: 13px 0;
            border-bottom: 1px solid rgb(233, 231, 231);
            span{
                font-size: 17px;
                padding-right: 7px;
                color: rgb(235, 170, 101);
            }
        }
    }
   
}
.rank-bottom{
    height: 40px;
    span{
        display: block;
        text-align: center;
        margin-top: 14px;
    }
}
</style>