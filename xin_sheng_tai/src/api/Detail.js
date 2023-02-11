import base from "@/serves/base";
import req from "@/serves/req"

//获取详情页
export const getDetail=(data)=>req.get(base.detailUrl,{params:data});