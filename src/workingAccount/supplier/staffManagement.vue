<template lang="html">
<div class="">
  <div class="y_orderserch flex">
  <div class=" col-sm-5">
    <label class="control-label" for="listipt4">员工名称：</label>
      <input type="text" name="orderId" value="" id="orderId">

    <button class="btn btn-primary search" title="" rel="tooltip" data-original-title="查询">查询</button>
    <button class="btn" id="clearFastForm" type="button" title="" rel="tooltip" data-original-title="清空">清空</button>
    <a class="btn btn-primary right">
      新增
    </a>
    </div>
</div>
<table width="100%" class="tabler bg_2">
		<thead>
			<tr>
				<th>员工名称</th>
				<th>手机号</th>
				<th>角色名称</th>
				<th>操作</th>
			</tr>
		</thead>

  <tbody>

    <tr>
      <td colspan="4">
        您现在还没有添加员工(业务管理员)
      </td>
    </tr>
  </tbody>
</table>
</div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.right{
  margin-left: 200px;
}
.search{
  margin-left: 30px;
}
.col-sm-5{
  padding: 18px;
  width: 100%;
}
.form-group{
  padding: 20px;
}
.btn-primary{
  width: 10%;
}
.form-control{
  width: 20%;
  height: 19px;
}
.y_orderserch .form-group {
    margin-bottom: 14px;
    padding-right: 2%;
}
input{
  width: 32%;
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
</style>
