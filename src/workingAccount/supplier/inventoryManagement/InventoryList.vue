<template lang="html">
  <div class="">
    <nav class="y_orderlistnav y_ordernav_three">
      <router-link to="/workingAccount/supplier/inventoryManagement/InventoryList/whole" tag="div"  class="tab" active-class="active">全部</router-link>
      <router-link to="/workingAccount/supplier/inventoryManagement/InventoryList/yset" tag="div"  class="tab" active-class="active">已设置库存</router-link>
      <router-link to="/workingAccount/supplier/inventoryManagement/InventoryList/wset" tag="div"  class="tab" active-class="active">未设置库存</router-link>
</nav>

<router-view></router-view>

  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
