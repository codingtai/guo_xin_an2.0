import { getCategoryList } from "@/api/LayOut";
import {topCategory} from '@/utils/constants'

export default{
    namespace:true,
    state:()=>{
        return{
            cateList:[],//默认值，如果请求不到数据时显示
        }
    },
    mutations:{
        setList(state,payload){
            state.cateList = payload;
        }
    },
    actions:{
        //请求后台，加载分类数据
        async getAllCategory({commit}){
            try{
                const res=await getCategoryList();
                console.log(res);
                if(res.status){
                    commit('setList',res.category)
                }
            }catch(error){
                console.log(error);
            }
        }
    },
    getters:{
        
    }
}