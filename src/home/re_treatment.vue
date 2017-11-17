<template lang="html">
  <div class="m_marbot">
    <div class="layout m_mt30">
    <div class="container">
      <div class="left-73 fl m_marbot">
        <div class="h-doctorms over">
          <div class="pic fl">
            <img src="../assets/img/adimg/doc_img1.jpg" />
          </div>
          <div class="mes">
            <span class="name">高进 <label>执业医师</label></span>
            <p class="hos-name">高杨树社区医院</p>
            <p class="skill">擅长：脑血管疾病、中毒性和放射性脑病、老年性及血管性痴呆、 感染性性神经系统疾病、周围性神经疾病及肌肉疾病的诊治。</p>
          </div>
        </div>
        <div class="h-treat">
          <div class="tip">
            由于是图文咨询，咨询结果会造成信息不准确，咨询信息会有误差，敬请谅解！
          </div>
        </div>
        <div class="result">
          <h3 class="tit-w border-b">咨询结果:</h3>
          <p class="txt">毒性感冒，呼吸道感染，多出上呼吸道炎症。</p>
        </div>
        <div class="result m_mt20">
          <h3 class="tit-w border-b">推荐治疗方案:</h3>
          <p class="txt">根据根据咨询结果，您的身体状态一般，建议采纳居家治疗、中医治疗，具体方案请点击以下推荐方案按钮！</p>
          <ul class="ways">
            <li class="fl">
              <div class="icon"><img src="../assets/img/icons/way01.png" alt=""></div>
              <div class="btn btn-custom2" @mouseenter="inspectshow(1)" @mouseleave="inspecthide(3)">健康方案</div>
              <div class="health-way" :class="{fadeInDow:num==1}">
                <a href="health_check.html" class="tit">健康检查</a>
                <a href="" class="tit">运动管理</a>
                <a href="" class="tit">饮食管理</a>
              </div>
            </li>
            <li class="fl">
              <a href="##">
                <div class="icon"><img src="../assets/img/icons/way02.png" alt=""></div>
                <div class="btn btn-custom2" @mouseenter="inspectshow(2)" @mouseleave="inspecthide(5)">居家治疗</div>
                <div class="health-way" :class="{fadeInDow:num==2}">

                </div>
              </a>
            </li>
            <li class="fl">
              <a href="##">
                <div class="icon"><img src="../assets/img/icons/way03.png" alt=""></div>
                <div class="btn btn-custom2" @mouseenter="inspectshow(4)" @mouseleave="inspecthide(7)">中医治疗</div>
                <div class="health-way" :class="{fadeInDow:num==1}">

                </div>
              </a>
            </li>
            <li class="fl">
              <a href="##">
                <div class="icon"><img src="../assets/img/icons/way04.png" alt=""></div>
                <div class="btn btn-custom2" @mouseenter="inspectshow(6)" @mouseleave="inspecthide(9)">西医治疗</div>
                <div class="health-way" :class="{fadeInDow:num==1}">

                </div>
              </a>
            </li>
            <li class="fl">
              <a href="##">
                <div class="icon"><img src="../assets/img/icons/way05.png" alt=""></div>
                <div class="btn btn-custom2" @mouseenter="inspectshow(8)" @mouseleave="inspecthide(11)">精准治疗</div>
                <div class="health-way" :class="{fadeInDow:num==1}">

                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="ad-box fr">
        <familyboctortr></familyboctortr>
        <!-- <div><a href="##"><img src="../assets/img/adimg/ad_box1.jpg" alt=""></a></div> -->
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import familyboctortr from '@/home/family_boctortzj/family_boctortr'
export default {
  data(){
    return{
      num:0
    }
  },
  methods:{
    inspectshow(index){
      this.num=index;
    },
    inspecthide(index){
      this.num=index;
    }
  },
  components:{
   familyboctortr
  }
}
</script>

<style lang="css" scoped>
.m_marbot{
  margin-bottom: 50px;
}
.h-doctorms {
    position: relative;
    clear: both;
    overflow: hidden;
}
.h-doctorms .pic {
    width: 120px;
    height: 120px;
}
.h-doctorms .pic img {
    width: 100%;
    height: 100%;
}
.h-doctorms .mes {
    color: #333333;
    margin: 0 40px 0 140px;
}
.h-doctorms .mes .name {
    display: block;
    font-size: 22px;
    margin-bottom: 5px;
}
.h-doctorms .mes label {
    font-size: 16px;
    margin-left: 10px;
}
.h-doctorms .mes .skill {
    overflow: hidden;
    word-wrap: break-word;
    -webkit-text-overflow: ellipsis;
    -khtml-text-overflow: ellipsis;
    -icab-text-overflow: ellipsis;
    -moz-text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    height: 42px;
}
.h-treat .tip {
    color: #ff604c;
    line-height: 55px;
}
.result {
    border: 1px solid #e8e8e8;
    position: relative;
    padding: 0 15px 0;
    z-index: 2;
}
h3.tit-w {
    font-size: 18px;
    line-height: 50px;
}
.result p.txt {
    margin: 20px 0;
}
.result .ways {
    width: 100%;
    text-align: center;
    height: 140px;
}
.result .ways li.fl {
    width: 20%;
    height: 140px;
    position: relative;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}
.result .ways .icon {
    width: 60px;
    height: 60px;
    margin: 30px auto 10px;
    overflow: hidden;
}
.result .ways .icon img {
    width: 100%;
    height: 100%;
}
.result .health-way {
    border: 1px solid #e8e8e8;
    background: #fff;
    width: 100%;
    display: none;
    left: 0;
    top: 120px;
    opacity: 0;
    display: none;
    z-index: 10;
    -webkit-box-shadow: 0 0 5px rgba(140, 140, 140, 0.1);
    -moz-box-shadow: 0 0 5px rgba(140, 140, 140, 0.1);
    box-shadow: 0 0 5px rgba(140, 140, 140, 0.1);
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}
.result .health-way .tit {
    display: block;
    font-size: 18px;
    color: #333333;
    text-align: center;
    border-bottom: 1px solid #e8e8e8;
    line-height: 50px;
}
.result .health-way.fadeInDow {
  opacity: 1;
  display: block;
  top: 140px;
}
.ad-box{
  margin-bottom: 50px;
}
</style>
