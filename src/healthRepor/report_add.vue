<template lang="html">
  <div class="">
    <!--健康论坛-->
   <div class="layout">
    <div class="container m_mt30  m_mb50 over">
      <div class="container h-crumb">
          <ul>
            <span class="fl">您现在的位置：</span>
            <li class="fl"><a href="index.html">我自己的报告</a></li>
            <li class="fl active">添加报告</li>
          </ul>
        </div>
	    <div class="h_contacts">
	      <h3>报告图片</h3>
				<div class="h-evaluatio" style="margin: 0; padding:20px 0 ;border: none;">
					<div class="form-group">
            <label class="control-label" for="resigetname">上传图片：</label>
            <label>
            	<div class="control-input fl"><span>上传图片</span></div>
            	<input type="file"  hidden/>
            </label>
	        </div>
					<div class="form-group">
            <label class="control-label" for="resigetname">检测时间： </label>
            <select name="name" id="" class="form-control" style="height:40px;">
            	<option value="">请选择检测时间</option>
            </select>
	        </div>
					<div class="form-group">
            <label class="control-label" for="resigetname">检测时间： </label>
            <select name="name" id="" class="form-control" style="height:40px;">
            	<option value="">请选择检测时间</option>
            </select>
	        </div>
	        <div class="form-group">
            <label class="control-label" for="resigetname">检测机构：</label>
            <select name="name" id="" class="form-control" style="height:40px;">
            	<option value="">请输入检测机构</option>
            </select>
	        </div>
	        <div class="form-group">
	            <label class="control-label" for="resigetname">检测类型： </label>
	            <input type="text" required="" class="form-control" id="resigetname" placeholder="基因检测">
	        </div>
					<div class="y_resetbtnbx">
	          <a href="##" class="btn btn-custom">提交</a>
	        </div>
	      </div>
	    </div>
    </div>
  </div><!--健康论坛 end-->

  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
a {
    color: #000000;
}
.container {
    margin-right: auto;
    margin-left: auto;
    padding: 0;
    width: 1200px;
    padding-top: 30px;
}
.m_mb50 {
    margin-bottom: 50px;
}
.h-crumb {
    line-height: 40px;
    overflow: hidden;
}
.h-crumb ul {
    float: left;
}
.h-crumb ul > li + li:before {
    padding-left: 6px;
    color: #CCC;
    content: "> ";
}
.h_contacts {
    border: 1px solid #e8e8e8;
}
.h_contacts h3 {
    height: 50px;
    line-height: 50px;
    font-weight: normal;
    background: #fff;
    border-bottom: 1px solid #eee;
    padding: 0 20px;
    font-size: 16px;
}
.h-evaluatio .form-group {
    margin-bottom: 25px;
    padding-left: 30px;
    overflow: hidden;
    width: auto;
    line-height: 40px;
    zoom: 1;
}
.h-evaluatio .form-group .control-label {
    float: left;
    width: 105px;
    text-align: right;
}
.control-input {
    width: 200px;
    height: 140px;
    border: 1px #e4e4e4 solid;
    background: url(../assets/img/add.png) no-repeat center 30px;
}
.control-input span {
    text-align: center;
    display: block;
    margin-top: 80px;
}
.h-evaluatio .form-group .form-control {
    width: 42%;
    float: left;
    line-height: 14px;
    padding: 10px;
    font-size: 14px;
    color: #333;
}
.h-evaluatio .y_resetbtnbx {
    margin-left: 132px;
}
.h-evaluatio .y_resetbtnbx .btn {
    padding: 8px 50px;
}
.btn-custom {
    color: #fff;
    background-color: #10acff;
    border-color: #10acff;
    padding: 8px 18px;
}
</style>
