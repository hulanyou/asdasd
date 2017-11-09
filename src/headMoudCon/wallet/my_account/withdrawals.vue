<template lang="html">
  <div class="">
    <div class="tab-cotent">
     <div class="h-evaluatio h-evaluatio3">  <div class="form-group">
           <label class="control-label" for="resigetname">输入金额：</label>
           <input type="text" required="" class="form-control" id="resigetname" placeholder="输入金额">
           <p class="f-color2">注：00:00-23:59期间提现，支持5万额度最快2小时到账</p>
         </div>
         <div class="form-group bank-group">
           <label class="control-label" for="resigetname">选择银行：</label>
           <div class="h_bank">
             <input name="buy" type="radio" value="" class="fl">
                 <div class="fl pic "><img src="../../../assets/img/adimg/bank1.jpg"></div>
                 <div class="txt">
                   <span>中国工商银行</span>
                   <span class="num">尾号9776快捷</span>
                 </div>
             </div>
             <div class="h_bank">
             <input name="buy" type="radio" value="" class="fl">
                 <div class="fl pic "><img src="../../../assets/img/adimg/bank1.jpg"></div>
                 <div class="txt">
                   <span>中国工商银行</span>
                   <span class="num">尾号9776快捷</span>
                 </div>
             </div>
         </div>
         <div class="add-cart">
           <a @click="isshow=!isshow">+ 添加银行卡</a>
         </div>
         <a href="##" class="btn btn-custom">申请提现</a>
     </div>
   </div>

   <!-- 弹出框 -->
 <div class="modal-open fadeIn" v-show="isshow">
   <div class="modal-dialog modal-sm">
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal_head flex flex_jus_between">
            <p>添加银行卡</p>
            <p @click="isshow=!isshow"><a>x</a></p>
          </div>
        </div>
        <div class="modal-body cart-add-addr">
          <div class="modal_con">
            <div class="con flex">
              <span>持卡人：</span>
              <input type="text" name="" value="" placeholder="持卡人">
            </div>
            <div class="con flex">
              <span>卡号：</span>
              <input type="text" name="" value="" placeholder="卡号">
            </div>
          </div>
        </div>
        <div class="modal-footer">
            <button class="btn btn-custom" @click="isshow=!isshow">确定</button>
            <button type="button" class="btn btn-custom3" @click="isshow=!isshow">取消</button>
        </div>
      </div>
  </div>
 </div>
 <!-- End 弹出框 -->
  </div>
</template>

<script>
export default {
  data(){
    return{
    isshow:false
    }
  }
}
</script>

<style lang="css" scoped>
.con{
  height: 38px;
  line-height: 38px;
}
.con span{
  display: block;
  width: 58px;
  text-align: right;
}
.con input{
  width:62%;
  height: 100%;
  border: 1px solid #ccc;
}
.con:nth-of-type(2){
  margin-top: 20px;
}

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
.h-evaluatio .form-group .f-color2 {
    display: block;
    clear: both;
    margin-left: 106px;
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
.h-evaluatio3 .add-cart {
    margin-left: 136px;
    position: relative;
}
.h-evaluatio3 .btn.btn-custom {
    margin-left: 136px;
    margin: 20px 0 0 136px;
    width: 100px;
}
</style>
