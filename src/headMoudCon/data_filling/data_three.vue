<template lang="html">
  <div class="">
    <div class="h-evaluatio h-evaluatio2 ">
      <div class="type">
        <h3>填写出险信息</h3>
        <p>出险人姓名：张三</p>
        <p>身份证：120225188809092212</p>
        <p>您的电话：13022023906</p>
        <p>申请类型：报销型</p>
        <p>出险日期：2016-09-12</p>
        <p>出险地点：北京  北京市</p>
        <p>理赔额度：30万</p>
        <h3 class="m_mt20">所需上传资料</h3>
        <div class="pic">
         <img src="../../assets/img/adimg/bx1.jpg" alt="">
        </div>
        <p>1、理赔申请书；</p>
        <p>2、受益人有效身份证（正反面）;</p>
        <p>3、诊断证明书/出院小结（含出入院日期且加盖医院公章）</p>
        <p>4、受益人银行卡或存折（请勿提供信用卡）</p>
        <p>5、因意外导致的保险事故并</p>
      </div>
       <router-link to="/insurance_claim/data_four" tag="a" class="btn btn-custom m_mt20">提交申请</router-link>
    </div>

  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.btn-custom {
    margin: 20px 0;
    color: #fff;
    background-color: #10acff;
    border-color: #10acff;
    padding: 8px 18px;
    width: 172px;
}
</style>
