<template lang="html">
  <div class="">
    <section class="h_testtit">
      <p>图文咨询是您通过图文方式为用户提供健康咨询服务，
        指导健康生活方式。用户在平台上完成付费后，您会收到相关订单和处理信息。
        该服务费用75%付给医生个人，25%付给本平台。
        <br><span class="f_color3">定价建议：与其他同类平台持平或稍低一些，建议价100～300元/次。</span>
      </p>
    </section>
    <section class="h_testtit_new">
      <div class="clearfix ">
        <span class="col-sm-2">价格</span>
        <span class="col-sm-6">
	<input type="text" name="title" value="" class="form-control text_l_w " id="price" value="0"></span>
      </div>
      <div class="clearfix">
        <div class="col-sm-10">
          <button class="btn btn-primary" onclick="setService()">提交</button>
          <button class="btn" onclick="back()">返回</button>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="css" scoped>
  .h_testtit p {
    font-size: 14px;
  }
  .form-control{
    display: inline;
    width: 40%;
    height:19px;
    margin-left: 180px;
  }
  .h_testtit_new{
    margin-top: 14px;
  }
  .btn-primary{
    width: 240px;
    margin-left: 210px;
  }
</style>
