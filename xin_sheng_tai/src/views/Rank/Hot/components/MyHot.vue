<template>
    <div class="hot">
        <div class="title">
            <span>
                热点榜
            </span>
        </div>
        <ul>
            <li>
                <span class="num">01</span>
                <div class="all">
                    <div class="head">
                    <a href="###">
                        <img src="@/assets/images/use.jpg" alt="">
                    </a>
                </div>
                <div class="name">
                    <a href="###">
                        <p>
                            你都1000级了，外面最高30级丨爆笑玄幻丨紫襟领衔多人有声剧你都1000级了，外面最高30级丨爆笑玄幻丨紫襟领衔多人有声剧你都1000级了，外面最高30级丨爆笑玄幻丨紫襟领衔多人有声剧   
                        </p>
                    </a>
                </div>
                </div>
            </li>
            <li>
                <span class="num">02</span>
                <div class="all">
                    <div class="head">
                    <a href="###">
                        <img src="@/assets/images/use.jpg" alt="">
                    </a>
                </div>
                <div class="name">
                    <a href="###">
                        <p>
                            你都1000级了，外面最高30级丨爆笑玄幻丨紫襟领衔多人有声剧你都1000级了，外面最高30级丨爆笑玄幻丨紫襟领衔多人有声剧你都1000级了，外面最高30级丨爆笑玄幻丨紫襟领衔多人有声剧   
                        </p>
                    </a>
                </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
.all{
    float: left;
    width: 833px;
    margin-top: 5px;
}
.hot{
    .title{
        font-size: 30px;
        margin-left: 10px;
    }
    overflow: hidden;
    li{
        height: 130px;
        padding: 20px 0;
        border-bottom: 1px solid #eee;
        display: block;
    }
}
.num{
        height: 90px;
        font-size: 20px;
        border-bottom: 1px solid #40404c;
        float: left;
        display: block;
        line-height: 130px;
        text-align: center;
        margin-right: 20px;
       
}
.head{
    float: left;
    img{
        width: 90px;
        height: 120px;
        
    }
}
.name{
    float: right;
    width: 730px;
    margin-top: 10px;
    line-height: 22px;
    p{
        
        display: inline; 
        margin-top: 15px;
    }
}

</style>