import { defineStore } from 'pinia'
import { getLandList } from '@/api/LayOut';

export const useLandStore = defineStore('land', {
    state: () => {
        return {
            landList: []
        }
    },
    actions: {
        async getAllLand() {
            try {
                const res = await getLandList();
                console.log(res);
                if (res.status) {
                    this.landList=res.land
                }
            } catch (error) {
                console.log(error);
            }
        }
    },
    getters: {

    },

})