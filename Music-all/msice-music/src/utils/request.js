/**
 * 封装 axios
 */
import axios from "axios";

// 创建一个axios实例
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // api 的 base_url
    url: '/api',
    timeout: 5000, // request timeout  设置请求超时时间
    //   responseType: "json",
    withCredentials: true, // 是否允许带cookie这些
    headers: {
        "Content-Type": "application/json;charset=utf-8"
    }
});

// 请求拦截器，在  发送请求前正确或者错误应该干什么，
service.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        // do something with request error
        console.log(error); // for debug
        return Promise.reject(error);
    }
);

// 响应拦截器，  对响应数据应该做什么，
service.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        console.log('err' + error); // for debug
        return Promise.reject(error);
    }
);

export default service;