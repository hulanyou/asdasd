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
            <router-link to="/workingAccount/nationalDivision/qStaffManagement" tag="a" class="clearfix" active-class="active">员工管理</router-link>
            <router-link to="/workingAccount/nationalDivision/qProfit" tag="a" class="clearfix" active-class="active">我的收益</router-link>
            <router-link to="/workingAccount/nationalDivision/pdwholhMechanism" tag="a" class="clearfix" active-class="active">绑定全国助销机构</router-link>
				  <router-link to="" tag="a" class="clearfix">供应商审核</router-link>
					</section>
					<section class="h_nav">
					 <router-link to="" tag="a" class="clearfix">商品管理</router-link>
					 <router-link to="" tag="a" class="clearfix">价格审核</router-link>
		       <router-link to="" tag="a" class="clearfix">商品审核</router-link>
           <router-link to="" tag="a" class="clearfix">供应商档案</router-link>
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
