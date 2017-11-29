<template lang="html">
  <div class="">
    <form class="form-horizontal y_setpassd form-validate bv-form">
      <button type="submit" class="bv-hidden-submit" style="display: none; width: 0px; height: 0px;"></button>
<section class="h_testtit_new ">
<div class="clearfix">
<span class="col-sm-2"><label class="f_color1 z_ml10_r">*</label>仓库名称</span>
<span class="">
  <input type="text" placeholder="请填写仓库名称" class="inp"/>
  <i class="form-control-feedback bv-no-label"  style="display: none;"></i><small class="help-block"   style="display: none;">请填写仓库名称!</small></span>
</div>
<div class="clearfix">
<span class="col-sm-2"><label class="f_color1 z_ml10_r">*</label>仓库类型</span>
<span class="col-sm-6 has-feedback has-success">
<select name="warehouseType" class="col-sm-3 selec">
	<option value="">请选择仓库类型</option>
	<option value="RDC">RDC仓库</option>
	<option value="CDC">CDC仓库</option>
	<option value="DC">DC仓库</option>
</select><i class="form-control-feedback bv-no-label glyphicon glyphicon-ok"  style="display: block;"></i>
<small class="help-block" style="display: none;">请选择仓库类型!</small></span>
</div>
<div class="clearfix">
<span class="col-sm-2"><label class="f_color1 z_ml10_r">*</label>启用状态</span>
<span class="col-sm-6">
<label class="option2"><input type="radio" name="status" checked="checked" value="0">启用</label>
<label class="option2"><input type="radio" name="status" value="1">禁用</label>
</span>
</div>
<div class="clearfix " id="select_contact">
<span class="col-sm-2"><label class="f_color1 z_ml10_r">*</label>仓库地址</span>
<select class="" name="">
<option value="">请选择</option>
</select>
<select class="" name="">
<option value="">请选择</option>
</select>
<select class="" name="">
<option value="">请选择</option>
</select>
<select class="" name="">
<option value="">请选择</option>
</select>
</div>
<div class="clearfix">
<span class="col-sm-2 left">详细地址</span>
<span class="col-sm-10 has-feedback"><textarea placeholder="请输入详细地址..." name="address" id="address" class="form-control"></textarea><i class="form-control-feedback bv-no-label"  style="display: none;"></i><small class="help-block" style="display: none;">请填写详细地址!</small></span>

</div>
<div class="clearfix">
  <div class="col-sm-10">
  <button class="btn btn-primary" type="submit">保存</button>
  <button class="btn">返回</button>
</div>
</div>
</section>
</form>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.inp{
width: 40%;
height: 19px;
padding: 6px 12px;
font-size: 14px;
line-height: 1.42857143;
color: #555;
background-color: #fff;
background-image: none;
border: 1px solid #ccc;
border-radius: 4px;
-webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
-webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
}
.selec{
  width: 16%;
}
select{
  width: 10%;
  height: 32px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
  -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;

}
textarea{
  width: 60%;
  height: 32px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
  -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
}
input,select{
  margin-left: 60px;
}
textarea{
  margin-left: 162px;
}
.left{
margin-left: 40px;
}
.btn-primary {
    color: #fff;
    background-color: #428bca;
    border-color: #357ebd;
    width: 24%;
    margin-left: 16%;
}
</style>
