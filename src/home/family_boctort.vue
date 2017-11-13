<template lang="html">
  <div class="">
    <!-- 家庭医生轮播组件 -->
    <slidebox></slidebox>
    <div class="layout m_mt20">
    <div class="container m_mt30 over m_mb50">
      <div class="left-73 fl">
        <p class="tip-b">您好，您还没有签约家庭医生， 签约家庭医生能为您提供专属的居家医疗，居家养老等家庭健康保障服务,请您选择您喜欢的家庭医生。</p>
       <h3 class="tit-b">待签约的家庭医生</h3>
        <!-- 未填写地址-->
        <div class="border">
          <div class="g_inoculate tc ">
            <div class="z_pic"><img src="../assets/img/gps.jpg"></div>
            <p>未填写地址</p>
            <p class="tip">暂时不能获取你所在地区的家庭医生哦~</p>
            <button class="btn btn-custom3" data-toggle="modal" data-target="#modal-login-form" style="display: inline-block;"  @click="isshow=!isshow">填写地址</button>
          </div>
        </div>
      </div>
      <div class="ad-box fr">
        <familyboctortr></familyboctortr>
        <!-- <div><a href="##"><img src="../assets/img/adimg/ad_box1.jpg" alt=""></a></div>
        <div><a href="##"><img src="../assets/img/adimg/ad_box2.jpg" alt=""></a></div> -->
      </div>
    </div>
  </div>
  <!-- 弹出框 -->
<div class="modal-open fadeIn" v-show="isshow">
  <div class="modal-dialog modal-sm">
     <div class="modal-content">
       <div class="modal-header">
           <button type="button" class="close" @click="isshow=!isshow"><span aria-hidden="true">×</span></button>
            <h4 class="modal-title">添加地址</h4>
       </div>
       <div class="modal-body cart-add-addr">
          <span>选择所在地：</span>
         <dl>
                   <dd>
                     <select class="form-control">
                       <option>北京</option>
                       <option>北京</option>
                     </select>
                     <select class="form-control">
                       <option>海淀区</option>
                     </select>
                     <select class="form-control">
                       <option>请选择</option>
                     </select>
                     <select class="form-control">
                       <option>请选择</option>
                     </select>
                   </dd>
                 </dl>
                 <dl>
                   <span>街道地址：</span>
                   <dd> <textarea class="form-control"></textarea> </dd>
                 </dl>
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
import slidebox from '@/home/family_boctortzj/slide-box'
import familyboctortr from '@/home/family_boctortzj/family_boctortr'
export default {
  data(){
    return{
    isshow:false
    }
  },
  components:{
    slidebox,
    familyboctortr
  },
}
</script>

<style lang="css" scoped>
.tip-b {
    background: #fff4e6;
    border: 1px solid #ff970a;
    font-size: 20px;
    padding: 30px 40px;
    line-height: 30px;
    color: #666666;
}
.tit-b {
    font-size: 18px;
    line-height: 50px;
}
.g_inoculate {
    padding: 50px 0 100px;
}
.tc {
    text-align: center;
}
.g_inoculate .z_pic {
    width: 200px;
    height: 200px;
    margin: 30px auto 0;
}
.g_inoculate .z_pic img {
    margin: 0 auto;
}
.g_inoculate p {
    font-size: 18px;
}
.g_inoculate .tip {
    font-size: 14px;
    color: #999;
}
.cart-add-addr dl {
    width: 100%;
    overflow: hidden;
    margin-top: 10px;
}
.cart-add-addr span {
    display: block;
    text-align: left;
    width: 40%;
    padding-top: 7px;
}
.cart-add-addr select{
  margin-top: 7px;
}
.cart-add-addr textarea{
  margin-top: 20px;
}
</style>
