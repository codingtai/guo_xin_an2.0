import { defineStore } from 'pinia'
import { getLocalList } from '@/api/LayOut';

export const useLocalStore = defineStore('local', {
    state: () => {
        return {
            localList: []
        }
    },
    actions: {
        async getAllLocal() {
            try {
                const res = await getLocalList();
                console.log(res);
                if (res.status) {
                    this.localList=res.local
                }
            } catch (error) {
                console.log(error);
            }
        }
    },
    getters: {

    },

})