<template lang="html">
 <div class="">
   <!--登录页简单的头部-->
  <loginHead></loginHead>
<!--登录页简单的头部 end-->
<!--登陆  -->
<!-- <loginCon></loginCon> -->
<router-view></router-view>
<!--底部信息栏-->
<loginFooter></loginFooter>
 </div>
</template>

<script>
// 登陆头部
import loginHead from '@/login/longin_head';
// 登陆内容
// import loginCon from '@/login/login_con';
// 登陆底部
import loginFooter from '@/login/login_footer';

export default {
components:{
loginHead,
loginFooter
}
}
</script>

<style lang="css" scoped>
/*.container1 {
    width: 1200px;
    margin-right: auto;
    margin-left: auto;
}*/
/*.container {
    width: 1200px;
    margin-right: auto;
    margin-left: auto;
    padding-top: 108px;
}*/
/*.h-header2 .h-logo {
    width: 260px;
    height: 80px;
    margin-top: 30px;
}
.h-header .user-tit {
    margin: 50px 0 0 20px;
    font-size: 22px;
    border-left: 1px dashed #e8e8e8;
    padding-left: 20px;
}*/
/*.container_bg{
    width: 100%;
    height: 670px;
    background: red;
    background: url(../assets/img/login_bg.jpg) 50%  100% no-repeat;
}*/
/*登陆*/
/*.user_login{

  background: #fff;
width: 462px;
}
.login_box{
  padding: 40px 26px;
}
.box_con{
  position: relative;
  padding: 30px;
border: 1px solid #c0c0c0;
}
.y_logintab{padding: 0 0 20px;overflow: hidden;line-height: 25px;}
.y_logintab h2{font:20px "Microsoft YaHei";color:#333;font-weight: 800;}

.zhang{
  font-size: 14px;font-weight: 600;
}
.zhe{
  color: #3894e0;
}
 .form-control {
    float: left;
    width: 88%;
    padding-left: 11%;
    padding-right: 0;
    /* border-color: transparent; */
    /*font-size: 14px;
    height: 20px;*/
/*}
.icon {
    width: 32px;
    height: 32px;
    position: absolute;
    left: 0px;
    background: url(../assets/img/icons/bg_in.png) no-repeat 10px -276px;
}
.icon2{
  width: 32px;
  height: 32px;
  position: absolute;
  left: 0px;
  background: url(../assets/img/icons/bg_in.png) no-repeat 10px -312px;
}
.icon3{
  width: 32px;
  height: 32px;
  position: absolute;
  left: 0px;
  background: url(../assets/img/icons/bg_in.png) no-repeat 10px -276px;
}
.form-group {
    margin-bottom: 0;
    overflow: hidden;
    width: auto;
    line-height: 36px;
    zoom: 1;
    position: relative;
}
.y_yzmgrop .form-control {
    float: left;
    width: 95px;
}
.form-group p {
    height: 24px;
    line-height: 24px;
    overflow: hidden;
    clear: both;
    color: #ff604c;
    margin-right: 25px;
}
.form-group p .ts {
      line-height: 24px;
    color: #ff604c;
    display: none;
    background: url(../assets/img/icons/bg_in.png) no-repeat 6px -356px;
    padding-left: 30px;
}
.change {
    margin-left: 10px;
    color: #999;
    line-height: 36px;
}
.y_suskjbx{
  padding: 16px 0;
}

.y_downrt {
  color:#fff;
  width: 490px;
  height: 390px;
  position: relative;
  margin: 0px 110px;
}
 .y_downrt h2 {
  font-size: 74px;
  font-weight: 500;
}
 .y_downrt h3 {
  font-size: 36px;
}
 .y_down_tab {
  height: 216px;
  background: #32b9ff;
  margin-top: 20px;
}
.y_downewm {
  margin: 15px 20px;
}
 .y_downewm .y_down_img {
    width: 140px;
    height: 140px;
    display: none;
    padding: 10px;
    background: #fff;
}
 .y_downewm .y_down_img img {
  width: 100%;
}
 .y_down_tab .tab {
  margin: 10px 20px;
}
.y_down_tab .tab .app {
  margin: 20px 0;
}
 .y_down_tab .tab .app img {
  cursor: pointer;
}*/
/*底部*/
/*.footer-bottom {
    clear: both;
    line-height: 25px;
    text-align: center;
    color: #999999;
    padding: 25px 0 50px !important;
}
.content{
    width: 1200px;
    margin-right: auto;
    margin-left: auto;
}*/
</style>
