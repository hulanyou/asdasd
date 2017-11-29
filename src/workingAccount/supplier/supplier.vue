<template lang="html">
  <div class="">
    <ul class="breadcrumb">
  	<li><i></i><a href="##">会员中心</a></li>
  	<li class="active">我的订单</li>
  </ul>
  <div class="row nomargin flex">
	<div class="col-xs-2 left-sidebar">
		<div class="tab-content">
  			<div role="tabpanel" class="tab-pane active" id="normaluser">
  				<section class="h_nav">
            <router-link to="/workingAccount/supplier/profit" tag="a" class="clearfix" active-class="active">我的收益</router-link>
            <router-link to="/workingAccount/supplier/ordermanagement" tag="a" class="clearfix" active-class="active">订单管理</router-link>
					<a class="clearfix  ">
					报表统计</a>
          <router-link to="/workingAccount/supplier/staffManagement" tag="a" class="clearfix" active-class="active">员工管理</router-link>
					</section>
					<section class="h_nav">
					<a class="clearfix  ">
					 商品管理</a>
					<a class="clearfix">
					 发布商品</a>
					<a class="clearfix">
					价格管理</a>
          <router-link to="/workingAccount/supplier/inventoryManagement" tag="a" class="clearfix" active-class="active">库存管理</router-link>
				</section>
  			</div>
  		</div>
  	</div>
	<div class="col-xs-10 content-wrapper">
      <router-view></router-view>
	</div>
</div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
