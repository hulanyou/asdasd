<template lang="html">
  <div class="">
    <div class="h_testtit">
  <div class="clearfix ">
  <span class="col-sm-2">可售地区</span>
  <span class="col-sm-10" id="select_contact">
    <span class="col-sm-3">
  <select name="province" id="province" ><option>-请选择-</option></select>
  </span>
  <span class="col-sm-3">
  <select name="city" id="city"><option>-请选择-</option></select>
  </span>
  <span class="col-sm-3">
  <select name="region" id="region"><option>-请选择-</option></select>
  </span>
  </span>
  </div>
  <div class="clearfix">
<span class="col-sm-6"><span class="y_ico" uuid="16521"></span>大菉镇</span>
<span class="fr btn btn-custom3">优先级</span>
</div>
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
    font-size: .7rem;
    color: #999;
}
.btn-custom3 {

    background: #25a3f7;
    border-color:  #25a3f7;
}
.y_ico {
    margin: -1px 10px 0 10px;
    background: url(../../../../assets/img/m_radio.png) 0 0 no-repeat;
    -webkit-background-size: 100% auto;
    background-size: 100% auto;
    width: 25px;
    height: 25px;
    display: inline-block;
    vertical-align: middle;
}
select{
  width: 12%;
  height: 32px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
  -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  margin-left: 80px;
}
select:nth-of-type(0){
  margin-left: 0;
}
.btn-primary{
  width: 24%;
  margin-left: 14%;
}
</style>
