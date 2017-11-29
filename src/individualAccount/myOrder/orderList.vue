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
            <router-link to="/individualAccount/myOrder/lineItem" tag="a" class="clearfix" active-class="active">我的订单</router-link>
            <router-link to="" tag="a" class="clearfix" >我的处方单</router-link>
					<a class="clearfix  ">
					理赔保险申请</a>
					<a class="clearfix">
					我的收藏</a>
					</section>
					<section class="h_nav">
					<a class="clearfix  ">
					 我的钱包</a>
					<a class="clearfix">
					 我要申请合作</a>
					<a class="clearfix">
					意见反馈</a>
          <router-link to="" tag="a" class="clearfix" >用户协议</router-link>
          <a class="clearfix">
					版本信息</a>
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
