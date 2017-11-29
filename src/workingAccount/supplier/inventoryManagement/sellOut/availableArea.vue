<template lang="html">
  <div class="">
    <div class="h_testtit">
<div class="clearfix ">
<span class="col-sm-2">可售区域</span>
<span class="fr">
	<label class="option1"><input type="radio" name="country" value="wholeCountry" id="wholeCountryid">全国</label>
	<label class="option2"><input type="radio" name="country" value="" checked="checked" id="regionInputId">区域</label>
</span>
</div>
</div>
<section id="regionId">
<div class="h_testtit drop_down">
<div class="clearfix background " id="select_contact">
<router-link to="/workingAccount/supplier/inventoryManagement/sellOut/addSaleAreaWarehouse" tag="a"  class="col-sm-6" >+增加仓库可售区域</router-link>
<!-- <span class="col-sm-6" style="color:#3eb4ff">+增加仓库可售区域</span> -->
</div>
</div>
</section>
<div class="h_testtit">
<div class="clearfix">
  <div class="col-sm-10">
  <button class="btn btn-primary" onclick="submitForm()">保存</button>
  <button class="btn">返回</button>
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
.h_testtit .fr {
    color: #999;
}
label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: 700;
}
label.option1 input, label.option2 input {
    vertical-align: middle;
    margin: -.2rem .2rem 0 .5rem;
    font-size: 18px;
}
.option1,.option2{
  font-size: 16px;
}
.btn-primary {
    width: 24%;
    margin-left: 16%;
}
</style>
