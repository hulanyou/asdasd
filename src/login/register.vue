<template lang="html">
  <div class="">
<!-- 注册 -->
<div class="layout border-b">
	<div class="container">
		<div class="y_resigetcont">
			<div class="y_resiget_r">
				<p class="ts">已有账号，<router-link to="/login" tag="a" class="f_color1">>直接登录 &gt;&gt;</router-link></p>
				<div class="y_reminder">
					温馨提示：
					<p>
					感谢您注册云朵益生终生健康管理平台，该平台将为您提供 终生健康检查档案、治疗康复管理、预防免疫保健、健康保险理 赔等服务。您所看过病的医院将会与该平台的数据对接，为您提供更 准确的健康管理服务。为了确保数据的安全和真实，请您按照以上 的内容填写！ </p>
				</div>
			</div>
			<div class="y_resiget">
				<div class="form-group">
					<label class="control-label" for="resigetname"><span class="y_required">*</span>账户名：</label>
					<input type="text" required="" class="form-control" id="resigetname" placeholder="请输入账户名" value="">
					<p><span class="ts correct" style="display:block">请输入账户名</span></p>
				</div>
				<!-- <div class="form-group">
					<label class="control-label" for="resigetname"><span class="y_required">*</span>真实姓名：</label>
					<input type="text" required="" class="form-control" id="resigetname" placeholder="请输入真实姓名" value="云朵益生">
					<p><span class="ts errow" style="display:block">请输入真实姓名</span></p>
				</div>
				<div class="form-group">
					<label class="control-label" for="userid"><span class="y_required">*</span>身份证号：</label>
					<input type="text" required="" class="form-control" id="userid" placeholder="请输入身份证号" value="frsdfrdsrg">
					<p><span class="ts errow" style="display:block">请填写正确的身份证号</span></p>
				</div> -->

				<div class="form-group">
					<label class="control-label" for="resigetpas"><span class="y_required">*</span>设置密码：</label>
					<input type="password" required="" class="form-control" id="resigetpas" placeholder="密码为6-20个字符,可由英文、数字及符号组成" value="">
					<p>
						<!-- <span class="ts correct" style="display:block"></span>
			          <label class="leve_3">
				          安全程度<span class="bg_1">低</span>
				          <span class="bg_2" style="display:none">中</span>
				          <span class="bg_3" style="display:none">高</span>
			          </label> -->
          <span class="ts errow" style="display:block">密码不能全部是数字或字母,长度必须大于等于8且不能输入空格</span>
					</p>
				</div>
				<div class="form-group">
					<label class="control-label" for="resigetname"><span class="y_required">*</span>手机号码：</label>
					<input type="text" required="" class="form-control" id="resigetname" placeholder="请输入手机号码">
					<p><span class="ts errow" style="display:block">请填写正确的手机号码</span></p>
				</div>

				<!-- <div class="form-group y_mobelyz">
					<label class="control-label" for="resigetmobeltxt"><span class="y_required">*</span>短信验证码：</label>
					<input type="text" required="" class="form-control" id="resigetmobeltxt">
					<a class="btn btn-custom4" href="#">获取短信验证码</a>
					<p><span class="ts errow">请输入收到的验证码</span></p>
				</div> -->
				<div class="y_resetbtnbx">
					<p class="y_yhzclab"><input type="checkbox">我已阅读并同意<a class="f_color1" data-toggle="modal" href="#modal-eamil-form" @click="ishide=!ishide">《用户注册协议》 </a></p>
					<!-- <a href="resiget_success.html" class="btn btn-custom">下一步</a> -->
          <router-link to="/login/register2" tag="a"  class="btn btn-custom">下一步</router-link>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- 注册end -->

<!-- 用户协议 -->
<div class="y_check" id="modal-eamil-form" tabindex="-1" role="dialog" v-show="ishide" style="position:absolute;top:0;">
	<form method="get" action="#">
		<div class="modal-dialog">
			<div class="modal-content">
				<!-- 标题 -->
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true" @click="ishide=!ishide">&times;</span></button>
					<h4 class="modal-title">协议说明</h4>
				</div>
				<!-- 中间结构 -->
				<div class="modal-body">
					<div class="modal-xy">
						<b>用户注册协议</b><br />
						本协议是云朵益生平台服务等相关事宜所订立的契约，请您仔细阅读本注册协议，您点击"同意并继续"按钮后，本协议即构成对双方有约束力的法律文件。<br />
						第1条 本站服务条款的确认和接纳<br />
						1.1本站的各项电子服务的所有权和运作权归云朵益生所有。用户同意所有注册协议条款并完成注册程序，才能成为本站的正式用户。用户确认：本协议条款是处理双方权利义务的契约，始终有效，法律另有强制性规定或双方另有特别约定的，依其规定。<br />
						1.2用户点击同意本协议的，即视为用户确认自己具有享受本站服务、下单购物等相应的权利能力和行为能力，能够独立承担法律责任。<br />
						1.3如果您在18周岁以下，您只能在父母或监护人的监护参与下才能使用本站。<br />
						1.1本站的各项电子服务的所有权和运作权归云朵益生所有。用户同意所有注册协议条款并完成注册程序，才能成为本站的正式用户。用户确认：本协议条款是处理双方权利义务的契约，始终有效，法律另有强制性规定或双方另有特别约定的，依其规定。<br />
						1.2用户点击同意本协议的，即视为用户确认自己具有享受本站服务、下单购物等相应的权利能力和行为能力，能够独立承担法律责任。<br />
						1.3如果您在18周岁以下，您只能在父母或监护人的监护参与下才能使用本站。<br />
						1.1本站的各项电子服务的所有权和运作权归云朵益生所有。用户同意所有注册协议条款并完成注册程序，才能成为本站的正式用户。用户确认：本协议条款是处理双方权利义务的契约，始终有效，法律另有强制性规定或双方另有特别约定的，依其规定。<br />
						1.2用户点击同意本协议的，即视为用户确认自己具有享受本站服务、下单购物等相应的权利能力和行为能力，能够独立承担法律责任。<br />
						1.3如果您在18周岁以下，您只能在父母或监护人的监护参与下才能使用本站。<br />
						1.1本站的各项电子服务的所有权和运作权归云朵益生所有。用户同意所有注册协议条款并完成注册程序，才能成为本站的正式用户。用户确认：本协议条款是处理双方权利义务的契约，始终有效，法律另有强制性规定或双方另有特别约定的，依其规定。<br />
						1.2用户点击同意本协议的，即视为用户确认自己具有享受本站服务、下单购物等相应的权利能力和行为能力，能够独立承担法律责任。<br />
						1.3如果您在18周岁以下，您只能在父母或监护人的监护参与下才能使用本站。<br />
					</div>
					<div class="y_resetbtnbx"><button class="btn btn-custom btn-block" @click="ishide=!ishide">同意</button></div>
				</div>
			</div><!-- End .modal-content -->
		</div><!-- End .modal-dialog -->
	</form>
