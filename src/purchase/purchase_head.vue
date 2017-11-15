<template lang="html">
  <div class="">
    <!--头部登录条-->
    <div class="header">
     <div class="h-top layout">
      <div class="container">
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
    </div><!--头部登录条 end-->

    <!--头部搜索框-->
    <div class="h-header layout">
      <div class="container">
        <h3 class="y-logo fl">
            <router-link to="/" tag="a"><img src="../assets/img/logo.jpg" alt=""></router-link>
        </h3>
        <div class="cart_step cart_step_1 three">
      		<div></div>
      		<ul>
      			<li>1.我的购物车</li>
      			<li>2.填写核对订单信息</li>
      			<li>3.成功提交订单</li>
      		</ul>
	      </div>
      </div>
    </div>
  </div>
    <!-- 头部搜索框 end -->
  <div class="border-b layout purchase">
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
  <pfooter></pfooter>
  </div>
</template>

<script>
// 登陆
import login from '@/components/login';
// 个人账户
import people_account from '@/components/people_account';
// 健康报告
import healthreport from '@/components/healthreport';
// 底部
import pfooter from '@/purchase/purchase_footer'
export default {
  //  注册组件
  components:{
    // 登陆
    login,
    // 个人账户
    people_account,
    // 健康报告
    healthreport,
    // 底部
    pfooter
  }
}
</script>

<style lang="css" scoped>
.content{
  margin-top: 200px;
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
/*头部搜索框*/
.h-header {
  height: 110px;
  background: #fff;
  /* 可删除 搜索*/
}
.h-header .y-logo {
  width: 22.5%;
  height: 80px;
  margin-top: 30px;
}
.h-header .y-logo a {
  display: block;
  width: 100%;
  height: 100%;
}
/*进度条*/
.cart_step {
    width: 481px;
    float: right;
    margin-top: 38px;
}
.cart_step div {
    width: 100%;
    height: 23px;
    background: url(../assets/img/cart_bg2.jpg) no-repeat;
}
.cart_step.three li {
    width: 33%;
}
.cart_step li {
    width: 25%;
    float: left;
    text-align: center;
    padding-top: 5px;
}
/*内容*/
.purchase{
  margin-top: 200px;
}
</style>
