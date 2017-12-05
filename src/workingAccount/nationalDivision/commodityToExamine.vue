<template lang="html">
  <div class="">
    <div class="y_orderserch">
    	<form class="form-inline2 flex flex_wraps" id="searchForm" method="post">
    	<div class="form-group flex left">
    		<label class="control-label supplier">供应商名称：</label>
    		<div class="y_seript">
    			<input class="form-control" type="text" value="">
    		</div>
    	</div>
      <div class="form-group flex">
    		<label class="control-label">类型</label>
    		<div class="y_seript">
    			<select name="state" id="state" class="form-control selec">
            <option value="">--请选择--</option>
          </select>
    		</div>
    	</div>
      <div class="form-group flex">
    		<label class="control-label">状态</label>
    		<div class="y_seript">
    			<select name="state" id="state" class="form-control selec">
            <option value="">--请选择--</option>
          </select>
    		</div>
    	</div>
    	</form>
      <div class="chaxun">
          <button class="btn btn-primary search" title="" rel="tooltip" data-original-title="查询">查询</button>
          <button class="btn" id="clearFastForm" type="button" title="" rel="tooltip" data-original-title="清空">清空</button>
        </div>
    </div>
    <section class="h_testtit">
      <table width="100%" class="orderlist tabler">
        <thead>
          <tr>
            <th width="14%">商品名称</th>
            <th width="14%">商品描述</th>
            <th width="14%">状态</th>
            <th width="14%">库存</th>
            <th width="14%">价格</th>
            <th width="14%">审核状态</th>
            <th width="14%">操作</th>
          </tr>
        </thead>
      </table>
      <table width="100%" class="orderlist tabler">
        <tbody>
        <tr>
          <td class="ttitle">暂无数据</td>
        </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.left{
  margin-left: 16px;
}
.h_testtit{
  margin-top: 14px;
}
.control-label{
	font-size: 14px;
	/*width: 60px;*/
  padding: 0 10px;
	text-align: right;
}
.supplier{
  	width: 84px;
}
.form-control{
	  box-shadow: none;
    border-radius: 0;
    height: 19px;
    padding: 7px 10px;
    font-size: 12px;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #e8e8e8;
    width: 200px;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}
.selec{
	height: 34px;
	width: 240px;
}
.form-group{
  padding: 18px 0px;
}
.chaxun{
  padding-left: 18px;
  padding-bottom: 18px;
}
</style>
