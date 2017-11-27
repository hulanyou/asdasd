<template lang="html">
  <div class="con">
    <div class="h-top layout">
     <div class="container clearfix">
       <div class="fl login-info flex">
         您好,
         <login></login>
       </div>
       <div class="quick-menu fr">
         <people_account></people_account>
       </div>
       <div class="fr quick-report flex">
         健康报告：
         <healthreport></healthreport>
       </div>
     </div>
     </div>
     <!--新增加头部  -->
     <div class="h-header layout">
       <div class="container">
         <div class="flex flex-ali_i_center pad_top">
           <div class="h-logo">
               <router-link to="/" tag="a"><img src="../assets/img/xlogo.png" alt=""></router-link>
           </div>
           <div class="h-center flex">
             <router-link to="/" tag="a" class="btn btn-link">首页</router-link>
             <!-- <a class="btn btn-link" href="/ydysmall/">首页</a> -->
             <div class="account_setting">
    					<a class="btn btn-link" href="javascript:;">账户管理 <i class="fa fa-angle-down tran"></i></a>
    					<ul class="dropdown-menu">
    						<li><a href="/ydysmall/usercenter/customercomplex/toModifyCustomerInfo" target="mainFrame"><span class="text">个人信息</span></a></li>
    						<li>
    							<a href="/ydysmall/branchoffice/account/toMyInformation" target="mainFrame"><span class="text">分公司资料</span> </a>

    						</li>
    						<li><a href="/ydysmall/usercenter/customeraddress/toAddressList" target="mainFrame"><span class="text">收货地址</span></a></li>
    						<li><a href="/ydysmall/usercenter/customercomplex/tocustomerUpdate/ydCustomerMobileMgt?msg=" target="mainFrame"><span class="text">安全中心</span></a></li>
    					</ul>
  				    </div>
              <a class="btn btn-link y_xzcur">消息<i class="fa posi">1</i></a>
           </div>
           <div class="h-last">
              <!-- <div class="user-center">
                <img src="../assets/img/null12.png" alt="">
              </div> -->
           </div>
         </div>
       </div>
     </div>
     <div class="container y_mt10">
         <router-view></router-view>
       <!-- <div class="user_tab_con clearfix">
        <ul class="user_tab clearfix" role="tablist">
            <li class="flex active"><router-link to="" tag="a">供应商</router-link></li>
            <li class=""><router-link to="" tag="a">区域事业部</router-link></li>
            <li class=""><router-link to="" tag="a">全国事业部</router-link></li>
        </ul>
      </div> -->
     </div>
  </div>
</template>

<script>
// 登陆
import login from '@/components/login';
// 个人账户
import people_account from '@/components/people_account';
// 健康报告
import healthreport from '@/components/healthreport';
export default {
  //  注册组件
  components:{
    // 登陆
    login,
    // 个人账户
    people_account,
    // 健康报告
    healthreport
  }
}
</script>

<style lang="css" scoped>
.con{
  background: #e8e8e8;
}
.header{
  position: fixed;
  top: 0;
  left: 0;
  z-index:10;
  background: #ffffff;
  width: 100%;
}
.h-top {
  border-top: 1px solid #e8e8e8;
  border-bottom: 1px solid #e8e8e8;
  font-size: 12px;
  color: #999999;
  background: #f2f2f2;
  height: 38px;
  line-height: 38px;
  width: 100%;
}
.h-top a {
  display: inline-block;
  color: #999999;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.h-top a:hover {
  color: #179aff;
}
.h-top .login-info a {
  margin-right: 20px;
}
.h-top .quick-menu {
  position: relative;
  margin-left: 10px;
}
.h-top .quick-menu:before {
  content: "";
  display: block;
  overflow: hidden;
  width: 1px;
  height: 40%;
  border-left: 1px solid #ccc;
  position: absolute;
  top: 32%;
}
.h-top .quick-menu a {
  margin-left: 20px;
}
.h-top .quick-report {
  color: #666666;
}
.h-top .quick-report a {
  color: #333333;
  margin-right: 10px;
}
.h-top .quick-report a:hover {
  color: #0b84e2;
}
.container {
  margin-right: auto;
  margin-left: auto;
  padding: 0 ;
  width: 1200px;
}
.top-bar {
    padding: 5px 0;
    background-color: #25a3f7;
    height: 80px;
}
.h-header{
  background-color: #25a3f7;
}
.pad_top{
  padding: 16px 0;
}
.btn-link{
    color: #fff;
    font-size: 16px;
    position: relative;
}
.account_setting {
    display: inline-block;
    position: relative;
}
.fa {
    display: inline-block;
    font-family: FontAwesome;
    font-style: normal;
    font-weight: normal;
    /*margin-top: 10px;*/

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
}
.tran{
    transform:rotate(180deg);
}
.fa-angle-down:before {
    content: "^";
    position: absolute;
    left: -6px;
    top: -2px;

}
.account_setting .dropdown-menu {
    top: 45px;
    min-width: 0;
    width: 102px;
    left: 0;
}
.account_setting .dropdown-menu a {
    font: 12px 'microsoft yahei';
    padding: 8px 0 8px 22px;
}
.dropdown-menu>li>a {
    display: block;
    padding: 3px 20px;
    clear: both;
    font-weight: 400;
    line-height: 1.42857143;
    color: #333;
    white-space: nowrap;
}
.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    display: none;
    float: left;
    min-width: 160px;
    padding: 5px 0;
    margin: 2px 0 0;
    font-size: 14px;
    text-align: left;
    list-style: none;
    background-color: #fff;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    border: 1px solid #ccc;
    border: 1px solid rgba(0,0,0,.15);
    border-radius: 4px;
    -webkit-box-shadow: 0 6px 12px rgba(0,0,0,.175);
    box-shadow: 0
  }
.h-center{
  padding-left: 320px;
}
.posi{
    font-style: normal;
    display: block;
    position: absolute;
    top: -10px;
    right: -18px;
    width: 22px;
    height: 22px;
    line-height: 22px;
    color: #1b72c2;
    text-align: center;
    overflow: hidden;
    font-size: 12px;
    background: #fff;
    border-radius: 100%;
    -webkit-transition: transform .2s ease-in 0s;
    -moz-transition: transform .2s ease-in 0s;
    transition: transform .2s ease-in 0s;
}
.account_setting, .y_xzcur{
  padding-left: 60px;
}
.user_tab_con {
    height: 40px;
    border-bottom: 2px solid #10adff;
    margin-top: 14px;
}
.user_tab {
    display: flex;
    height: 100%;
    line-height: 40px;
    text-align: center;
}
.user_tab li{
  width: 160px;
  text-align: ccenter;
  display: block;
  position: relative;
}
.user_tab li a:hover{
  display: block;
  background: #25a3f7;
  color: #fff;
}
/*.user_tab li a:hover{
  color: #fff;
}*/
.user_tab li::after{
  content: 'I';
  position: absolute;
  right: 0px;
  color: #ccc;
}
.user_tab .active{
  background: #25a3f7;
}
.user_tab li.active a {
    background: #25a3f7;
    color: #fff;
}
</style>
