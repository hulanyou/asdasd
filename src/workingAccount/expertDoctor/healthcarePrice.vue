<template lang="html">
  <div class="price_box">
    <section class="h_testtit">
      <p>保健卡是您为用户制定保健计划，指导专业体检，
        进行专业评估诊断并提供绿色通道服务。
        用户在平台上购买保健卡后，您会收到相关订单和处理信息。
        该服务费用65%付给医生个人，35%付给本平台。
        <br>		定价建议：一二线城市专家医生5000～10000元/次，地级城市专家医生2500～7500元/次。该产品限量100张。</p>
    </section>
    <section class="h_testtit">
      <div class="y_orderserch">
        <form class="form-inline2 flex flex_wraps" id="searchForm" method="post">
          <div class="form-group flex left">
            <label class="control-label supplier">服务价格：</label>
            <input class="form-control" type="text" value="0" />
            <span class="price">元/次</span>
          </div>
        </form>
      </div>
    </section>
    <section class="h_testtit" v-for="i in pricelist">
      <span class="col-sm-10">
					{{i.year}}<span class="f_color3">￥<font id="oneYearPrice"></font></span>{{i.size}}
				</span>
    </section>

    <section class="h_testtit" v-for="j in serverlist">
      <div class="form-group flex left">
        <label class="control-label supplier">{{j.title}}</label>
        <div class="label_box"> <span>{{j.content}}</span></div>
      </div>
    </section>

    <div class="footer_box">
      <div class="col-sm-10">
        <button class="btn btn-primary" onclick="setService()">提交</button>
        <button class="btn" onclick="back()">返回</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        pricelist:[
          {
            year:"一年卡：",
            size:"（限售100张）"
          },
          {
            year:"三年卡：",
            size:"（限售300张）"
          },
          {
            year:"五年卡：",
            size:"（限售300张）"
          },
          {
            year:"十年卡：",
            size:"（限售1000张）"
          },
        ],
        serverlist:[
          {
            title:"功能简介：",
            content:"适用于全年龄段、全人群，根据您的健康需求制定保健计划。为您提供专业体检指导，" +
            "实施专业评估诊断。并为您提供相关医院的绿色通道服务。"
          },
          {
            title:"服务时间：",
            content:"1、为用户制定专项的保健计划和保健目标，确保用户的健康长寿。&lt;br&gt; 2、根据用户自身的健康状况制定有针对性的健康体检项目。&lt;br&gt; 3、对用户健康体检报告做出精准评估诊断，进而制定相应的专项保健项目。&lt;br&gt; 4、根据用户需求提供特需健康体检、康复理疗、口腔保健等服务。&lt;br&gt; 5、在遇到健康方面问题时，专家医生第一时间为用户提供保健服务。&lt;br&gt; 6、对用户的身体状况提出健康管理方案和健康维护意见。"
          },
          {
            title:"服务内容：",
            content:" 除了专家医生制定的专业保健计划时间之外，其它时间根据用户的实际情况随时响应"
          }
        ]

      }
    }
  }
</script>
<style lang="css" scoped>
  .price_box{
    max-height: 500px;
    overflow: auto;
  }
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
  .label_box{
    margin-left: 86px;
    margin-top: 10px;
    width: 82%;
    font-size: 14px;
    overflow-x: auto;
  }
  .label_box span{
    display: block;
    width: 10000px;
    padding: 8px 6px 10px 4px;
    background: #ebeaf0;
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
  .col-sm-10{
    margin-left: 180px;
  }
  .control-label p{
    margin-top: 6px;
    font-size: 12px;

  }
  .footer_box{
    background: #fff;
    padding: 14px 0;
  }
</style>
