// 引入axios
import axios from 'axios'
// 请求延时（毫秒数，如果请求话费超过了'timeout'的时间，请求将被中断）
axios.defaults.timeout = 100000

export const getAllData = params => {
    console.log(process.env.VUE_APP_BASE_URL+`/api/Job/all`);
    return axios.get(process.env.VUE_APP_BASE_URL+`/api/Job/all`,{ params: params })

  };
  
  



  
