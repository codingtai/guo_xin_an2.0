<template>
    <div class="focus w">
        <ul>
            <li>
                <div class="all">
                    <div class="head">
                    <a href="###">
                        <img src="@/assets/images/cat.png" alt="">
                    </a>
                </div>
                <div class="name">
                    <a href="###">
                        <span>
                            环境拯救者001
                        </span>
                    </a>
                    <p>
                        拯救环境第一名
                    </p>
                </div>
                <div class="followed">
                        <span>
                            √ 关注
                        </span>
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
    margin-top: 10px;
}
.focus{
    overflow: hidden;
    li{
        height: 80px;
        padding: 20px 0;
        border-bottom: 1px solid #eee;
        display: block;
    }
}
.head{
    float: left;
    img{
        width: 60px;
        height: 60px;
        border-radius: 30px;
        overflow: hidden;
    }
}
.name{
    float: left;
    margin-left: 30px;
    font-size: 16px;
    p{
        font-size: 12px;
        color: rgb(109, 117, 122);
        margin-top: 15px;
    }
}
.followed{
    float: right;
    background-color: #e5e9ef;
    border-radius: 4px;
    color: #6d757a;   
    height: 25px;
    width: 74px;
    margin-top: 20px;
    
    span{
        display: block;
        text-align: center;
        line-height: 25px;
    }
}
</style>