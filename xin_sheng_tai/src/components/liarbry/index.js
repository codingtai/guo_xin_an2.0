import AppMore from './AppMore.vue'
import AppRank from './AppRank.vue'
import AppVideo from './AppVideo.vue'

export default{
    install(app){
        //全局注册组件
        app.component(AppMore.name,AppMore);
        app.component(AppRank.name,AppRank);
        app.component(AppVideo.name,AppVideo)
    }
}