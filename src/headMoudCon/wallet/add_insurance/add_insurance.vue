<template lang="html">
  <div class="">
    <div class="tab-pane h-wallet">
          <div class="h-evaluatio h-evaluatio2 ">
            <div class="form-group">
              <label class="control-label" for=""><span class="y_required">*</span>保单名称：</label>
              <input type="text" required="" class="form-control" id="" placeholder="请输入">
            </div>
            <div class="form-group">
              <label class="control-label" for=""><span class="y_required">*</span>保单号：</label>
              <input type="text" required="" class="form-control" id="" placeholder="请输入">
            </div>

            <div class="form-group">
              <label class="control-label" for=""><span class="y_required">*</span>被保险人：</label>
              <input type="text" required="" class="form-control" id="" placeholder="请输入">
            </div>
            <div class="y_resetbtnbx">
              <a href="##" class="btn btn-custom">提交</a>
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
.h-wallet {
    padding-top: 60px;
    margin-left: 160px;
}
.h-evaluatio2 {
    width: 80%;
    margin-left: 50px;
    border: none;
    margin-top: 20px;
    margin-bottom: 0;
}
.h-evaluatio {
    padding: 0 0 60px 0;
    margin: 0px auto 60px;
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
    height: 19px;
    line-height: 19px;
    padding-left: 15px;
}

.h-evaluatio .form-group .form-control {
    width: 42%;
    float: left;
    line-height: 14px;
    padding: 10px;
    font-size: 14px;
    color: #333;
}

.form-control {
    box-shadow: none;
    border-radius: 0;
    height: 19px;
    padding: 7px 10px;
    font-size: 12px;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #e8e8e8;
    display: block;
    width: 100%;
    -webkit-transition: all .3s ease-in-out;
    -moz-transition: all .3s ease-in-out;
    -o-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
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
    width: 172px
}
</style>
