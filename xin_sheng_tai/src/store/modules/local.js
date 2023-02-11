import { getLocalList } from "@/api/LayOut";

export default{
    namespace:true,
    state:()=>{
        return{
            localList:[],//默认值，如果请求不到数据时显示
        }
    },
    mutations:{
        setList(state,payload){
            state.localList = payload;
        }
    },
    actions:{
        //请求后台，加载分类数据
        async getAllLocal({commit}){
            
                try{
                    const res=await getLocalList();
                    console.log(res);
                    if(res.status){
                        commit('setList',res.local)
                    }
                }catch(error){
                    console.log(error);
                }
           
            
        }
    },
    getters:{
        
    }
}