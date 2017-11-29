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
<table width="100%" class="orderlist tabler tabler-noline">
	<tbody>
<!--实物订单-->
    <tr>
    	<th colspan="6" class="order_number keepon"> <!-- 订单状态没完成时，添加keepon 控制背景颜色-->
    	 <input type="checkbox">订单号：INDENT000021839358
    	</th>
  	</tr>

  <tr>
    <td>
  		<div class="y_orderltmain">
  		    <div class="y_pic">
  		        <img src="">
  		     </div>
  		     <div class="des">
  		         <div class="y_name line1">康泰云健康血糖仪安稳性蓝牙APP </div>
  		         <div class="rule">末梢全血葡萄糖测试&nbsp;一天8次（早起空腹、三餐前、三餐后、睡前）</div>
  		     </div>
  		</div>
    </td>
    <td>¥ 490.0</td>
    <td>3</td>
    <td>¥ 1480.0<br>（含邮费：10.0）</td>
    <td>
        <!-- 订单 -->
  		待付款
  		<!-- 售后 -->
  		  <a href="/ydysmall/usercenter/order/view/07104acb12384311b10bb07fc6c7b338" class="btn btn-link2">
        	  查看详情
          </a>
  		  <!-- <a href="/ydysmall/usercenter/order/deliveryOrderDetail?orderUuid=07104acb12384311b10bb07fc6c7b338&amp;&amp;deliveryUuid=&amp;&amp;logicNo=" class="btn btn-link2" style="color: #ff4a00;">
        	  查看物流
        </a>-->
      </td>
        <td>
  		<nav class="y_orderltbtnbx">
  		<!-- 待付款状态 -->
      <a href="#" class="btn btn-custom5 btn-sm">
        	  立即付款
          </a>
  		<a href="#cancellationOrder_07104acb12384311b10bb07fc6c7b338" data-toggle="modal" class="btn btn-link2">取消订单</a>
      <a href="#cancellationOrder_07104acb12384311b10bb07fc6c7b338" data-toggle="modal" class="btn btn-link2">查看地图</a>
  		</nav>
        </td>
     </tr>
	</tbody>
  <tbody>
<!--实物订单-->
    <tr>
      <th colspan="6" class="order_number keepon"> <!-- 订单状态没完成时，添加keepon 控制背景颜色-->
       <input type="checkbox">订单号：INDENT000021839358
      </th>
    </tr>

  <tr>
    <td>
      <div class="y_orderltmain">
          <div class="y_pic">
              <img src="">
           </div>
           <div class="des">
               <div class="y_name line1">康泰云健康血糖仪安稳性蓝牙APP </div>
               <div class="rule">末梢全血葡萄糖测试&nbsp;一天8次（早起空腹、三餐前、三餐后、睡前）</div>
           </div>
      </div>
    </td>
    <td>¥ 490.0</td>
    <td>3</td>
    <td>¥ 1480.0<br>（含邮费：10.0）</td>
    <td>
        <!-- 订单 -->
      交易关闭
      <!-- 售后 -->
        <a href="/ydysmall/usercenter/order/view/07104acb12384311b10bb07fc6c7b338" class="btn btn-link2">
            查看详情
          </a>
        <!-- <a href="/ydysmall/usercenter/order/deliveryOrderDetail?orderUuid=07104acb12384311b10bb07fc6c7b338&amp;&amp;deliveryUuid=&amp;&amp;logicNo=" class="btn btn-link2" style="color: #ff4a00;">
            查看物流
        </a>-->
      </td>
        <td>
      <nav class="y_orderltbtnbx">
      <!-- 待付款状态 -->
      <a href="#cancellationOrder_07104acb12384311b10bb07fc6c7b338" data-toggle="modal" class="btn btn-link2">删除订单</a>
      <a href="#cancellationOrder_07104acb12384311b10bb07fc6c7b338" data-toggle="modal" class="btn btn-link2">再次购买</a>
      <a href="#cancellationOrder_07104acb12384311b10bb07fc6c7b338" data-toggle="modal" class="btn btn-link2" style="color: #ff4a00;">查看退款</a>
      </nav>
        </td>
     </tr>
  </tbody>
  <tbody>
<!--实物订单-->
    <tr>
      <th colspan="6" class="order_number keepon"> <!-- 订单状态没完成时，添加keepon 控制背景颜色-->
       <input type="checkbox">订单号：INDENT000021839358
      </th>
    </tr>

  <tr>
    <td>
      <div class="y_orderltmain">
          <div class="y_pic">
              <img src="">
           </div>
           <div class="des">
               <div class="y_name line1">康泰云健康血糖仪安稳性蓝牙APP </div>
               <div class="rule">末梢全血葡萄糖测试&nbsp;一天8次（早起空腹、三餐前、三餐后、睡前）</div>
           </div>
      </div>
    </td>
    <td>¥ 490.0</td>
    <td>3</td>
    <td>¥ 1480.0<br>（含邮费：10.0）</td>
    <td>
        <!-- 订单 -->
      物流运输中
      <!-- 售后 -->
        <a href="/ydysmall/usercenter/order/view/07104acb12384311b10bb07fc6c7b338" class="btn btn-link2">
            查看详情
          </a>
          <a href="/ydysmall/usercenter/order/view/07104acb12384311b10bb07fc6c7b338" class="btn btn-link2" style="color: #ff4a00;">
              查看物流
            </a>
        <!-- <a href="/ydysmall/usercenter/order/deliveryOrderDetail?orderUuid=07104acb12384311b10bb07fc6c7b338&amp;&amp;deliveryUuid=&amp;&amp;logicNo=" class="btn btn-link2" style="color: #ff4a00;">
            查看物流
        </a>-->
      </td>
        <td>
      <nav class="y_orderltbtnbx">
      <!-- 待付款状态 -->
      <a href="#" class="btn btn-custom6 btn-sm">
        	  确认收货
          </a>
      <a href="#cancellationOrder_07104acb12384311b10bb07fc6c7b338" data-toggle="modal" class="btn btn-link2">退款退货</a>
      <a href="#cancellationOrder_07104acb12384311b10bb07fc6c7b338" data-toggle="modal" class="btn btn-link2">查看地图</a>
      </nav>
        </td>
     </tr>
  </tbody>
  <tbody>
