export default{
    namespace:true,
    state:()=>{
        return{
            catelist:[]
        }
    },
    mutations:{
        updateName(state,payload){
            state.catelist = payload;
        }
    },
    actions:{
        //请求后台，加载分类数据
    },
    getters:{
        
    }
}