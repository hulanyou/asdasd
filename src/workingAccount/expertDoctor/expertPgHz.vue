<template lang="html">
  <div class="">
    <section class="h_testtit">
      <p>评估诊断是您根据用户的检查报告做出健康评估诊断，推荐医院医生，
        建议治疗解决方案及医疗预算或预防保健方案，提供相关医院的绿色通道服务。
        用户在平台上完成预约付费后，您会收到相关订单和处理信息。该服务费用65%付给医生个人，35%付给本平台。<br>
        定价建议：一二线城市专家医生1000～2000元/次，地级城市专家医生500～1500元/次。</p>
    </section>
    <section class="h_testtit">
      <div class="y_orderserch">
        <form class="form-inline2 flex flex_wraps" id="searchForm" method="post">
          <div class="form-group flex left">
            <label class="control-label supplier">医生名字：</label>

            <input class="form-control" type="text" value="0" />
            <span class="price">元/次</span>
          </div>
        </form>
      </div>
    </section>
    <section class="h_testtit">
      <div class="y_orderserch">
        <form class="form-inline2 flex flex_wraps" method="post">
          <div class="form-group flex left">
            <label class="control-label supplier">医生名字：</label>

            <!--<input class="form-control" type="text" value="0" />-->
            <!--<span class="price">元/次</span>-->
          </div>
        </form>
      </div>
    </section>
    <section class="h_testtit">
      <div class="y_orderserch">
          <div class="col-sm-10">
            <button class="btn btn-primary" >提交</button>
            <button class="btn">返回</button>
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
    font-size: 16px;

  }
  .h_testtit{
    border-bottom: 1px solid #e3e3e3;
  }
  .h_testtit:nth-of-type(1){
    border:none;
  }
  .h_testtit:nth-of-type(2){
    margin-top: 14px;

  }
  .form-control {
    display: inline;
    width: 220px;
    height: 19px;
    margin-left: 100px;
  }
  .price{
    width: 40px;
    margin-top: 6px;
    margin-left: 8px;
  }
  .supplier {
    width: 84px;
  }
  .form-group{
    padding:0;
  }
  .btn-primary{
    width: 240px;
    margin-left: 180px;
  }
</style>
