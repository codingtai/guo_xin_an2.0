import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/views/Layout.vue'
import Home from '@/views/Home/Home.vue'
import Rank from '@/views/Rank/Rank.vue'
const Local=()=>import('@/views/Local/Local.vue')
const Land=()=>import('@/views/Land/Land.vue')
const Sea=()=>import('@/views/Sea/Sea.vue')
const Air=()=>import('@/views/Air/Air.vue')
const Water=()=>import('@/views/Water/Water.vue')
const Radiate=()=>import('@/views/Radiate/Radiate.vue')

const PersonalCenter=()=>import('@/views/PersonalCenter/PersonalCenter.vue')
const PcHome=()=>import('@/views/PersonalCenter/Home/PcHome.vue')
const Subscribe=()=>import('@/views/PersonalCenter/Subscribe/Subscribe.vue')
const Focus=()=>import('@/views/PersonalCenter/Focus/Focus.vue')
const Fans=()=>import('@/views/PersonalCenter/Fans/Fans.vue')

const Recommend=()=>import('@/views/Rank/Recommend/Recommend.vue')
const Hot=()=>import('@/views/Rank/Hot/Hot.vue')
const Good=()=>import('@/views/Rank/Good/Good.vue')

const Create=()=>import('@/views/Create/Create.vue')
const Search=()=>import('@/views/Search/Search.vue')

const UpLoad=()=>import('@/views/Create/UpLoad/UpLoad.vue')
const CrHome=()=>import('@/views/Create/CrHome/CrHome.vue')
const Content=()=>import('@/views/Create/Content/Content.vue')
const Data=()=>import('@/views/Create/Data/Data.vue')



const LoginT=()=>import('@/views/LoginT.vue')


const routes = [
{
  path:'/',
  component:Layout,
  children:[
    {
      path:'/',
      component:Home
    },{
      path:'/local',
      component:Local
    },{
      path:'/rank',
      component:Rank,
      redirect:'/rank/recommend',
      children:[
        {
          path:'recommend',
          component:Recommend
        },{
          path:'hot',
          component:Hot
        },{
          path:'good',
          component:Good
        }
      ]
    },{
      path:'/land',
      component:Land
    },{
      path:'/sea',
      component:Sea
    },{
      path:'/air',
      component:Air
    },{
      path:'/water',
      component:Water
    },{
      path:'/radiate',
      component:Radiate
    },{
      path:'/personalcenter',
      component:PersonalCenter,
      redirect:'/personalcenter/pchome',
      children:[
        {
          path:'pchome',
          component:PcHome
        },{
          path:'subscribe',
          component:Subscribe
        },{
          path:'focus',
          component:Focus
        },{
          path:'fans',
          component:Fans
        }
      ]
    }
  ]
} ,{
  path:'/create',
  component:Create,
  redirect:'/create/upload',
  children:[
    {
      path:'upload',
      component:UpLoad
    }
    ,{
      path:'crhome',
      component:CrHome
    }
    ,{
      path:'content',
      component:Content
    }
    ,{
      path:'data',
      component:Data
    }
    
  ]
},{
  path:'/search',
  component:Search
}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
