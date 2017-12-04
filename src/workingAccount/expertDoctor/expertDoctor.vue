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
            <router-link to="/workingAccount/expertDoctor/zjqProfit" tag="a" class="clearfix" active-class="active">我的收益</router-link>
            <router-link to="/workingAccount/expertDoctor/zjordermanagement" tag="a" class="clearfix" active-class="active">用户订单</router-link>
					<a class="clearfix  ">
					处方药审核订单池</a>
          <router-link to="" tag="a" class="clearfix">我的用户</router-link>
					</section>
					<section class="h_nav">
          <router-link to="/workingAccount/expertDoctor/serviceSettings" tag="a" class="clearfix" active-class="active">服务设置</router-link>
					<!-- <a class="clearfix  ">
					 服务设置</a> -->
					<a class="clearfix">
					 培训直播</a>
					<a class="clearfix">
					培训设置</a>
          <router-link to="" tag="a" class="clearfix">我的培训</router-link>
          <a class="clearfix">
					商品推荐</a>
          <router-link to="/workingAccount/expertDoctor/myDrugStoreCon" tag="a" class="clearfix" active-class="active">我的药品库</router-link>
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
