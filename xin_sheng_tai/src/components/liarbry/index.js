import AppMore from './AppMore.vue'
import AppRank from './AppRank.vue'
import AppVideo from './AppVideo.vue'
import AppChannel from './AppChannel.vue'
import AppCard from './AppCard.vue'
import AppContent from './AppContent.vue'
import AppContentTwo from './AppContentTwo.vue'
import HeaderNav from './HeaderNav.vue'

export default{
    install(app){
        //全局注册组件
        app.component(AppMore.name,AppMore);
        app.component(AppRank.name,AppRank);
        app.component(AppVideo.name,AppVideo);
        app.component(AppChannel.name,AppChannel);
        app.component(AppCard.name,AppCard);
        app.component(AppContent.name,AppContent);
        app.component(AppContentTwo.name,AppContentTwo)
        app.component(HeaderNav.name,HeaderNav)
    }
}