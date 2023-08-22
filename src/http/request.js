import axios from "axios";
import {ElMessage} from "element-plus";
import router from "@/router";
const instance = axios.create({
    baseURL:"http://localhost:8080",
    timeout:3000
})
//图片上传地址
export const domain="http://localhost:8080/ssmqj7b0/upload/";

//请求拦截
instance.interceptors.request.use(config=>{
    config.headers['pet-token'] = localStorage.getItem('token')//请求头上带token
    return config;
},
    error => {
    return Promise.reject(error)
    })

//响应拦截
//此处可以根据服务器返回的状态码做相应的数据
instance.interceptors.response.use(response=>{
    const res = response.data
    console.log(response.data)
    if (response.status==200){
        if (response.config.method=='post'){
            ElMessage.success("操作成功");
        }
    }else{
        ElMessage.error(res.msg);
        if (res.code==401){
            router.push("LoginIndex")
        }
    }
    return response.data
},error => {
    return Promise.reject(error)
})
export function get(url,params){
    return instance.get(url,{params})
}

export function post(url,data){
    return instance.post(url,data)
}

export default instance;