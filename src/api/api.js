/**
 * Created by fengzekun on 17/4/22.
 */
import Vue from 'vue'
import config from './config'
import axios from 'axios'
import  { ToastPlugin } from 'vux'
Vue.use(ToastPlugin);
axios.defaults.timeout = 5000;
axios.defaults.baseURL = config.api;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

//返回状态判断
axios.interceptors.response.use((res) =>{
  //console.log(res);
  // if(!res.resultCode == 200){
  //   return Promise.reject(res);
  // }
  //console.log(res);
  //alert(res);
  return res.data;
}, (error) => {
  Vue.$vux.toast.show({
      text : '请求超时',
      type : 'text',
      position : 'middle'
  })
  return Promise.reject(error);
});
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, params)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data);
      }).catch((error) => {
        reject(error)
      })
  })
}

export default{
  url : config.api,
  /*获取城市名称*/
   getCityName( params ){
     return  post('/address/getAddress', params);
   },
  /*获取未开通的二级城市*/
  queryAllCityList( params ){
    return  post('/address/queryAllCityList', params);
  },
  /*手机登录*/
  loginByMobile( params ){
    return  post('/login/loginByMobile', params);
  },
  /*密码登录*/
  loginByPassword( params ){
    return  post('/login/loginByPassword', params);
  },
  /*图形验证码*/
  patchca( params ){
    return  post('/patchca.png', params);
  },
  /*短信验证码*/
  sendSMS( params ){
    return  post('/register/sendSMS', params);
  },
  /*注册和登录时对手机号进行是否存在的校验*/
  checkMobileExists( params ){
    return  post('/register/checkMobileExists', params);
  },
  /*注册时第一页的信息填写*/
  customerRegister( params ){
    return  post('/register/customerRegister', params);
  }
}
