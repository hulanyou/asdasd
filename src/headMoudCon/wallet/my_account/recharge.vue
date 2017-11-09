<template lang="html">
  <div class="">
    <div class="tab-cotent">
      <div class="h-evaluatio h-evaluatio3">
        <div class="form-group">
            <label class="control-label" for="resigetname">输入金额：</label>
            <input type="text" required="" class="form-control" id="resigetname" placeholder="输入金额">
          </div>
          <div class="form-group bank-group">
            <label class="control-label" for="resigetname">支付方式：</label>
            <div class="h_bank">
              <input name="buy" type="radio" value="" class="fl">
                  <div class="fl pic "><img src="../../../assets/img/adimg/y_apptype3.jpg"></div>
                  <div class="txt">
                    <span>微信支付</span>
                    <span class="num"> 微信支付</span>
                  </div>
              </div>
          </div>
          <a href="##" class="btn btn-custom">充值</a>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.h-evaluatio3 {
    margin: 0;
    border: none;
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
.h-evaluatio .form-group .control-label {
    float: left;
    width: 105px;
    text-align: right;
}
.bank-group .control-label {
    line-height: 50px;
}
.h_bank {
    border: 1px solid #e8e8e8;
    width: 45%;
    height: 48px;
    line-height: 48px;
    margin-left: 106px;
}
.h_bank input {
    vertical-align: middle;
    margin: 16px 5px 0 15px;
}
.h_bank .pic {
    width: 30px;
    height: 30px;
    margin: 9px;
}
.h_bank .pic img {
    width: 100%;
    height: 100%;
}
.h_bank .txt {
    font-size: 16px;
    float: left;
    width: 67%;
}
.h_bank .txt .num {
    color: #999;
    font-size: 12px;
    float: right;
}
.h-evaluatio3 .btn.btn-custom {
    margin-left: 136px;
    margin: 20px 0 0 136px;
    width: 100px;
}
</style>
