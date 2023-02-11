import { defineStore } from 'pinia'
import { getSeaList } from '@/api/LayOut';

export const useSeaStore = defineStore('sea', {
    state: () => {
        return {
            seaList: []
        }
    },
    actions: {
        async getAllSea() {
            try {
                const res = await getSeaList();
                console.log(res);
                if (res.status) {
                    this.seaList=res.sea
                }
            } catch (error) {
                console.log(error);
            }
        }
    },
    getters: {

    },

})