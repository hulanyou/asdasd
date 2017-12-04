<template lang="html">
  <div class="">
    <div class="y_orderserch">
    	<form class="form-inline2 flex flex_wraps" id="searchForm" method="post">
        <div class="form-group flex">
      		<label class="control-label">供应商名称：</label>
      		<div class="y_seript">
      			<input class="form-control" type="text" value="">
      		</div>
      	</div>
        <div class="form-group col-sm-5">
    <button class="btn btn-primary search" title="" rel="tooltip" data-original-title="查询">查询</button>
    <button class="btn" id="clearFastForm" type="button" title="" rel="tooltip" data-original-title="清空">清空</button>
  </div>
  </form>
</div>
<section class="h_testtit">
  <table width="100%" class="orderlist tabler">
    <thead>
      <tr>
        <th width="25%">头像</th>
        <th width="50%">供应商名称</th>
        <th width="25%">操作</th>
      </tr>
    </thead>
  </table>
  <table width="100%" class="orderlist tabler">
    <tbody>
      <tr>
        <td><img src="../../assets/img/touxiang.jpg" alt=""></td>
        <td>云朵益生测试供应商2供应商</td>
        <td><a class="btn btn-look">查看</a></td>
      </tr>
    </tbody>
  </table>
</section>

  </div>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
.control-label{
	font-size: 14px;
	width: 86px;
	text-align: right;
}
.form-control{
    -webkit-box-shadow: none;
    box-shadow: none;
    border-radius: 0;
    height: 19px;
    padding: 7px 10px;
    font-size: 12px;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #e8e8e8;
    width: 260px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}
.btn-primary{
  width: 120px;
}
.h_testtit{
  margin-top: 14px;
}
</style>
