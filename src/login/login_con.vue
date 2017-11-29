<template lang="html">
  <div class="">
    <!--登陆  -->
    <div class="container_bg">
      <div class="container flex">
        <div class="user_login">
          <div class="login_box">
            <div class="box_con">
              <div class="y_logintab flex flex_jus_between ">
    					<h2>用户登录</h2>
              <p><span class="zhang">还有没有账号？</span><router-link to="/login/register" tag="a" class="zhe">免费注册</router-link>
    </p>
    				</div>
    				<form method="get" action="#">
    					<div class="form-group">
    						<em class="icon"></em>
    						<input type="text" required="" placeholder="用户名/手机/邮箱" class="form-control" id="sususername">
    						<p><span class="ts" style="display:block;">用户名输入不正确</span></p>
    					</div>
    					<div class="form-group">
    						<em class="icon2"></em>
    						<input type="password" required="" placeholder="密码" class="form-control" id="sususerpasd">
    						<p><span class="ts">密码输入不正确</span></p>
    					</div>
    					<!-- <div class="form-group y_yzmgrop">
    						<div class="flex">
    							<em class="icon3"></em>
    							<input type="text" required="" placeholder="验证码" class="form-control" id="sususeryzm">
    							<a href="#"><img src="../assets/img/adimg/yzm.png"></a>
    							<span class="change">看不清,<a class="f_color2" href="#">换一张</a></span>
    							<p><span class="ts">验证码不正确</span></p>
    						</div>
    					</div> -->
    					<div class="y_suskjbx">
    						<label class="fl"><input type="checkbox">自动登录</label>
    						<!-- <a href="resiget.html" class="fr ">免费注册</a> -->
    						<a  href="forgot_assword1.html" class="fr m_mr20">忘记密码</a>

    					</div>
    					<button id="y_loadlogin" class="btn btn-custom btn-block m_mt20" data-loading-text="登 录 中...">登 录</button>
    				</form>
            </div>
          </div>
        </div>
        <div class="y_downrt">
        				<h2>云朵益生</h2>
        				<h3>提供个人终生健康管理服务</h3>
        				<div class="y_down_tab clearfix">
        					<div class="fl y_downewm">
        						<div class="y_down_img animated fadeInLeft" style="display: block;">
        							<img src="../assets/img/scan.png">
        						</div>
        						<p>手机扫描二维码快速下载</p>
        					</div>
        					<div class="fr tab">
        						<div class="app"><a href="https://itunes.apple.com/cn/app/云朵益生/id1225796551?mt=8" target="_blank"><img src="../assets/img/app1.jpg"></a></div>
        						<div class="app active"><a href="http://android.myapp.com/myapp/detail.htm?apkName=com.netease.nim.yunduo" target="_blank"><img src="../assets/img/app2.jpg"></a></div>
        					</div>
        				</div>
        			</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.container_bg{
    width: 100%;
    height: 670px;
    background: red;
    background: url(../assets/img/login_bg.jpg) 50%  100% no-repeat;
}
.container {
    width: 1200px;
    margin-right: auto;
    margin-left: auto;
    padding-top: 108px;
}
/*登陆*/
.user_login{

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
    font-size: 14px;
    height: 20px;
}
.icon {
    width: 32px;
    height: 32px;
    position: absolute;
    left: 14px;
    background: url(../assets/img/icons/bg_in.png) no-repeat 10px -276px;
}
.icon2{
  width: 32px;
  height: 32px;
  position: absolute;
  left: 14px;
  background: url(../assets/img/icons/bg_in.png) no-repeat 10px -312px;
}
.icon3{
  width: 32px;
  height: 32px;
  position: absolute;
  left: 14px;
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
}

</style>
