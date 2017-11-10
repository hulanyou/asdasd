<template lang="html">
<div class="">
  <div class="h-evaluatio h-evaluatio2 ">
    <div class="form-group">
      <label class="control-label" for=""><span class="y_required">*</span>出险人姓名：</label>
      <input type="text" required="" class="form-control" id="" placeholder="请输入">
    </div>
    <div class="form-group">
      <label class="control-label" for=""><span class="y_required">*</span>身份证号码：</label>
      <input type="text" required="" class="form-control" id="" placeholder="请输入">
    </div>
    <div class="form-group">
      <label class="control-label" for=""><span class="y_required">*</span>您的电话：</label>
      <input type="text" required="" class="form-control" id="" placeholder="请输入">
    </div>
    <div class="form-group">
      <label class="control-label" for=""><span class="y_required">*</span>申请类型：</label>
      <div class="select_box" style="display: none;"><div class="select_showbox" style="cursor: pointer;">1</div><ul class="select_option" style="display: none;"><li class="selected">1</li></ul></div><select name="" id="" class="form-control">
        <option value="">1</option>
      </select>
    </div>
    <div class="form-group">
      <label class="control-label" for=""><span class="y_required">*</span>出险日期：</label>
      <div class="select_box" style="display: none;"><div class="select_showbox" style="cursor: pointer;">1</div><ul class="select_option" style="display: none;"><li class="selected">1</li></ul></div><select name="" id="" class="form-control">
        <option value="">1</option>
      </select>
    </div>
    <div class="form-group">
      <label class="control-label" for=""><span class="y_required">*</span>索赔申请地：</label>
      <div class="select_box" style="display: none;"><div class="select_showbox" style="cursor: pointer;">1</div><ul class="select_option" style="display: none;"><li class="selected">1</li></ul></div><select name="" id="" class="form-control">
        <option value="">1</option>
      </select>
    </div>
    <div class="form-group">
      <label class="control-label" for=""><span class="y_required">*</span>理赔金额：</label>
      <input type="text" required="" class="form-control" id="" placeholder="请输入">
    </div>
    <div class="y_resetbtnbx">
       <router-link to="/insurance_claim/data_two" tag="a" class="btn btn-custom">下一步</router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.h-evaluatio2 {
    width: 80%;
    margin-left: 50px;
    border: none;
    margin-top: 20px;
    margin-bottom: 0;
}
.h-evaluatio {
    border: 1px solid #e8e8e8;
    padding: 40px 0 60px 0;
    margin: 60px auto 60px;
}
.h-evaluatio .form-group {
    margin-bottom: 25px;
    padding-left: 30px;
    overflow: hidden;
    width: auto;
    line-height: 40px;
    zoom: 1;
}
.h-evaluatio .form-group .control-label {
    float: left;
    width: 105px;
    text-align: right;
}
.h-evaluatio .y_required {
    color: #f71231;
}
.h-evaluatio2 .form-group .form-control {
    width: 50%;
    padding: 0;
    height: 40px;
    line-height: 40px;
    padding-left: 15px;
}

.h-evaluatio .form-group .form-control {
    float: left;
    line-height: 14px;
    padding: 10px;
    font-size: 14px;
    color: #333;
}
.h-evaluatio .y_resetbtnbx {
    margin-left: 132px;
}
.y_resetbtnbx {
    width: 172px;
    margin: 0 auto;
    padding: 20px 0;
}
.btn-custom {
    color: #fff;
    background-color: #10acff;
    border-color: #10acff;
    padding: 8px 18px;
    width: 173px;
}
</style>
