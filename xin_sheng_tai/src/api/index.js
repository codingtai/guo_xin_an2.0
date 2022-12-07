// 导出所有的接口请求函数
import base from './base'
import req from './req'
export const getCategoryList=()=>req.get();

//获取首页轮播图
export const getBanner=()=>req.get(base.bannerUrl);