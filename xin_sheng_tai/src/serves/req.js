//axios二次分封装
import axios from 'axios'

const service = axios.create({
    baseURL:'',
    timeout:5000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
})

service.interceptors.request.use(config=>{


    return config
})


service.interceptors.response.use(res=>{

    return res.data;
},err=>{
    return Promise.reject(err)
})


export default service

