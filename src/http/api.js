import request from "@/http/request";



//查询宠物商店
export function queryListCwsd(pageNo,pageSize,name){
    return request({
        url:"/chongwushangdian/queryList",
        method:"get",
        params:{
            pageNo:pageNo,
            pageSize:pageSize,
            shangdianmingcheng:name,
        }
    });
}

//宠物上商店详情
export function queryByIdCwsd(id){
    return request({
        url:"/chongwushangdian/queryById",
        method:"get",
        params:{
            id:id
        }
    });
}
//宠物商店单个删除
export function deleteByIdCwsd(id){
    return request({
        url:"/chongwushangdian/deleteById",
        method:"post",
        params:{
            id:id
        }
    });
}
//宠物商店多个删除
export function deleteByIdCwsds(ids){
    return request({
        url:"/chongwushangdian/deleteByIds?ids="+ids,
        method:"post",
    });
}
//宠物商店添加
export function addCwsd(data){
    return request({
        url:"/chongwushangdian/add",
        method:"post",
        data
    });
}
//宠物商店修改
export function updateCwsd(data){
    return request({
        url:"/chongwushangdian/edit",
        method:"post",
        data
    });
}


