<template lang="html">
  <div class="">
    <div class="h-evaluatio h-evaluatio2 ">
      <div class="type">
        <h3>申请类型：报销</h3>
        <div class="pic">
          <img src="../../assets/img/adimg/bx1.jpg" alt="">
          <label>
            <img src="../../assets/img/m_upload.jpg" class="img">
            <input style="display:none;" type="file" capture="" accept="" id="" name="">
          </label>
        </div>
         <router-link to="/insurance_claim/data_three" tag="a" class="btn btn-custom ">上传资料</router-link>
        <p>1、理赔申请书；</p>
        <p>2、受益人有效身份证（正反面）;</p>
        <p>3、诊断证明书/出院小结（含出入院日期且加盖医院公章）</p>
        <p>4、受益人银行卡或存折（请勿提供信用卡）</p>
        <p>5、因意外导致的保险事故并</p>
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
.h-evaluatio2 .type h3 {
    font-size: 16px;
    margin-bottom: 10px;
}
.h-evaluatio2 .type .pic {
    overflow: hidden;
    clear: both;
}
.h-evaluatio2 .type .pic img {
    width: 200px;
    height: 100px;
    float: left;
    border: 1px solid #e8e8e8;
    margin-right: 10px;
    margin-bottom: 10px;
}
.btn-custom {
    margin: 20px 0;
    color: #fff;
    background-color: #10acff;
    border-color: #10acff;
    padding: 8px 18px;
    width: 172px;
}
.h-evaluatio2 p {
    font-size: 14px;
    color: #999;
}
</style>
