import { defineStore } from 'pinia'
import { getServeList } from '@/api/LayOut';

export const useServeStore = defineStore('serve', {
    state: () => {
        return {
            serveList: []
        }
    },
    actions: {
        async getAllServe() {
            try {
                const res = await getServeList();
                console.log(res);
                if (res.status) {
                    this.serveList=res.serve
                }
            } catch (error) {
                console.log(error);
            }
        }
    },
    getters: {

    },

})