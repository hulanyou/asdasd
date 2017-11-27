<template lang="html">
  <div class="">
    <section class="im_tab">
      <div class="box">
      <div class="clearfix">
        <router-link to="/workingAccount/supplier/inventoryManagement/InventoryList" tag="p"  class="fl" active-class="active"><span>库存列表</span></router-link>
        <router-link to="/workingAccount/supplier/inventoryManagement/inventoryWarning" tag="p" class="fl" active-class="active">库存预警</router-link>
        <router-link to="/workingAccount/supplier/inventoryManagement/sellOut" tag="p" class="fl" active-class="active">可售地区</router-link>
      </div>
      <div class="underline"></div>
</div>
</section>
<div class="lists-con">
  <router-view></router-view>
</div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.lists-con{
  height: 400px;
  overflow: auto;
}
</style>