</div><!-- End 用户协议 -->

  </div>
</template>

<script>
export default {
  data(){
  return{
  ishide:false
}
},
  components:{

  }
}
</script>

<style lang="css" scoped>
/*用户注册*/
.y_resigetcont{width: 1200px; background: #fff; border: 1px solid #e8e8e8; border-top: 2px solid #10acff; padding: 40px 0 60px 0; box-shadow: 0 0 10px #ccc; overflow: hidden; margin: 60px auto 60px; padding-top: 40px;}
.y_resiget{padding: 80px 0 0 276px;float:left;width: 580px;}
.y_resiget .form-group{margin-bottom: 25px;padding-left: 30px;overflow:hidden;width:auto;line-height: 36px;zoom:1;}
.y_resiget .control-label{float:left;width:105px;text-align:right;}
.y_resiget .form-control{width: 42%;float:left;height: 14px;line-height: 14px;padding:10px;font-size:14px;color:#333;}
.y_resiget .form-control:focus{border: 1px solid #179aff;  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6); }
.y_resiget .form-group p{height: 36px;line-height: 36px;overflow:hidden;color:#ff604c;float: left;}
.y_resiget .form-group p label{float: left;font-weight:lighter;text-align:center;margin-right: 28px;color: #666;margin-left: 10px;}
.y_resiget .form-group p label span{display:inline-block;height:15px;line-height:15px;color:#666;margin-left: 10px;}
.y_resiget .form-group p span.ts{display:none;float: left;}
/*.y_resiget .form-group p span.errow{background: url(../assets/img/icons/bg_in.png) no-repeat  10px -349px; padding-left: 30px; }*/
/*.y_resiget .form-group p span.correct{background: url(../assets/img/icons/bg_in.png) no-repeat  10px -384px; width: 30px; height: 30px; }*/
.y_resiget .y_yzmgrop img{float: left;height: 36px;margin-left: 10px;margin-right: 10px;}
.y_resiget .w_60{width:60px;}
.y_resiget .y_resetbtnbx{width:308px;padding: 0px 0 20px 133px;}
.y_resiget .y_resetbtnbx .btn{border-radius: 0;padding: 8px 0;width: 84.5%;}

.y_resiget .y_required{color:#ff604c;margin-right:6px;vertical-align:middle;font-size:14px;}
.y_resiget .y_mobelyz .form-control{width: 109px;margin-right:12px;}

.y_resiget .y_mobelyz .btn{border-radius: 0; float: left; padding: 0; width: 116px; line-height: 34px;}
.y_resiget .y_yhzclab{padding-bottom:20px;}
.y_check{
  margin-top: 180px;
left: 182px;
background: #fff;
}
.y_check .modal-dialog{width:670px;margin: 0 auto;}
.y_check .form-group{padding-left:10px;}

/*.y_checkemail .modal-body{padding-top:10px;padding-bottom:20px;:}*/
.y_check .y_resetbtnbx{width:172px;margin:0 auto;}

.y_resiget_r{float:right;width: 270px;margin: 30px 40px 0 0;color: #999;border-left: 1px solid #ddd;padding-left: 20px;height: 270px;padding: 15px 0 15px 30px;}
.y_resiget_r .ts{color: #333; border-bottom: 1px dotted #e8e8e8;font-size: 14px;overflow: hidden;line-height: 40px;margin-bottom: 10px;}
.y_resiget_r div.y_copeweb{line-height: 25px;font-size: 14px;}

.y_reminder{line-height: 30px;}
.y_reminder p{color: #666; line-height: 22px; }

.y_resiget .form-group  span.bg_1{color: #ff0001;font-weight: bold;} /* 安全级别 低*/
.y_resiget .form-group  span.bg_1{color: #ff7b24; font-weight: bold; }/*安全级别 中*/
.y_resiget .form-group 	span.bg_3{color: #32b16c;font-weight: bold;}/*安全级别 高*/
.form-group p .ts {
      line-height: 24px;
      color: #ff604c;
      display: none;
      background: url(../assets/img/icons/bg_in.png) no-repeat 6px -356px;
      padding-left: 30px;
}
</style>
