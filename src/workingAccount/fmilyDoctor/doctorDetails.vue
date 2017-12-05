<template lang="html">
  <div class="">
    <section class="h_testtit">
      <div class="Doctor_info">
        <div class="info_box flex">
          <div class="info_one flex">
            <img src="../../assets/img/doctor_info.jpg" alt="">
            <div class="info_con">
              <p><span class="info_name">边明徐</span><span class="info_doctor">主任医师 ( 国家级 )</span></p>
              <p><span>北京协和医院</span><span class="info_department">妇产科</span></p>
              <p><span>挂号／电话／视频／图文咨询</span></p>
            </div>
          </div>
          <div class="info-two">
            <p>性别：女</p>
            <p>民族：汉</p>
            <p>出生年月：1946年9月</p>
            <p>籍贯：江苏省常熟</p>
          </div>
        </div>
      </div>
    </section>
    <section class="h_testtit bor_bottom">
      <div class="">
        <p class="font_s">擅长领域</p>
        <p><span>对临床产前诊断，高危妊娠（包括内外科疾病合并妊娠、妊娠期和分娩期并发症）的处理有很高水平。熟练处理妊娠期糖尿病、过期妊娠、妊娠合并甲状腺功能异常、子宫肌瘤合并妊娠、难产、胎儿宫内异常和新生儿窒息等。</span></p>
      </div>
    </section>
    <section class="h_testtit bor_bottom">
      <div class="doctor_introduce">
        <h3 class="font_s">教育经历</h3>
        <p>1970年毕业于北京中国协和医科大学。</p>
        <p>1978—1981年就读中国协和医科大学研究生院妇产科专业，获硕士学位。</p>
        <p>1986—1987年在美国加州大学圣地亚哥医学院妇产科进修围生医学，高危妊娠的临床监测及妇产科超声诊断的技术。
        </p>
        <p>1992—1993年在美国俄亥俄州立大学医学院参与了“早产病因”的临床及基础科研工作。</p>
      </div>
    </section>
    <section class="h_testtit bor_bottom">
      <div class="doctor_introduce">
        <h3 class="font_s">职业经历</h3>
        <p>1981年毕业后在北京协和医院妇产科工作，历任住院医师、总住院医师、主治医师、副教授、教授。</p>
        <p>1994年出任北京协和医院妇产科副主任至今。</p>
      </div>
    </section>
    <section class="h_testtit bor_bottom">
      <div class="doctor_introduce">
        <h3 class="font_s">获得荣誉</h3>
        <p>多次承担原卫生部、国家自然科学基金和国家十五攻关课题的负责人。
</p>
        <p>荣获卫生部科技进步奖、北京市科技进步奖及中华医学科技进步等多项奖项。</p>
        <p>目前承担国家十一五科技支撑课题，主要研究重大遗传病的产前筛查和产前诊断。
        </p>
        <p>参与北京协和医院妇产科主持的“子宫内膜异位症诊治新观念的临床实践”课题，并荣获首届妇幼健康科学技术奖科技成果一等奖。</p>
      </div>
    </section>
    <section class="h_testtit mar_top foote">
      <h3 class="font_s">治疗案例</h3>
      <div class="case_info">
        <p>案列50："大产婆"  语录一</p>
        <span class="mar_top"><a>"</a><a class="case_con">我生怕晚节不保，但还是忍不住往火坑里跳</a><a>"</a></span>
      </div>
      <div class="case_info">
        <p>案列51："大产婆"  语录一</p>
        <span class="mar_top"><a>"</a><a class="case_con">我生怕晚节不保，但还是忍不住往火坑里跳</a><a>"</a></span>
      </div>
      <div class="case_info">
        <p>案列52："大产婆"  语录一</p>
        <span class="mar_top"><a>"</a><a class="case_con">我生怕晚节不保，但还是忍不住往火坑里跳</a><a>"</a></span>
      </div>
      <div class="case_info">
        <p>案列53："大产婆"  语录一</p>
        <span class="mar_top"><a>"</a><a class="case_con">我生怕晚节不保，但还是忍不住往火坑里跳</a><a>"</a></span>
      </div>
      <div class="see_more">
        <a>查看更多</a>
      </div>
      <div class="foot-btn">
        <a class="btn btn-primary left">审核通过</a>
        <a class="btn btn-primary right">审核不通过</a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.h_testtit:nth-of-type(2){
  margin-top: 14px;
}
.info_con{
  margin-left: 16px;
}
.info_con p span{
  font-size: 16px;
}
.info_con p:nth-of-type(2){
  margin-top: 8px;
}
.info_con p:nth-of-type(3){
  margin-top: 10px;
}
.info_con .info_name{
  font-size: 30px;
}
.info_department{
  padding-left: 12px;
}
.info_con .info_doctor{
  padding-left: 16px;
  color: #10adff;
}
.info-two{
  margin-left: 150px;
}
.info-two p:nth-of-type(1){
  margin-top: 0;
}
.info-two p{
  margin-top: 8px;
}
.font_s{
  font-size: 20px;
}
.bor_bottom{
  border-bottom: 1px solid #ccc;
}
.doctor_introduce p{
  margin-top: 14px;
}
.mar_top{
  margin-top: 14px;
}
.case_info{
  padding: 14px 0;
  font-size: 16px;
  width: 100%;
  border-bottom: 1px solid #f7f7f7;
}
.case_info span{
  display: block;
}
.case_con{
  padding: 0 14px;
}
.see_more{
  width: 100%;
  text-align: center;
}
.see_more a{
  padding: 14px 14px;
  display: block;
  position: relative;
}
.see_more a::after{
  content: ">";
  color: #10adff;
  padding-left: 14px;

}
.btn-primary{
  width: 24%;
}
.left{
  margin-left: 16%;
}
.right{
  margin-left: 134px;
}
</style>
