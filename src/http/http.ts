import axios from "axios"


axios.defaults.baseURL = "/api/"; // 配置axios请求的地址
axios.defaults.withCredentials = true;  //设置cross跨域 并设置访问权限 允许跨域携带cookie信息
// axios.defaults.headers.common['Authorization'] = ''; // 设置请求头为 Authorization
axios.defaults.headers['Content-Type'] = 'application/json; charset=utf-8';

export default axios
