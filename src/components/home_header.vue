<template>
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
      <div class="h-logo fl">
          <router-link to="/" tag="a"><img src="../assets/img/logo.jpg" alt=""></router-link>
      </div>
      <div class="h-nav2 fl">
        <administration></administration>
      </div>
      <div class="search fr flex">
        <div class="search_sel">
          <el-select v-model="value" placeholder="请选择" style="width:110px;">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            >
          </el-option>
          </el-select>
        </div>
        <input class="inp_srh" name="keyboard"  placeholder="请输入您要搜索的内容" >
        <a href="##" class="btn_srh"  name="submit">搜索</a>
      </div>
    </div>
  </div>
  <!-- 头部搜索框 end -->

  <!--头部导航条-->
  <div class="h-banner layout">
    <div class="container">
      <navbar></navbar>
    </div>
  </div>
  </div>
  <!--头部导航条 end-->
<router-view class="content"></router-view>
<!-- 底部 -->
<g_footer></g_footer>
</div>
</template>
<script>
  // 登陆
import login from '@/components/login';
  // 个人账户
import people_account from '@/components/people_account';
  // 健康报告
import healthreport from '@/components/healthreport';
// 管理
import administration from '@/components/administration';
// 导航
import navbar from '@/components/navbar';
//公共底部
import g_footer from '@/components/g_footer'
export default {
  data() {
     return {
       options: [{
         value: '选项1',
         label: '药品'
       }, {
         value: '选项2',
         label: '医生'
       }, {
         value: '选项3',
         label: '医院'
       }, {
         value: '选项4',
         label: '疾病百科'
       }],
       value: ''
     }
   },
  //  注册组件
  components:{
    // 登陆
    login,
    // 个人账户
    people_account,
    // 健康报告
    healthreport,
    // 管理
    administration,
    // 导航栏
    navbar,
    // 底部
    g_footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
.h-header .h-logo {
  width: 22.5%;
  height: 80px;
  margin-top: 30px;
}
.h-header .h-logo a {
  display: block;
  width: 100%;
  height: 100%;
}
.h-header .h-seach {
  overflow: hidden;
  width: 33%;
  margin-top: 45px;
}
.h-header .h-seach input {
  float: right;
  font-size: 16px;
  color: #666666;
  width: 65%;
  height: 38px;
  line-height: 38px;
  padding: 0px 1%;
  border: 2px solid #10acff;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.h-header .h-seach input:focus {
  -webkit-box-shadow: inset 0px 0px 15px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: inset 0px 0px 15px rgba(0, 0, 0, 0.2);
  box-shadow: inset 0px 0px 15px rgba(0, 0, 0, 0.2);
}
.h-header .h-seach .btn {
  float: right;
  font-size: 18px;
  width: 30%;
  height: 40px;
  line-height: 40px;
  padding: 0;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
}
.h-header .h-nav2 {
  width: 340px;
  margin: 43px 0 0 5.8%;
}
.h-header .h-nav2 .btn {
  font-size: 14px;
  color: #10acff;
  line-height: 20px;
  padding: 0;
  display: inline-block;
  margin-left: 5%;
  margin-bottom: 5px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.h-header .h-nav2 .btn:hover {
  text-decoration: underline;
  color: #0b84e2;
}
.h-header .user-tit {
  margin: 50px 0 0 20px;
  font-size: 22px;
  border-left: 1px dashed #e8e8e8;
  padding-left: 20px;
}
.h-header .search {
  border: 2px solid #10acff;
  height: 40px;
  margin-top: 45px;
  width: 395px;
}
.h-header .search select {
  display: none;
}
.h-header .search .select_box {
  display: block !important;
  font-size: 12px;
  color: #999;
  width: 75px;
  line-height: 35px;
  float: left;
  position: relative;
  z-index: 99;
  margin-right: 10px;
}
.h-header .search .select_showbox {
  height: 35px;
  /*background: url(../address/img/icons/bg_in.png) no-repeat -39px -331px;*/
  text-align: center;
}
.h-header .search .select_showbox.active {
  /*background: url(../address/img/icons/bg_in.png) no-repeat -48px -300px;*/
}
.h-header .search .select_option {
  border: 2px solid #10acff;
  border-top: none;
  display: none;
  left: -2px;
  top: 35px;
  position: absolute;
  z-index: 99;
  background: #fff;
}
.h-header .search .select_option li {
  width: 75px;
  cursor: pointer;
  text-align: center;
}
.h-header .search .select_option li.selected {
  background-color: #F3F3F3;
  color: #999;
}
.h-header .search .select_option li.hover {
  background: #BEBEBE;
  color: #fff;
}
.h-header .search input.inp_srh,
.h-header .search .btn_srh {
  border: none;
  background: none;
  height: 40px;
  line-height: 35px;
  float: left;
}
.h-header .search input.inp_srh {
  outline: none;
  width: 240px;
}
.h-header .search .btn_srh {
  background: #10acff;
  color: #FFF;
  font-family: "微软雅黑";
  font-size: 15px;
  width: 60px;
  float: right;
  text-align: center;
}
.h-header2 {
  height: 130px;
}
.h-header2 .container {
  width: 980px;
}
.h-header2 .h-logo {
  width: 260px;
}
.h-header-fixed {
  position: fixed;
  top: 0px;
  z-index: 2222;
  left: 0px;
}
.h-banner-fixed {
  position: fixed;
  top: 100px;
  z-index: 2222;
  left: 0px;
  border-bottom: 1px solid #e8e8e8;
  -webkit-box-shadow: 0 4px 8px rgba(140, 140, 140, 0.2);
  -moz-box-shadow: 0 4px 8px rgba(140, 140, 140, 0.2);
  box-shadow: 0 4px 8px rgba(140, 140, 140, 0.2);
}
/*头部导航条*/
.h-banner {
  width: 100%;
  height: 40px;
  margin-top: 10px;
  border-bottom: 2px solid #999999;
  background: #fff;
  clear: both;
}
.h-banner a {
  display: block;
  font-size: 18px;
  float: left;
  color: #333333;
  height: 40px;
  line-height: 40px;
  padding: 0 15px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.h-banner a:hover,
.h-banner a.active {
  color: #179aff;
}
</style>
