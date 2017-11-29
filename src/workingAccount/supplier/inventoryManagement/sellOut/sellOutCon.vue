<template lang="html">
  <div class="">
    <div class="y_repbox h_testtit">
<div class="title_70"><b>我的仓库</b></div>


<router-link to="/workingAccount/supplier/inventoryManagement/sellOut/availableArea" tag="span"  class="clearfix background">全国范围 <span class="fr mr6">设置可售区域</span></router-link>
<!-- <span class="fl">全国范围</span> -->



<a class="clearfix">
<router-link to="/workingAccount/supplier/inventoryManagement/sellOut/saddWarehouse" tag="span" class="fl" style="color:#3eb4ff">+增加仓库</router-link>
<!-- <span class="fl" style="color:#3eb4ff">+增加仓库</span> -->
</a>
</div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.title_70 {
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    margin: 0 0;
    border-bottom: 1px solid #e8e8e8;
    background: #fff;
    font-weight: 800;
    padding-left: 18px;
}
.h_testtit .fr {
    font-size: .7rem;
    color: #999;
}
.clearfix .fl{
  color: #000;
}
.h_testtit .clearfix.background {
    background: url(../../../../assets/img/nav_bg.png) 95% center no-repeat #fff;
    -webkit-background-size: 0.4rem auto;
    background-size: 0.4rem auto;
}
</style>
