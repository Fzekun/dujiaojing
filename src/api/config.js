const config = {
  //api: "http://192.168.0.29:8080/web.api",
  api: "http://wap.glacend.net",
  // domainUrl: "0ce37dd6b927730161a1e559c2336d0a",
  // imgUrl: "http://img.test.yimayholiday.com/v1/tfs/",
  // linkUrl: 'http://s0.test.jiuxiulvxing.com/Test/integrallottery/dist/',
  // rootPath: 'http://s0.test.jiuxiulvxing.com/Test/integrallottery/',
  // outLinkUrl: 'http://m.test.jiuxiulvxing.com/',
  // contpointersApi: 'http://test.log.jiuxiulvxing.com/newlogwithgzip.jsp',
  // run_env:'test', /* 添加运行环境判断 */
  // wxshare:"http://weixin.test.jiuxiulvxing.com/jssdk/getconfig/46",
  // addressListUrl: "http://m2.test.jiuxiulvxing.com/view/acount/receiverlist2.html", // 收货地址
  // vertificationImageUrl:"http://act.secondtest.jiuxiulvxing.com/",
  // shareImgUrl : 'http://s0.test.jiuxiulvxing.com/Test/integrallottery/static/img/weixin_share.jpg',
  // wxsharedebug  : true
},
_linkUrl = window.location.href;

//预发
if (_linkUrl.indexOf("p.pre.jiuxiulvxing.com") != -1) {
  _wap_config = {
    api: "http://api.pre.jiuxiulvxing.com/web.api",
    // domainUrl: "0ce37dd6b927730161a1e559c2336d0a",
    // imgUrl: "http://img.yimayholiday.com/v1/tfs/",
    // linkUrl: 'http://p.pre.jiuxiulvxing.com/integrallottery/dist/',
    // rootPath: 'http://p.pre.jiuxiulvxing.com/integrallottery/dist/',
    // outLinkUrl: 'http://m.pre.jiuxiulvxing.com/',
    // contpointersApi: 'http://log.jiuxiulvxing.com/newlogwithgzip.jsp',
    // run_env:'pre', /* 添加运行环境判断 */
    // wxshare:"http://wxapi.pre.jiuxiulvxing.com/jssdk/getconfig/47",
    // addressListUrl: "http://m2.pre.jiuxiulvxing.com/view/acount/receiverlist.html", // 收货地址
    // vertificationImageUrl:"http://act.pre.jiuxiulvxing.com/",
    // shareImgUrl : 'http://p.pre.jiuxiulvxing.com/integrallottery/static/img/weixin_share.jpg',
    // wxsharedebug  : false
  }
}
//线上
if (_linkUrl.indexOf("malimali.com") != -1) {
  _wap_config = {
    api: "http://api.jiuxiulvxing.com/web.api",
    // domainUrl: "0ce37dd6b927730161a1e559c2336d0a",
    // imgUrl: "http://img.yimayholiday.com/v1/tfs/",
    // linkUrl: 'http://p.jiuxiulvxing.com/integrallottery/dist/',
    // rootPath: 'http://p.jiuxiulvxing.com/integrallottery/',
    // outLinkUrl: 'http://app.jiuxiulvxing.com/',
    // contpointersApi: 'http://log.jiuxiulvxing.com/newlogwithgzip.jsp',
    // run_env:'online', /* 添加运行环境判断 */
    // wxshare:"http://wxapi.jiuxiulvxing.com/jssdk/getconfig/46",
    // addressListUrl: "http://m2.jiuxiulvxing.com/view/acount/receiverlist.html", // 收货地址
    // vertificationImageUrl:"http://act.jiuxiulvxing.com/",
    // shareImgUrl : 'http://p.jiuxiulvxing.com/integrallottery/static/img/weixin_share.jpg',
    // wxsharedebug  : false
  }
}
export default config;
