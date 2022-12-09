// 导出所有的接口请求函数
import base from './base'
import req from './req'
//获取分列列表
export const getCategoryList=()=>req.get(base.categoryUrl);

//获取首页轮播图
export const getBanner=()=>req.get(base.bannerUrl);