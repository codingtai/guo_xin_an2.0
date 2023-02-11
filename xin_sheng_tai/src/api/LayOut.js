// 导出所有的接口请求函数
import base from "@/serves/base";
import req from "@/serves/req"
//获取分列列表
export const getCategoryList=()=>req.get(base.categoryUrl);
//获取首页轮播图
export const getBanner=()=>req.get(base.bannerUrl);
//获取首页轮播图
export const getRank=()=>req.get(base.rankUrl);
//获取首页严重污染
export const getServeList=()=>req.get(base.serveUrl);
//获取首页陆地污染
export const getLandList=()=>req.get(base.landUrl);
//获取首页当地污染
export const getLocalList=()=>req.get(base.localUrl);
//获取首页海洋污染
export const getSeaList=()=>req.get(base.seaUrl);
//获取首页水污染
export const getWaterList=()=>req.get(base.waterUrl);
//获取验证码
export const getTest=(data)=>req.get(base.sendsmsUrl,{params:data});
//提交注册手机号
export const postRegLogin=(data)=>req.post(base.regloginUrl,data);
//提交登录手机号
export const postLogin=(data)=>req.post(base.pwdloginUrl,data);
//退出登录
export const getLoginOut=()=>req.get(base.loginOutUrl);