<!--实物订单-->
    <tr>
      <th colspan="6" class="order_number keepon"> <!-- 订单状态没完成时，添加keepon 控制背景颜色-->
       <input type="checkbox">订单号：INDENT000021839358
      </th>
    </tr>

  <tr>
    <td>
      <div class="y_orderltmain">
          <div class="y_pic">
              <img src="">
           </div>
           <div class="des">
               <div class="y_name line1">康泰云健康血糖仪安稳性蓝牙APP </div>
               <div class="rule">末梢全血葡萄糖测试&nbsp;一天8次（早起空腹、三餐前、三餐后、睡前）</div>
           </div>
      </div>
    </td>
    <td>¥ 490.0</td>
    <td>3</td>
    <td>¥ 1480.0<br>（含邮费：10.0）</td>
    <td>
        <!-- 订单 -->
      交易成功
      <!-- 售后 -->
        <a href="/ydysmall/usercenter/order/view/07104acb12384311b10bb07fc6c7b338" class="btn btn-link2">
            查看详情
          </a>
        <!-- <a href="/ydysmall/usercenter/order/deliveryOrderDetail?orderUuid=07104acb12384311b10bb07fc6c7b338&amp;&amp;deliveryUuid=&amp;&amp;logicNo=" class="btn btn-link2" style="color: #ff4a00;">
            查看物流
        </a>-->
      </td>
        <td>
      <nav class="y_orderltbtnbx">
      <!-- 待付款状态 -->
      <a href="#cancellationOrder_07104acb12384311b10bb07fc6c7b338" data-toggle="modal" class="btn btn-link2">再次购买</a>
      <a href="#cancellationOrder_07104acb12384311b10bb07fc6c7b338" data-toggle="modal" class="btn btn-link2">查看地图</a>
      </nav>
        </td>
     </tr>
  </tbody>
</table>

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
/*订单详情样式*/
.tabler tr .keepon {
    background: #e5f6fe;
}
.tabler tr .order_number {
    font-weight: normal;
}
.tabler tbody th {
    text-align: left;
    padding: 0 14px;
    height: 40px;
    line-height: 40px;
}
tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
}
.tabler tbody tr td:nth-child(1) {
    width: 35%;
}
.tabler-noline tbody td {
    border: none;
}
.tabler tbody td {
    padding: 14px;
    border: 1px solid #e5f6fe;
}
.orderlist .y_pic {
    float: left;
    width: 98px;
    height: 98px;
    overflow: hidden;
    background: #f5f5f5;
    text-align: center;
}
.orderlist .y_pic img {
    width: 100%;
    height: 100%;
}
img {
    border: none;
    vertical-align: top;
    max-width: 100%;
}
.orderlist .des {
    margin-left: 110px;
    text-align: left;
}
.orderlist .y_name {
    font-size: 16px;
    margin-bottom: 3px;
    max-height: 45px;
    overflow: hidden;
}
.orderlist .rule {
    font-size: 12px;
    color: #666;
}
.tabler tbody tr td:nth-child(2) {
    width: 10%;
}
.tabler tbody tr td:nth-child(3) {
    width: 10%;
}
.tabler tbody tr td:nth-child(4) {
    width: 20%;
}
.tabler tbody tr td:nth-child(5) {
    width: 12%;
}
.tabler td .btn.btn-link2 {
    margin-bottom: 0;
    color:#333;
}
.tabler td .btn {
    margin-left: 5px;
    margin-bottom: 5px;
}
.tabler td .btn.btn-link2 {
    margin-bottom: 0;
    color:#333;
}
.tabler-noline tbody td {
    border: none;
}
.tabler tbody td {
    padding: 14px;
    border: 1px solid #e5f6fe;
}
.tabler td .btn {
    margin-left: 5px;
    margin-bottom: 5px;
}
.btn {
    border: 0;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    text-shadow: none;
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    border-radius: 0;
    padding: 5px 9px;
    filter: none;
}
.btn-custom5 {
    color: #fff;
    border-color: #ff4a00;
    background: #ff4a00;
}
.btn-custom6 {
    color: #fff;
    border-color: #ff4a00;
    background: #10adff;
}
.btn-sm {
    font-size: 0.65rem;
    padding: 0.3rem;
}
.tabler-noline tbody td {
    border: none;
}
</style>
