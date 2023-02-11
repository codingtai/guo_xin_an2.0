import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            loginStatus:false,
            userInfo:[],
            userDetail:[]
        }
    },
    actions: {
        
    },
    getters: {
        
    },
    persist: true
})