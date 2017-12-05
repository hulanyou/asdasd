<template lang="html">
  <div class="">
    <ul class="breadcrumb">
  	<li><i></i><a href="##">会员中心</a></li>
  	<li class="active d_active">我的订单</li>
    <li class="active">查看详情</li>
  </ul>
  <div class="row nomargin flex">
    <div><img src="../../static/images/images/fu_03.jpg"></div>
    <div class="payment">
  		<div class="payment_box">
  			<h1 style="font-size: 20px;color: #ff4a00;padding-bottom: 14px;padding-top: 40px;">等待付款</h1>
  			<a href="/ydysmall/usercenter/order/view/" class="btn btn-custom5 btn-sm">立即付款</a>
  			<br>
  			<a href="/ydysmall/usercenter/order/view/" class="btn btn-link2">取消订单</a>
  			<br>
			<a href="/ydysmall/usercenter/order/view/" class="btn btn-link2">查看地图</a>
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
.flex {
	height: 100%;
	background-color: #f5f5f5;
}
.d_active{
  color: #10adff;
}
.payment {
    width: 100px;
    height: 230px;
    position: absolute;
    left: 60px;
    top: 412px;
    background: #FFFFFF;
    z-index: 1;
}
.payment_box {
    margin: 0 0 0 40px;
    text-align: center;
    width: 150px;
    height: 100%;
    border-right: 1px solid #fafafa;
}
</style>
