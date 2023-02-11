import { defineStore } from 'pinia'
import { getWaterList } from '@/api/LayOut';

export const useWaterStore = defineStore('water', {
    state: () => {
        return {
            waterList: []
        }
    },
    actions: {
        async getAllWater() {
            try {
                const res = await getWaterList();
                console.log(res);
                if (res.status) {
                    this.waterList=res.water
                }
            } catch (error) {
                console.log(error);
            }
        }
    },
    getters: {

    },

})