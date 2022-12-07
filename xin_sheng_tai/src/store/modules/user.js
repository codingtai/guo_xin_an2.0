export default{
    namespaced:true,
    //全局状态初始值
    // state:{
      
    // },
    // //计算state获取对应的值
    // getters:{

    // },
    // mutations:{
     
    // },
    // actions:{
    //     // setCountPromise(context,num){
    //     //     return new Promise((resolve,reject)=>{
    //     //         if(num>100){
    //     //             reject("值不能大于100")
    //     //         }
    //     //     })
    //     // }
    // },
    // modules:{

    // },
    state:()=>{
        return{
            userinfo:{
                token:'123',
                username:'张三'
            }
        }
    },
    mutations:{
        updateName(state,payload){
            state.userinfo.username = payload;
        }
    },
    actions:{
        updateNameAsync({commit},payload){
            setTimeout(()=>{
                commit('updateName',payload)
            },2000);
        }
    },
    getters:{

    }
}