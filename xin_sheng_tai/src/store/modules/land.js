import { getLandList } from "@/api/LayOut";


export default{
    namespace:true,
    state:()=>{
        return{
            landList:[],//默认值，如果请求不到数据时显示
        }
    },
    mutations:{
        setList(state,payload){
            state.landList = payload;
        }
    },
    actions:{
        //请求后台，加载分类数据
        async getAllLand({commit}){
            // setTimeout(()=>{
                // commit('setList',payload)
                try{
                    const res=await getLandList();
                    console.log(res);
                    if(res.status){
                        commit('setList',res.land)
                    }
                }catch(error){
                    console.log(error);
                }
            // },2000);
            
        }
    },
    getters:{
        
    }
}