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
            <router-link to="/workingAccount/fmilyDoctorCon/jtordermanagement" tag="a" class="clearfix" active-class="active">订单管理</router-link>
            <router-link to="" tag="a" class="clearfix">报表统计</router-link>
            <router-link to="/workingAccount/fmilyDoctorCon/jtqProfit" tag="a" class="clearfix" active-class="active">我的收益</router-link>
				  <router-link to="" tag="a" class="clearfix">医院审核</router-link>
					</section>
					<section class="h_nav">
					 <router-link to="/workingAccount/fmilyDoctorCon/hospitalManagementCon" tag="a" class="clearfix" active-class="active">医院管理</router-link>
					 <router-link to="/workingAccount/fmilyDoctorCon/DoctorreviewCon" tag="a" class="clearfix" active-class="active">医生审核</router-link>
		       <router-link to="" tag="a" class="clearfix">医生管理</router-link>
           <router-link to="" tag="a" class="clearfix">添加医院</router-link>
           <router-link to="" tag="a" class="clearfix">我要申请升级</router-link>
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
