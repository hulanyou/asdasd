<template lang="html">
  <div class="">
    <div class="y_orderserch">
	<form class="form-inline2 flex flex_wraps" id="searchForm" method="post">
	<div class="form-group flex">
		<label class="control-label">订单类型</label>
		<div class="y_seript">
			<select name="state" class="selectd">
				<option value="">全部</option>
				<option value="4">已预约</option>
				<option value="5,6">进行中</option>
				<option value="7">已完成</option>
				<option value="8">退款</option>
			</select>
		</div>
	</div>
	<div class="form-group flex">
		<label class="control-label" for="listipt5">下单时间</label>
		<div class="y_seript">
      <div class="block">
        <el-date-picker
         size="mini"
         v-model="value11"
         type="date"
         placeholder="选择日期"
         format="yyyy 年 MM 月 dd 日"
         value-format="yyyy-MM-dd" class="rili">
       </el-date-picker>
       <span>-</span>
       <el-date-picker
        size="mini"
        v-model="value11"
        type="date"
        placeholder="选择日期"
        format="yyyy 年 MM 月 dd 日"
        value-format="yyyy-MM-dd" class="rili">
      </el-date-picker>
   </div>
		</div>
	</div>
	<!-- 搜索条件 -->
  <div class="form-group ">
		<div class="y_seriptCx flex">
			<input class="inp" type="text" value="" placeholder="输入商品标题或订单号">
      <button class="btn btn-primary search" title="" rel="tooltip" data-original-title="查询">订单搜索</button>
		</div>
	</div>
	</form>
</div>
<section class="im_tab">
  <!-- <router-view></router-view> -->
<div class="box">
<div class="clearfix">
	<div class="tab "><a class="fl active">全部</a></div>
	<div class="tab"><a class="fl ">待付款</a></div>
	<div class="tab"><a class="fl ">待发货/已预约</a></div>
	<div class="tab"><a class="fl ">待收货/进行中</a></div>
	<div class="tab"><a class="fl ">已完成</a></div>
	<div class="tab"><a class="fl ">退款/退货</a></div>
</div>
</div>
</section>
<div id="orderList" class="tabler-box">

<!-- 订单为空 -->
<table width="100%" class="orderlist tabler">
	<thead>
		<tr>
			<th width="35%">订单信息</th>
			<th width="10%">单价</th>
			<th width="10%">数量</th>
			<th width="20%">订单金额</th>
			<th width="10%">订单状态</th>
			<th width="15%">操作</th>
		</tr>
	</thead>
</table>
<table width="100%" class="orderlist tabler">
	<tbody>
	<tr>
	<td class="dingdan">
	您还没有相关订单
	</td>
	</tr>
	</tbody>
</table>


<div class="check_all">
	 <input type="checkbox">全选   <a href="##" class="btn btn-custom">批量删除</a>
</div>
<!-- <div class="modal fade">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
			确认收货后，货款将会打到商家账户中，请确认后点击
			</div>
			<div class="modal-footer">
				<a href="javascript:void(0);" class="y_btn" data-dismiss="modal">否</a>
                <a href="javascript:void(0);" class="y_btn y_btn_y">是</a>
			</div>
		</div>
	</div>
</div> -->
</div>
<div class="y_page">
  <el-pagination
       @size-change="handleSizeChange"
       @current-change="handleCurrentChange"
       :current-page.sync="currentPage3"
       layout="prev, pager, next, jumper"
       :total="20">
     </el-pagination>
</div>
  </div>
</template>

<script>
export default {
  data() {
  return {
    value10:'',
    value11: '',
    currentPage3: 1

  };
},
methods: {
     handleSizeChange(val) {
       console.log(`每页 ${val} 条`);
     },
     handleCurrentChange(val) {
       console.log(`当前页: ${val}`);
     }
   }
}
</script>

<style lang="css" scoped>
.rili{
  border: 1px solid #e3e3e3;
}
.im_tab{
  margin-top: 16px;
}
.tabler thead tr{
  background: #f4f4f4;
  border:1px solid #ccc
}
.tabler thead{
  border: none;
}
.form-group{
  padding: 10px;
}
.tabler thead th{
  background: none;
}
</style>
